import React from 'react';

const SpecialOffers = () => {
  return (
    <div className="bg-[#FFB6C1] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-['Playfair_Display']">Special Offers</h2>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
          <img 
            src="https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" 
            alt="Summer Sale" 
            className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Summer Sale!</h3>
            <p className="text-lg mb-4">Get up to 50% off on selected items. Don't miss out on these amazing deals!</p>
            <button className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
