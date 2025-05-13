import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/auth/dashboard",
                    { withCredentials: true }
                );
                console.log("API Response:", response.data);
                if (response.data && response.data.user) {
                    setUserData(response.data.user);
                } else {
                    throw new Error("No user data found");
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError("Failed to fetch dashboard data.");
                // No need to redirect here, PrivateRoute handles it
            }
        };

        fetchUserData();
    }, []); // Removed navigate from dependency array

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:3000/api/auth/logout",
                {},
                { withCredentials: true }
            );
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
            setError("Logout failed. Please try again.");
        }
    };

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Welcome to Your Dashboard</h2>
            {userData ? (
                <div>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Id:</strong> {userData._id}</p>
                    <p><strong>Is Verified:</strong> {userData.isVerified ? "Yes" : "No"}</p>
                    <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;