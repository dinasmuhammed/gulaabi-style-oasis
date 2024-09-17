import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const VirtualTryOn = () => {
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const outfits = [
    { id: 1, name: 'Summer Dress', image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
    { id: 2, name: 'Casual Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
    { id: 3, name: 'Formal Suit', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' },
  ];

  const handleOutfitSelect = (outfit) => {
    setSelectedOutfit(outfit);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#FFF0F5] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-['Playfair_Display']">Virtual Try-On</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Select an Outfit</h3>
            <div className="grid grid-cols-3 gap-4">
              {outfits.map((outfit) => (
                <img
                  key={outfit.id}
                  src={outfit.image}
                  alt={outfit.name}
                  className={`w-full h-40 object-cover cursor-pointer rounded-lg ${
                    selectedOutfit === outfit ? 'border-4 border-[#FF1493]' : ''
                  }`}
                  onClick={() => handleOutfitSelect(outfit)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Upload Your Photo</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            {userImage && (
              <div className="relative w-64 h-64 mb-4">
                <img
                  src={userImage}
                  alt="User"
                  className="w-full h-full object-cover rounded-lg"
                />
                {selectedOutfit && (
                  <img
                    src={selectedOutfit.image}
                    alt={selectedOutfit.name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-50"
                  />
                )}
              </div>
            )}
            <Button
              className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-bold py-2 px-4 rounded"
              disabled={!userImage || !selectedOutfit}
            >
              Try On
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;