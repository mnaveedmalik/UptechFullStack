

import { useState, useEffect } from "react";

const Form = ({ onSubmit, initialData }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        if (initialData) setUser(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(user);
            }}
            className="bg-white p-6 rounded shadow w-full max-w-md"
        >
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
            />

            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Submit
            </button>
        </form>
    );
};

export default Form;