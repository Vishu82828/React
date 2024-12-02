import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Nav.css";

function Nav1() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, path: "Home", name: "Home" },
    { id: 2, path: "Bolg", name: "Blogs" },
    { id: 3, path: "Services", name: "Services" },
    { id: 4, path: "About", name: "About" },
    { id: 5, path: "Contact", name: "Contact" }
  ];

  const navIcons = [
    { id: 6, path: "SingIn", name: "Sign In" },
    { id: 7, path: "SingUp", name: "Sign Up" },
    { id: 8, path: "Cart", name: "Cart" },
    { id: 9, path: "Checkout", name: "Checkout" }
  ];

  return (
    <>
      <nav className='navbar'>
        <div className='navLogo'>
          <Link className='navBrand' to="Home">Logo</Link>
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className={`navSection ${isOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <Link key={item.id} className={`navtext nav${item.name}`} to={item.path}>{item.name}</Link>
          ))}
        </div>
        <div className={`navIcon ${isOpen ? 'open' : ''}`}>
          {navIcons.map(icon => (
            <Link key={icon.id} className={`navtext nav${icon.name}`} to={icon.path}>{icon.name}</Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav1;
