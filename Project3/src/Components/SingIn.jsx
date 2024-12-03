import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SingIn.css";

function SingIn() {
  // const handleLogout = () => {
  //   localStorage.removeItem('userData');
  //   setIsSingIn(false);
  //   navigate('/SingIn');
  // };

  useEffect(() => {
    const singIn = JSON.parse(localStorage.getItem("userData"));
    if (singIn && singIn.username && singIn.password) {
      setIsSingIn(true);
    }
  }, []);

  const [isSingIn, setIsSingIn] = useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSingInHome = (e) => {
    e.preventDefault();
    const SingIn = JSON.parse(localStorage.getItem("userData"));
    if (
      SingIn &&
      SingIn.username === data.username &&
      SingIn.password === data.password
    ) {
      setIsSingIn(true);
      navigate("/Home");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSingUp = () => {
    navigate("/SingUp");
  };

  return (
    <>
      <span className="singin__head">Welcome to Sing-In page</span>
      <form className="singin__form">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleChange}
          className="singin__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="singin__input"
        />
        <button
          type="submit"
          onClick={handleSingInHome}
          className="singin__button"
        >
          Sing In
        </button>
        <button
          type="submit"
          onClick={handleSingUp}
          className="singin__button singin__signup-button"
        >
          Sing Up
        </button>
        {/* {isSingIn && <button onClick={handleLogout} className='singin__button singin__logout-button'>Logout</button>} */}
      </form>
    </>
  );
}

export default SingIn;
