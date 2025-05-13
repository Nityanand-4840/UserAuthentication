

import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard component
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {



  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>);
};

export default App;

 