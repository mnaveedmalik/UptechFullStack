
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
    );
};

export default AppRoutes;