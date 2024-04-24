import React, { useState } from "react";
import '../styles/NavBar.css';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  let items = ['Home', 'Our Programs', 'About Us', 'FAQ', 'User Policy', 'Contact Us'];

  const [showContactInfo, setShowContactInfo] = useState(true);

  const handleButtonClick = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="nav">
      {/* Render the close button only if showContactInfo is true */}
      {showContactInfo && <FontAwesomeIcon icon={faTimes} className="close-button" onClick={handleButtonClick} />}
      {/* Render the contact info only if showContactInfo is true */}
      {showContactInfo && (
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
      )}
      <div className="NavBar">
        <img src={logo} className="logoItem"/>
        {items.map((item, index) => (
          <h1 className="navItem" key={index}>{item}</h1>
        ))}
      </div>
      <div className="circle-button" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faPlus} />
     </div>
    </div>
  );
}

export default NavBar;
