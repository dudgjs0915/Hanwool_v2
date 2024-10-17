import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';
import News from '../News/News';
import Footer from '../Footer/Footer';
import './AnalysisCompany.css';

const AnalysisCompany = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
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