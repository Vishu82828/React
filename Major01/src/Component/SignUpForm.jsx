import React, { useState } from 'react';
import '../Styles/SignUpForm.css';

const SignUpForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="popup">
      <div className="popup-inner singup__form">
        <div className="popup-header">
          <h2 className="singup__head">{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <span className="close-icon" onClick={onClose}>✕</span>
        </div>
        <form className="form">
          {!isLogin && (
            <div className="singup__input-group">
              <label className="singup__label">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  className="singup__input"
                />
              </label>
              <label className="singup__label">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  className="singup__input"
                />
              </label>
            </div>
          )}
          <div className="singup__input-group">
            <label className="singup__label">
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="singup__input"
              />
            </label>
            <label className="singup__label">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="singup__input"
              />
            </label>
          </div>
          {!isLogin && (
            <div className="singup__input-group">
              <label className="singup__label">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="singup__input"
                />
              </label>
              <label className="singup__label">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  className="singup__input"
                />
              </label>
            </div>
          )}
          <button type="submit" className="singup__button">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>
        <div className="bottom-text">
          {isLogin ? (
            <p>
              Don't have an account? <span onClick={toggleForm} className="toggle-text">Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={toggleForm} className="toggle-text">Log In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
