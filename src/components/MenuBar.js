import React from 'react';
import logoImage from '../../src/img/MenuLogo.png';

const MenuBar = ({ activeSection }) => {
  return (
    <div className={`menu ${activeSection ? 'active' : ''}`}>
        <div className="logo">
          <img src={logoImage} alt="Home" className="" />
        </div>
      <nav>
        <ul>
          {/* <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li> */}
          <li className={activeSection === 'resume' ? 'active' : ''}><a href="#resume">Resume</a></li>
          <li className={activeSection === 'tools' ? 'active' : ''}><a href="#tools">Tools</a></li>
          {/* <li className={activeSection === 'job-tracker' ? 'active' : ''}><a href="#job-tracker">Job Tracker</a></li> */}
          <li className={activeSection === 'interview-prep' ? 'active' : ''}><a href="#interview-prep">Prep</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default MenuBar;
