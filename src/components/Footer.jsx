import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Gulaabi</h3>
            <p>A Complete Fashion Store For Perfect Styling</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">For Enquiries:</p>
            <a href="https://wa.me/+918921931202" className="hover:text-[#FFB6C1] mb-2">
              WhatsApp: +918921931202
            </a>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFB6C1]"><Facebook /></a>
              <a href="#" className="hover:text-[#FFB6C1]"><Instagram /></a>
              <a href="#" className="hover:text-[#FFB6C1]"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Gulaabi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
