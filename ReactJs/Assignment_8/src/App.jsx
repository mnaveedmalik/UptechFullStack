import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // GET USERS
  const fetchUsers = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE
  const handleCreate = async () => {
    if (!name || !email) return alert("Fill all fields");

    try {
      const res = await axios.post(BASE_URL, { name, email });
      setUsers([res.data, ...users]);
      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/${editId}`, {
        name,
        email,
      });

      const updatedUsers = users.map((user) =>
        user.id === editId ? res.data : user
      );

      setUsers(updatedUsers);
      setEditId(null);
      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Segoe UI",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
        👨‍💼 User Management System
      </h2>

      {/* FORM */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        {editId ? (
          <button
            onClick={handleUpdate}
            style={{
              padding: "10px 15px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleCreate}
            style={{
              padding: "10px 15px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add User
          </button>
        )}
      </div>

      {/* TABLE */}
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#343a40", color: "#fff" }}>
            <tr>
              <th style={{ padding: "12px" }}>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px" }}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() => handleEdit(user)}
                    style={{
                      marginRight: "8px",
                      padding: "5px 10px",
                      background: "#ffc107",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      padding: "5px 10px",
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;