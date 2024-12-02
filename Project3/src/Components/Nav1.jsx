import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';

function Nav1() {
  return (
    <>
    <nav className='navbar'>
      <div className='navLogo'>
        <Link className='navBrand' to="Home">Logo</Link>
      </div>
      <div className='navSection'>
        <Link className='navHome' to="Home">Home</Link>
        <Link className='navBlogs' to="Bolg">Blogs</Link>
        <Link className='navServices' to="Services">Services</Link>
        <Link className='navAbout' to="About">About</Link>
        <Link className='navContact' to="Contact">Contact</Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">DropDown</NavDropdown> */}
      </div>
      <div className='navIcon'>
        <Link className='navSingIn' to="SingIn">Sing In</Link>
        <Link className='navSingUp' to="SingUp">Sign Up</Link>
        <Link className='navCart' to="Cart">Cart</Link>
        <Link className='navCheckout' to="Checkout">Checkout</Link>
      </div>
    </nav>
    </>
  )
}

export default Nav1;
