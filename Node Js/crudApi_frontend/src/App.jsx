import React, { useState, useEffect } from "react";

import axios from "axios";

const BASE_URL = "http://localhost:3000"; // backend URL

function App() {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  // GET all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREATE post
  const handleCreate = async () => {
    if (!author || !title) return alert("Fill both fields");
    try {
      await axios.post(BASE_URL, { author, title });
      setAuthor("");
      setTitle("");
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT post (populate form)
  const handleEdit = (post) => {
    setEditId(post.id);
    setAuthor(post.author);
    setTitle(post.title);
  };

  // UPDATE post
  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/${editId}`, { author, title });
      setEditId(null);
      setAuthor("");
      setTitle("");
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>React CRUD with Node.js</h2>

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: "5px" }}
      />
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "5px" }}
      />

      {editId ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:{post.title}</strong> Author: {post.author}{" "}
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;