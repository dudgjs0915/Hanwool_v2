import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import './Header_and_Hero.css';

const Header_and_Hero = () => {
  return (
    <div className="header-and-hero">
      <Header />
      <Hero />
    </div>
  );
};

export default Header_and_Hero;
