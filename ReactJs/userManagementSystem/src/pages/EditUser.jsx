
import { useEffect, useState } from "react";

import { getUser, updateUser } from "../services/useServices";

import Form from "../components/Form";

import Loader from "../components/Loader";

import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUser(id);
                setUser(res.data);
            } catch {
                toast.error("Error loading user");
            }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (data) => {
        try {
            await updateUser(id, data);
            toast.success("Updated");
            navigate("/");
        } catch {
            toast.error("Update failed");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            {user ? <UserForm initialData={user} onSubmit={handleSubmit} /> : <Loader />}
        </div>
    );
};

export default EditUser;