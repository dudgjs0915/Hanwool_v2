import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>찾아오시는 길</h3>
        <p>서울특별시 강남구 테헤란로 123 분석빌딩 5층</p>
        <p>지하철 2호선 강남역 3번 출구에서 도보 5분</p>
        <p>02-1234-5678</p>
        <p>info@analysiscompany.com</p>
      </div>
      <div className="map">
        <img src="/placeholder.svg" alt="지도" width="300" height="200" />
      </div>
    </footer>
  );
};

export default Footer;