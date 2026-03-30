import { useEffect, useState } from "react";
import axios from "axios";

export function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(res.data);
            } catch (error) {
                console.log("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // ✅ runs ONLY once

    return (
        <>
            <h2>Users List</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                users.map((user) => (
                    <div key={user.id}>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <hr />
                    </div>
                ))
            )}
        </>
    );
}




// ya manual method ha aur ya sab sa best way ha

// import { useState, useEffect } from "react";
// import axios from "axios";

// export function Users() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshKey, setRefreshKey] = useState(0); // triggers refresh

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//         setUsers(res.data);
//       } catch (error) {
//         console.log("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [refreshKey]); // runs only when refreshKey changes

//   return (
//     <div>
//       <h2>Users List</h2>
//       <button onClick={() => setRefreshKey(prev => prev + 1)}>Refresh Users</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         users.map(user => (
//           <div key={user.id}>
//             <p><b>Name:</b> {user.name}</p>
//             <p><b>Email:</b> {user.email}</p>
//             <hr />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }