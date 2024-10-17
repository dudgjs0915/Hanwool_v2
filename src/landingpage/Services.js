import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="service-card">
        <h3>수질분석 서비스</h3>
        <p>최첨단 장비를 활용한 정확하고 신속한 수질 분석으로 안전한 물 환경을 보장합니다.</p>
        <a href="#" className="learn-more">자세히 보기 →</a>
      </div>
      <div className="service-card">
        <h3>농업분석 서비스</h3>
        <p>농작물의 안전성과 품질을 철저히 분석하여 소비자의 건강과 신뢰를 지킵니다.</p>
        <a href="#" className="learn-more">자세히 보기 →</a>
      </div>
      <div className="service-card">
        <h3>맞춤형 컨설팅</h3>
        <p>분석 결과를 바탕으로 전문적인 해석과 개선 방안을 제시하는 맞춤형 컨설팅을 제공합니다.</p>
        <a href="#" className="learn-more">자세히 보기 →</a>
      </div>
    </section>
  );
};

export default Services;