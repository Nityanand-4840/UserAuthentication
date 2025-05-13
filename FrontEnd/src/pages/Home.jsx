import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-xs text-center">
        <h1 className="text-3xl font-bold text-black mb-2">
          Authentication + OTP Verification
        </h1>
        <h2 className="text-lg text-black mb-4">MERN Stack</h2>

        <div className="d-flex justify-content-center gap-2">
          <Link
            to="/login"
            className="btn btn-primary btn-sm rounded-pill shadow"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-secondary btn-sm rounded-pill shadow"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
