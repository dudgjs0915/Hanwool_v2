import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>고객 후기</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src="/placeholder.svg" alt="고객 이미지" className="testimonial-image" />
          <p>분석전문회사의 수질 분석 서비스는 정확도와 신속성 면에서 최고입니다. 우리 회사의 수질 관리에 큰 도움이 되고 있습니다.</p>
          <p className="customer-name">김동수</p>
          <p className="customer-title">수자원공사 품질관리팀장</p>
        </div>
        <div className="testimonial-card">
          <img src="/placeholder.svg" alt="고객 이미지" className="testimonial-image" />
          <p>농작물 안전성 검사와 성분 분석 서비스는 농부들에게 매우 유용합니다. 신뢰할 수 있는 결과를 빠르게 제공해 주셔서 감사합니다.</p>
          <p className="customer-name">이영희</p>
          <p className="customer-title">친환경농업협회 대표</p>
        </div>
        <div className="testimonial-card">
          <img src="/placeholder.svg" alt="고객 이미지" className="testimonial-image" />
          <p>전문적인 커스텀 서비스가 인상적이었습니다. 단순히 분석 결과만 제공하는 것이 아니라 개선 방안까지 제시해 주셔서 큰 도움이 되었습니다.</p>
          <p className="customer-name">박지성</p>
          <p className="customer-title">환경컨설팅 전문가</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;