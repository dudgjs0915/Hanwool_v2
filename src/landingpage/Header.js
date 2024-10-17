import React from 'react';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="분석전문회사 로고" width="50" height="50" />
        <span>한울생명과학</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link">회사소개</a>
        <a href="#" className="nav-link">서비스</a>
        <a href="#" className="nav-link">고객후기</a>
        <a href="#" className="nav-link">최신소식</a>
        <a href="#" className="nav-link">문의하기</a>
        <button className="cta-button">서비스 신청</button>
      </nav>
    </header>
  );
};

export default Header;