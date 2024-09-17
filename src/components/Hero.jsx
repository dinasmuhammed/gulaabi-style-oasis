import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Gulaabi Fashion Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-['Playfair_Display']">
          Gulaabi
        </h1>
        <p className="text-2xl md:text-3xl mb-6 text-center">
          A Complete Fashion Store For Perfect Styling !! ❤️
        </p>
        <Button className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
