import React from "react";
import '../styles/NavBar.css';
import logo from '../logo.png'

function NavBar() {
  let items = ['Home', 'Our Programs', 'About Us', 'FAQ', 'User Policy', 'Contact Us'];

  return (
    <div className="NavBar">
      <img src={logo} className="logoItem"/>
      {items.map((item, index) => (
        <h1 className="navItem" key={index}>{item}</h1>
      ))}
    </div>
  );
}

export default NavBar;