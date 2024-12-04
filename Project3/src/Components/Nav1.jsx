import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Nav.css";
import { FaCartPlus } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

function Nav1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.username) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleLogout = () => {
  //   // localStorage.removeItem('userData');
  //   setIsLoggedIn(false);
  //   navigate("/SingIn");
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, path: "Home", name: "Home" },
    { id: 2, path: "Blog", name: "Blog" },
    { id: 3, path: "Services", name: "Services" },
    { id: 4, path: "About", name: "About" },
    { id: 5, path: "Contact", name: "Contact" },
  ];

  const navIcons = [
    { id: 6, path: "Cart", name: "Cart" },
    { id: 7, path: "Checkout", name: "Checkout" },
  ];

  return (
    <>
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <Link className="navbar__brand" to="Home">
            Logo
          </Link>
          <div
            className={`navbar__hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleNav}
          >
            <span className="navbar__bar"></span>
            <span className="navbar__bar"></span>
            <span className="navbar__bar"></span>
          </div>
        </div>
        <div className={`navbar__section ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              className={`navbar__text navbar__${item.name}`}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className={`navbar__icons ${isOpen ? "open" : ""}`}>
          {isLoggedIn ? (
            // <Link className="navbar__text navbar__logout" onClick={handleLogout}>LogOut</Link>
            <Link className="navbar__text navbar__logout" 
            onClick={()=>{setIsLoggedIn(false);
              navigate("/SingIn");
            }}>
              LogOut
            </Link>
          ) : (
            <>
              <Link className="navbar__text navbar__signin" to="SingIn">
                Sign In
              </Link>
              <Link className="navbar__text navbar__signup" to="SingUp">
                Sign Up
              </Link>
            </>
          )}

          <Link className="navbar__text navbar__cart" to="Cart" title="Cart">
            <FaCartPlus className="navbar__icon" />
          </Link>
          <Link
            className="navbar__text navbar__checkout"
            to="Checkout"
            title="CheckOut"
          >
            <IoBagCheckOutline className="navbar__icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav1;
