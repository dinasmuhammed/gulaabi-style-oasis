import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCollections from '../components/FeaturedCollections';
import SpecialOffers from '../components/SpecialOffers';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-['Roboto', sans-serif] text-[#333333]">
      <Hero />
      <About />
      <FeaturedCollections />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Index;
