import { Link } from "react-router-dom";
export const Nav = () => {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">User Management</h1>

            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/add">Add User</Link>
            </div>
        </div>
    );
};

