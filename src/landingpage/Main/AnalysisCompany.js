import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import News from '../News/News';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact'
import './AnalysisCompany.css';

const AnalysisCompany = () => {
  return (
    <div className="analysis-company">
      <Header />
      <Hero />
      <main>
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisCompany;
