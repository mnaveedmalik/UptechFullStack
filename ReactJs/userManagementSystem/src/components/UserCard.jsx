
import { Link } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <div className="space-x-2">
                <Link
                    to={`/edit/${user.id}`}
                    className="bg-yellow-400 px-3 py-1 rounded"
                >
                    Edit
                </Link>

                <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;