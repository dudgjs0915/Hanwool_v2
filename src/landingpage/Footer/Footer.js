import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-company">㈜ 한울생명과학</h2>
        <nav className="footer-nav">
          <a href="#">서비스 안내</a>
          <a href="#">고객 지원</a>
          <a href="#">연락처 정보</a>
          <a href="#">뉴스레터</a>
          <a href="#">블로그</a>
        </nav>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 Relume. 모든 권리 보유.</p>
        <div className="footer-links">
          <a href="#">개인정보 처리방침</a>
          <a href="#">서비스 이용약관</a>
          <a href="#">쿠키 설정</a>
        </div>
      </div>
    </footer>
  );
}
