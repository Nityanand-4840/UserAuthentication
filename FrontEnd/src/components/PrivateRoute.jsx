import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Attempt to fetch data from the protected route
                await axios.get("http://localhost:3000/api/auth/dashboard", {
                    withCredentials: true,
                });
                // If the request is successful (no error thrown), the user is authenticated
            } catch (error) {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate("/login?error=login_required"); // Redirect with an error message
                } else {
                    console.error("Authentication check failed:", error);
                    navigate("/login?error=auth_check_failed"); // Redirect with a generic error
                }
            }
        };

        checkAuth();
    }, [navigate]);

    return element; // Render the component if the authentication check doesn't redirect
};

export default PrivateRoute;