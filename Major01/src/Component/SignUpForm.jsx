import React, { useState } from 'react';
import "../Styles/SignUpForm.css";

const SignUpForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <span className="close-icon" onClick={onClose}>✕</span>
        </div>
        <form>
          {!isLogin && (
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
          )}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
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