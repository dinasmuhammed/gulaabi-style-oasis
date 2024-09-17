import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="/hero-image.jpg"
        alt="Gulaabi Fashion Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          A Complete Fashion Store For Perfect Styling !! ❤️
        </h1>
        <Button className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;