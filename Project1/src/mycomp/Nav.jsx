import React from "react";
import { Link } from "react-router-dom";
import '../mystyle/Main.css';
import SingUp from "./SingUp";
import SingIn from "./SingIn";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Logo</span>
      </div>
      <div className="nav-link">
        <ul>
            <li>
                <Link to="SingUp">Sing Up</Link>
            </li>
            <li>
                <Link to="SingIn">Sign In</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
