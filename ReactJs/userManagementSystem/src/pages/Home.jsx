
import { useEffect, useState } from "react";

import { getUsers, deleteUser } from "../services/useServices";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import { toast } from "react-toastify";


const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        console.log("fetching user");
        setLoading(true);
        try {
            const res = await getUsers();
            console.log("API RESPONSE:", res);
            setUsers(res.data);
        } catch {
            toast.error("Error fetching users");
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log("Fetch user is running");
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            toast.success("Deleted successfully");
            fetchUsers();
        } catch {
            toast.error("Delete failed");
        }
    };
    console.log("Users:", users);
    return (

        <div className="p-6 space-y-4">
            {loading ? (

                <Loader />
            ) : (
                users.map((user) => (
                    <UserCard key={user.id} user={user} onDelete={handleDelete} />
                ))
            )}
        </div>
    );
};

export default Home;