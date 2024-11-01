import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';
import location_map from "../.images/location_map.png"

export default function Contact() {
  return (
    <footer className="Contact">
      <div className="container">
        <div className="contact-info">
          <h3>찾아오시는 길</h3>
          <ul>
            <li>
              <MapPin size={18} />
              <div>
                <p>서울특별시 강남구 테헤란로 123 분석빌딩 5층</p>
                <p>지하철 2호선 강남역 3번 출구에서 도보 5분</p>
              </div>
            </li>
            <li>
              <Phone size={18} />
              <p>02-1234-5678</p>
            </li>
            <li>
              <Mail size={18} />
              <p>info@analysiscompany.com</p>
            </li>
          </ul>
        </div>
        <div className="map">
          <img src={location_map} alt="회사 위치 지도" />
        </div>
      </div>
    </footer>
  );
}