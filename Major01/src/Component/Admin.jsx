import React, { useEffect, useState } from "react";
import { getuser, adduser, deleteuser, updateuser } from "../API/userService.jsx";

function Admin() {
  const [user_data, update_user_data] = useState([]);
  const [name, updatename] = useState("");
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    const newUser = { name, email, password };
    if (isEditing) {
      await updateuser(currentUserId, newUser);
      setIsEditing(false);
      setCurrentUserId(null);
    } else {
      await adduser(newUser);
    }
    updatename("");
    updateemail("");
    updatepassword("");
    const data = await getuser();
    update_user_data(data);
  };

  const handleDeleteUser = async (id) => {
    console.log("delete user", id);
    await deleteuser(id);
    const data = await getuser();
    update_user_data(data);
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUserId(user.id);
    updatename(user.name);
    updateemail(user.email);
    updatepassword(user.password);
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
                <button onClick={() => handleEditUser(item)}>edit</button>
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
        <button type="submit">{isEditing ? "Update User" : "Add User"}</button>
      </form>
    </>
  );
}

export default Admin;
