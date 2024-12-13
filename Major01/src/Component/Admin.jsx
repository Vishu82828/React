import React, { useEffect, useState } from "react";
import { getuser, adduser, deleteuser } from "../API/userService.jsx";

function Admin() {
  const [user_data, update_user_data] = useState([]);
  const [name, updatename] = useState("");
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    const newUser = { name, email, password };
    await adduser(newUser);
    updatename("");
    updateemail("");
    updatepassword("");
    const data = await getuser();
    update_user_data(data);
  };

  const handleDeleteUser = async (id) => {
    console.log("delete user", id);
    await deleteuser(id); // Make sure to use the correct API function
    const data = await getuser();
    update_user_data(data);
  };

  useEffect(() => {
    const fetchuser = async () => {
      const data = await getuser();
      update_user_data(data);
    };
    fetchuser();
  }, []);

  return (
    <>
      <h1>This is Admin</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {user_data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleDeleteUser(item.id)}>delete</button>
              </td>
              <td>
                <button>update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleAddUser}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => updatename(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => updateemail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => updatepassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default Admin;
