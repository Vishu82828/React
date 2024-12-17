import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import "../Styles/Home.css";

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignUp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowSignUp(false);
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      {showSignUp && <SignUpForm onClose={handleClose} />}
    </div>
  );
};

export default Home;
