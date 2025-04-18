// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaGlobe } from 'react-icons/fa';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">LOGO</div>
        
        <nav className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="header-icons">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
          <FaGlobe className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
