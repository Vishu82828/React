import '../MyCss/Sing.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sing = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({fname: "", lname:"", pass1:"", email:"", phone:""});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const user_Singup = () => {
    navigate('/Login');
  }

  const user_Singin = () => {
    navigate('/Login');
  }

  return (
    <>
      <h1>Sing Up Page</h1>
      <label htmlFor="fname">
        First Name: <input type="text" name='fname' value={data.fname} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="lname">
        Last Name: <input type="text" name='lname' value={data.lname} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="pass1">
        Password: <input type="password" name='pass1' value={data.pass1} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="email">
        Email: <input type="email" name='email' value={data.email} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="phone">
        Phone: <input type="number" name='phone' value={data.phone} onChange={handleInputChange} />
      </label><br />
      <button onClick={user_Singup}>Register</button>
      <button onClick={user_Singin}>Login</button>
    </>
  );
}

export default Sing;
