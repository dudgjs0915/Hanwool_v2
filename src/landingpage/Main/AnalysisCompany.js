import React from 'react';
import Header_and_Hero from '../Header_and_Hero/Header_and_Hero';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';
import News from '../News/News';
import Footer from '../Footer/Footer';
import './AnalysisCompany.css';

const AnalysisCompany = () => {
  return (
    <div className="analysis-company">
      <Header_and_Hero />
      <main>
        <Services />
        <Testimonials />
        <CTA />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisCompany;
