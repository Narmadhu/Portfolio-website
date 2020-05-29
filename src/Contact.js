import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <form className="contact-form">
        <h1>Contact Us</h1>
        <div>
          <input type="text" id="input-box" placeholder="Name" />
        </div>
        <div>
          <input type="text" id="input-box" placeholder="Email" />
        </div>
        <div>
          <textarea id="input-box" placeholder="Message"></textarea>
        </div>
        <div>
          <button id="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
