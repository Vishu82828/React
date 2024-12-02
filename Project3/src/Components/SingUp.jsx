import React, { useState } from 'react';
import '../Styles/SingUp.css';
import { useNavigate } from 'react-router-dom';

function SingUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({ fname: "", lname: "", username: "", password: "", phone: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data);
    navigate('/SingIn');
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    navigate('/SingIn');
  };

  return (
    <>
      <span className='singup__head'>Welcome to Sing-Up page</span>
      <form action="" className='singup__form'>
        <div className='singup__input-group'>
          <label htmlFor="fname" className='singup__label'>
            <input type="text" id="fname" placeholder="First Name" name='fname' value={data.fname} onChange={handleChange} className='singup__input'/>
          </label>
          <label htmlFor="lname" className='singup__label'>
            <input type="text" id="lname" placeholder="Last Name" name='lname' value={data.lname} onChange={handleChange} className='singup__input'/>
          </label>
        </div>
        <div className='singup__input-group'>
          <label htmlFor="username" className='singup__label'>
            <input type="text" id="username" placeholder="Username" name='username' value={data.username} onChange={handleChange} className='singup__input'/>
          </label>
          <label htmlFor="password" className='singup__label'>
            <input type="password" id="password" placeholder="Password" name='password' value={data.password} onChange={handleChange} className='singup__input'/>
          </label>
        </div>
        <div className='singup__input-group'>
          <label htmlFor="phone" className='singup__label'>
            <input type="text" id="phone" placeholder="Phone Number" name='phone' value={data.phone} onChange={handleChange} className='singup__input'/>
          </label>
          <label htmlFor="email" className='singup__label'>
            <input type="email" id="email" placeholder="Email" name='email' value={data.email} onChange={handleChange} className='singup__input'/>
          </label>
        </div>
        <button type="submit" onClick={handleSingUp} className='singup__button'>Sing Up</button>
        <button type='submit' onClick={handleSingIn} className='singup__button singup__login-button'>Login</button>
      </form>
    </>
  );
}

export default SingUp;
