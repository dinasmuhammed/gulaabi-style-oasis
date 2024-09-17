import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCollections from '../components/FeaturedCollections';
import SpecialOffers from '../components/SpecialOffers';
import VirtualTryOn from '../components/VirtualTryOn';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <div className="font-['Roboto', sans-serif] text-[#333333]">
      <Hero />
      <About />
      <FeaturedCollections />
      <VirtualTryOn />
      <SpecialOffers />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
