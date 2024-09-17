import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [bgColor, setBgColor] = useState('#FFB6C1');

  useEffect(() => {
    const colors = ['#FFB6C1', '#FFC0CB', '#FFD1DC', '#FFA07A', '#FF69B4'];
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen transition-colors duration-1000" style={{ backgroundColor: bgColor }}>
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Gulaabi Fashion Collection"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-['Playfair_Display'] text-shadow-lg">
          Gulaabi
        </h1>
        <p className="text-2xl md:text-3xl mb-6 text-center text-shadow-md">
          A Complete Fashion Store For Perfect Styling !! ❤️
        </p>
        <Button className="bg-white text-[#FF1493] hover:bg-[#FF69B4] hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
