
import axiosInstance from "../api/axiosInstance";
export const getUsers = async () => {
    try {
        const res = await axiosInstance.get("/users");
        return res;
    } catch (error) {
        console.log("SERVICE ERROR:", error);
        throw error;
    }
};

export const getUser = async (id) => {
    return await axiosInstance.get(`/users/${id}`);
};

export const addUser = async (data) => {
    return await axiosInstance.post("/users", data);
};

export const updateUser = async (id, data) => {
    return await axiosInstance.put(`/users/${id}`, data);
};

export const deleteUser = async (id) => {
    return await axiosInstance.delete(`/users/${id}`);
};