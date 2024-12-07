// import '../MyCss/Sing.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Sing = () => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({fname: "", lname:"", pass1:"", email:"", phone:""});

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setData({...data, [name]: value});
//   }

//   const user_Singup = () => {
//     navigate('/Login');
//   }

//   const user_Singin = () => {
//     navigate('/Login');
//   }

//   return (
//     <>
//       <h1>Sing Up Page</h1>
//       <label htmlFor="fname">
//         First Name: <input type="text" name='fname' value={data.fname} onChange={handleInputChange} />
//       </label><br />
//       <label htmlFor="lname">
//         Last Name: <input type="text" name='lname' value={data.lname} onChange={handleInputChange} />
//       </label><br />
//       <label htmlFor="pass1">
//         Password: <input type="password" name='pass1' value={data.pass1} onChange={handleInputChange} />
//       </label><br />
//       <label htmlFor="email">
//         Email: <input type="email" name='email' value={data.email} onChange={handleInputChange} />
//       </label><br />
//       <label htmlFor="phone">
//         Phone: <input type="number" name='phone' value={data.phone} onChange={handleInputChange} />
//       </label><br />
//       <button onClick={user_Singup}>Register</button>
//       <button onClick={user_Singin}>Login</button>
//     </>
//   );
// }

// export default Sing;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sing() {
  const [data, setData] = useState([]);
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [mobile, updateMobile] = useState("");
  const navigate = useNavigate();

  function add_data(e) {
    e.preventDefault();
    const user_data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };
    setData(c => [...c, user_data]);
    updateName("");
    updateEmail("");
    updatePassword("");
    updateMobile("");
  }

  const Signup = () => {
    navigate('/login');
  };

  function remove_data(index) {
    setData(data.filter((item, i) => i !== index));
  }

  localStorage.setItem("user_data", JSON.stringify(data));

  return (
    <div className='boss'>
      <div className="sign">
        <h1 className='heading1'>Sign Up Page</h1>
        <ul>
          {data.map((i, index) => (
            <li key={index}>
              <h1>{i.name}</h1>
              <h1>{i.email}</h1>
              <h1>{i.password}</h1>
              <h1>{i.mobile}</h1>
              <button onClick={() => remove_data(index)}>remove</button>
            </li>
          ))}
        </ul>
        <form action="">
          Name: <input type="text" value={name} onChange={(e) => updateName(e.target.value)} placeholder='Enter Your Name' /><br />
          Email: <input type="text" value={email} onChange={(e) => updateEmail(e.target.value)} placeholder='Enter Your Email' /><br />
          Password: <input type="text" value={password} onChange={(e) => updatePassword(e.target.value)} placeholder='Enter Your Password' /><br />
          Mobile: <input type="text" value={mobile} onChange={(e) => updateMobile(e.target.value)} placeholder='Enter Your Mobile Number' /><br />
          <button onClick={Signup}>Signup</button>
          <button onClick={add_data}>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Sing;
