import React from 'react';
import logo from '../../.images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="한울생명과학 로고" className="logo-image" />
        </div>
        <div className="right-group">
          <nav className="nav">
            <a href="#" className="nav-link">회사소개</a>
            <a href="#" className="nav-link">서비스</a>
            <a href="#" className="nav-link">고객후기</a>
            <a href="#" className="nav-link">최신소식</a>
            <a href="#" className="nav-link">문의하기</a>
          </nav>
          <button className="consultation-button">상담하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
