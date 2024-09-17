import React from 'react';

const FeaturedCollections = () => {
  const collections = [
    { id: 1, name: 'Summer Breeze', image: '/collection1.jpg' },
    { id: 2, name: 'Autumn Charm', image: '/collection2.jpg' },
    { id: 3, name: 'Winter Elegance', image: '/collection3.jpg' },
    { id: 4, name: 'Spring Bloom', image: '/collection4.jpg' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-['Playfair_Display']">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-[#FFF0F5] rounded-lg overflow-hidden shadow-md">
              <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <button className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;