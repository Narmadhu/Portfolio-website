import React from "react";
import "./Header.css";

const Header = ({ img }) => {
  return (
    <div className="header">
      <img src={img} alt="" />
      <h1>MERN Full stack Developer</h1>
    </div>
  );
};

export default Header;
