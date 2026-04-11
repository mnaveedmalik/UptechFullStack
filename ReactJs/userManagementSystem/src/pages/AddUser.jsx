import Form from "../components/Form";
import { addUser } from "../services/useServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    console.log("Add user value");

    const handleSubmit = async (data) => {
        try {
            await addUser(data);
            toast.success("User Added");
            navigate("/");
        } catch {
            toast.error("Error adding user");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddUser;