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

// ------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { getData, delData, addUser } from '../API/userService';

// const Admin = () => {
//   const [data, setData] = useState([]);
//   const [isEdit, setEdit] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   // Get data from server
//   const handleData = async () => {
//     const response = await getData();
//     setData(response.data);
//   };

//   // Delete data from server
//   const handleDel = async (id) => {
//     await delData(id);
//     const updatedData = await getData(); // Fetch the updated data
//     setData(updatedData.data);
//   };

//   // Edit the existing data from server
//     const handleUpdate = (id) => {
//     setEdit(true);
//   };

//   // Add new user
//   const handleAddUser = async (e) => {
//     e.preventDefault();
//     addPostData();
//   };

//   // to add deta in server
//   const addPostData = async() => {
//     const response = await addUser(formData)
//     console.log("response write = ",response)
//     if((response.status===201)){
//       setData([...data,response.data])
//     }
//     setFormData({ name: "", email: "", password: "" })
//   }

//   // Get value from input field
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Automatically call handleData when component mounts
//   useEffect(() => {
//     handleData();
//   }, []);

//   return (
//     <>
//       <h1>Admin</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Pass</th>
//             <th>Del</th>
//             <th>Update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* map function returns JSX in small bracket () */}
//           {data.map((e) => (
//             <tr key={e.id}>
//               <td>{e.id}</td>
//               <td>{e.name}</td>
//               <td>{e.email}</td>
//               <td>{e.password}</td>
//               <td>
//                 <button onClick={() => handleDel(e.id)}>Del</button>
//               </td>
//               <td>
//                 <button onClick={() => handleUpdate(e.id)}>Update</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <form onSubmit={handleAddUser}>
//         <input
//           type="text"
//           name="name"
//           placeholder='Name'
//           value={formData.name}
//           onChange={handleOnChange}
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder='Email'
//           value={formData.email}
//           onChange={handleOnChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder='Password'
//           value={formData.password}
//           onChange={handleOnChange}
//         />
//         <button type="submit">{isEdit ? 'Update' : 'Add User'}</button>
//       </form>
//     </>
//   );
// };

// export default Admin;