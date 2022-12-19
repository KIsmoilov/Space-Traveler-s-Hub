import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

// stylesheet
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav className="navBar">
      <div className="pageLogo">
        <img className="logo" src={logo} alt="logo" />
        <h1>Space Travelers` Hub</h1>
      </div>
      <ul className="menuNav">
        {links.map((link) => (
          <li key={link.id} className="navList">
            <NavLink
              to={link.path}
              className="active-link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
