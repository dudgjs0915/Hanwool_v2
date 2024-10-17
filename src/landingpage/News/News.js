import React from 'react';
import './News.css';

const News = () => {
  return (
    <section className="news">
      <h2>최신 소식</h2>
      <div className="news-grid">
        <div className="news-card">
          <h3>신규 분석 장비 도입</h3>
          <p>2024년 3월 15일</p>
          <p>최신 LC-MS/MS 장비 도입으로 더욱 정밀한 농약 분석이 가능해졌습니다.</p>
        </div>
        <div className="news-card">
          <h3>수질 분석 세미나 개최</h3>
          <p>2024년 3월 20일</p>
          <p>4월 10일, 수질 분석 전문가들과 함께 세미나를 개최합니다. 최신 분석 기술과 동향을 공유합니다.</p>
        </div>
        <div className="news-card">
          <h3>ISO 17025 인증 갱신</h3>
          <p>2024년 3월 5일</p>
          <p>국제 공인 시험기관 인증인 ISO 17025를 성공적으로 갱신하여 분석 신뢰도를 재확인하였습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default News;