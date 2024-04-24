import React from "react";
import '../styles/NavBar.css';
import logo from '../logo.png'

function NavBar() {
  let items = ['Home', 'Our Programs', 'About Us', 'FAQ', 'User Policy', 'Contact Us'];

  return (
    <>
      <div className="contact-info">
        <h4>
          Call: +1 437 439 5865
        </h4>
        <h3 className="contact-seperator">
          |
        </h3>
        <h4>
          Email: info@bantued.com
        </h4>
      </div>
      <div className="NavBar">
      < img src={logo} className="logoItem"/>
        {items.map((item, index) => (
          <h1 className="navItem" key={index}>{item}</h1>
        ))}
      </div>
    </>
  );
}

export default NavBar;