import React from 'react';
import HomeImage from '../../src/img/HomePage.png';
import HomeBoldTextImage from '../../src/img/HomeBoldText.png';
import HomeTextImage from '../../src/img/HomeText.png';

const HomeSection = () => {
    
  return (
    <div className="home-section">
      <div className="text">
        <img src={HomeBoldTextImage} alt="Home" className="centered-image" />
        <img src={HomeTextImage} alt="Home" className="centered-image" />
      </div>
      <div className="image-container">
        <img src={HomeImage} alt="Home" className="centered-image" />
      </div>
    </div>
  );
}

export default HomeSection;
