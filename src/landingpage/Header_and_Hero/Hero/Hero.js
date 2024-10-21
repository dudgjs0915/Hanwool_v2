import React from 'react';
import './Hero.css';
import brandLogos from '../../.images/brand-logos.png';  // 추가할 이미지

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">한울생명과학</h1>
        <p className="hero-description">
          한울생명과학은 수질 및 농업용 분석 분야에서 최고의 전문성과 정확성을 자랑합니다.
          최신 기술과 전문 인력을 바탕으로 신뢰할 수 있는 분석 결과를 제공합니다.
        </p>
        <div className="hero-buttons">
          <button className="consultation-button">상담하기</button>
          <button className="details-button">자세히보기 →</button>
        </div>
      </div>
      <section className="brand-logos">
        <img src={brandLogos} alt="브랜드 로고들" className="brand-logos-image"/>
      </section>
    </div>
  );
}