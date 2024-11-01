import React from 'react';
import './News.css';
import news1 from '../.images/news1.jpg';
import news2 from '../.images/news2.jpg';
import news3 from '../.images/news3.jpg';

const newsItems = [
  {
    title: '한울생명과학, 혁신적 암 진단 키트 개발 성공',
    description: '간단한 혈액 검사항으로 조기 암 진단이 가능한 혁신적인 진단 키트 개발에 성공했습니다. 이번 성과로 암 조기 발견 및 생존율 향상에 크게 기여할 것으로 기대됩니다.',
    date: '2023년 7월 15일',
    image: news1,
  },
  {
    title: '한울생명과학, 글로벌 바이오텍 컨퍼런스서 주목받아',
    description: '미국 샌프란시스코에서 열린 "2023 글로벌 바이오텍 컨퍼런스"에서 당사의 AI 기반 신약 개발 플랫폼이 큰 주목을 받았습니다. 여러 글로벌 제약사들과의 협력 논의가 진행 중입니다.',
    date: '2023년 9월 3일',
    image: news2,
  },
  {
    title: '한울생명과학, 차세대 연구센터 오픈',
    description: '최첨단 장비를 갖춘 새로운 연구센터를 오픈했습니다. 이를 통해 연구 역량을 한층 강화하고, 글로벌 바이오 기업으로의 도약을 가속화할 예정입니다.',
    date: '2023년 11월 20일',
    image: news3,
  },
];

export default function News() {
  return (
    <div className="news-section">
      <h2 className="news-title">최신 소식</h2>
      <div className="news-grid">
        {newsItems.map((news, index) => (
          <div className="news-card" key={index}>
            <img src={news.image} alt={news.title} className="news-image" />
            <h3 className="news-card-title">{news.title}</h3>
            <p className="news-description">{news.description}</p>
            <p className="news-date">{news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
