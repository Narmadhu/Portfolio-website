import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className="Nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
