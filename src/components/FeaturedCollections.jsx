import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const FeaturedCollections = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const collections = [
    { id: 1, name: 'Summer Breeze', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
    { id: 2, name: 'Autumn Charm', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
    { id: 3, name: 'Winter Elegance', image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
    { id: 4, name: 'Spring Bloom', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-['Playfair_Display']">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-[#FFF0F5] rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <div className="flex justify-center space-x-2 mb-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-8 h-8 rounded-full ${
                        selectedSize === size ? 'bg-[#FF1493] text-white' : 'bg-gray-200 text-gray-700'
                      } font-bold text-sm focus:outline-none`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Button className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded w-full">
                  View Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;
