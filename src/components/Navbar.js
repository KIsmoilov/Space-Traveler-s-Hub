import React from 'react';
import logo from '../assets/planet.png';

// stylesheet
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <div className="pageLogo">
      <img className="logo" src={logo} alt="logo" />
      <h1>Space Travelers` Hub</h1>
    </div>
  </nav>
);
export default Navbar;
