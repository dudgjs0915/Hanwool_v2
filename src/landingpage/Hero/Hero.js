import React from 'react';
import './Hero.css';
import main_page from '../.images/Main_page.jpg';
import brandLogos from '../.images/brand-logos.png';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">정확한 분석으로 안전한 환경을 만듭니다</h1>
        <p className="hero-description">
          한울 생명과학은 물질의 품질을 분석하여 안전하고 건강한 환경을 제공합니다. 우리의 전문성과 과학적 접근으로 고객의 요구를 충족시키고 있습니다.
        </p>
        <div className="hero-buttons">
          <button className="consultation-button">분석의뢰 신청</button>
          <button className="details-button">Button</button>
        </div>
      </div>
    </div>
  );
}
