import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/ladder">Ladder</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;