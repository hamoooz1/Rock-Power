import React from 'react';
import '../styles/LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className='hero-container'>
        <p className="cta-text">EMPOWERING AFRICA'S FUTURE WITH AI LEARNING TECHNOLOGIES</p>
        <button className="cta-button">
          <span>
            Discover our Programs 
          </span> 
          <FontAwesomeIcon icon={faChevronRight} />          
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
