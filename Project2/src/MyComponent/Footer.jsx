import React from "react";
import { Link } from "react-router-dom";
import '../MyCss/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link className="btn btn-primary" to="/Go someWhere">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
