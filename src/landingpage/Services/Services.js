import React from 'react';
import './Services.css';

const services = [
  { title: '수질 분석', description: '최첨단 NGS 기술을 활용한 맞춤형 수질 분석으로 안정성 확인을 더욱더 확실하게 합니다.' },
  { title: '환경약 분석', description: '중금속 및 각종 유해성 지표 모니터링을 통해 환경 보호에 기여하며 안전성을 확보합니다.' },
  { title: '향정 분석', description: '가정 및 공공 시설 등 각종 시설 물질의 향정 검사에 대한 전문 서비스를 제공합니다.' },
  { title: '폐유 분석', description: '폐유의 재활용 및 활용을 위한 맞춤형 분석으로 효율성을 극대화합니다.' },
  { title: '전력량 관련 장기 성분 분석', description: '전력 생산에 필요한 각종 유해성 물질의 위험성을 진단하고 안전성을 제공합니다.' },
  { title: '환경 샘플 컨설팅', description: '환경 샘플에 대한 맞춤형 분석 및 전문 컨설팅을 지원합니다.' },
];

export default function Service() {
  return (
    <div className="service-section">
      <h1 className="service-title">한울생명과학의 주요 서비스</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-name">🌱  {service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#" className="service-link">자세히 보기 →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
