import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Strona główna</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>O mnie</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projekty</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
