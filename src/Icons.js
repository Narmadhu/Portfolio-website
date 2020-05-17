import React from "react";
import "./Services.css";
import { FaMobile, FaStar, FaPen } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="row">
      <div>
        <FaMobile className="icon" />
        <h4>Responsive </h4>
        <p>Looks great on all devices</p>
      </div>
      <div>
        <FaPen className="icon" />
        <h4>Redesign</h4>
        <p>Wind up with new website</p>
      </div>
      <div>
        <FaStar className="icon" />
        <h4>Featured</h4>
        <p>Website with key features</p>
      </div>
    </div>
  );
};

export default Icons;
