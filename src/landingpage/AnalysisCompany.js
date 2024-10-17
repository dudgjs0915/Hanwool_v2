import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import CTA from './CTA';
import News from './News';
import Footer from './Footer';
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