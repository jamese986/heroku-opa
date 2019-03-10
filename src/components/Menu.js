import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="http://facebook.com/" className="navbar-brand">
        @JAMESE986
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Data-Visualisation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
