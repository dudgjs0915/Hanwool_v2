import React from 'react';

const CTA = () => {
  return (
    <section className="cta">
      <h2>서비스 신청하기</h2>
      <p>원하시는 분석 서비스를 선택하여 신청해주세요. 전문 상담원이 신속하게 연락드리겠습니다.</p>
      <div className="cta-buttons">
        <a href="#" className="primary-button">수질 시험 의뢰 →</a>
        <a href="#" className="secondary-button">농업분석 의뢰 →</a>
      </div>
    </section>
  );
};

export default CTA;