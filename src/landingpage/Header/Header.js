import React from 'react';
import logo from '../.images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="한울생명과학 로고" className="logo-image" /> <h2 className = "logo_title"> 한울생명과학 </h2>
        </div>
        <div className="right-group">
          <nav className="nav">
            <a href="#" className="nav-link">회사소개</a>
            <a href="#" className="nav-link">서비스</a>
            <a href="#" className="nav-link">사업 분야</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
