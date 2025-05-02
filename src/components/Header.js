// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../logo.svg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-title">LOGO</div>
        <div className="header-icons">
          <i className="fas fa-search" />
          <i className="far fa-heart" />
          <i className="fas fa-shopping-bag" />
          <i className="fas fa-user" />
          <span className="lang-select">ENG ▼</span>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
