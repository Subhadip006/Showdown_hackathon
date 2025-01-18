import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: "Local Artisans",
      image: ""
    },
    {
      id: 2,
      title: "Fresh Produce",
      image: "/images/fresh-produce.jpg"
    },
    {
      id: 3,
      title: "Handmade Crafts",
      image: "/images/handmade-crafts.jpg"
    },
    {
      id: 4,
      title: "Local Services",
      image: "/images/local-services.jpg"
    },
    {
      id: 5,
      title: "Unique Goods",
      image: "/images/unique-goods.jpg"
    },
    {
      id: 6,
      title: "Community Trading",
      image: "/images/community-trading.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-lg">
        {/* Main Image */}
        <div className="relative h-full w-full">
          <Image
            src={galleryImages[currentIndex].image}
            alt={galleryImages[currentIndex].title}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
          {/* Title Overlay */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-semibold">{galleryImages[currentIndex].title}</h3>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-20 w-full flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;