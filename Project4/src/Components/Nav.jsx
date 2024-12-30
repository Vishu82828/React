import React from "react";
import { Link} from 'react-router-dom';


const Nav = () => {
  return (
    <>
      <nav className="nav-bar d-inline">
        <Link to='/Home'>
        <div className="our-home">
          <h2>Home</h2>
        </div>
        </Link>
        <Link to='/Cart'>
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-bag-heart"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
            />
          </svg>
          <span className="item">
            <span> 0 </span>
          </span>
        </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
