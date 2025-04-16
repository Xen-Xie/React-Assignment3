import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { CardItems } from '../lib/reuse/CardItems';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Button to change the whole card
    prevArrow: <SamplePrevArrow />, // Button to change the whole card
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-primary px-8 py-10 mx-2 sm:mx-4 lg:xm-6 xl:mx-10 rounded-lg">
      <h2 className="text-foreground text-3xl font-semibold mb-6">
        Find the best restaurant ratings below
      </h2>
      <Slider {...settings}>
        {CardItems.map((item, i) => (
          <div key={i} className="px-3">
            <CardWithImageCarousel item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function CardWithImageCarousel({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This function changes images every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="bg-foreground rounded-lg shadow-md overflow-hidden">
      {/* Image carousel */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={item.images[currentImageIndex]}
          alt={item.title}
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Dots for the image carousel inside the card */}
        <div className="absolute bottom-2 w-full flex justify-center gap-1">
          {item.images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition ${
                index === currentImageIndex ? 'bg-foreground' : 'bg-[#D9D9D9]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-default">{item.title}</h3>
        <p className="text-tertiary text-sm mt-1">{item.subtitle}</p>
        <div className="grid grid-cols-2 items-center mt-4 gap-3 sm:gap-2 lg:gap-0">
          <img src={item.rating} alt="Rating" className="h-6" />
          <div className="flex items-center space-x-1 text-sm">
            <h4 className="font-bold text-default">{item.ratingtitle}</h4>
            <span className="text-tertiary">({item.ratingsub})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-[#FFFFFF]/60 rounded-full p-2 sm:p-3 lg:p-4 xl:p-5 shadow cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight className="text-default" />
    </div> // Button to change the whole card
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-[#FFFFFF]/60 rounded-full p-2 sm:p-3 lg:p-4 xl:p-5 shadow cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="text-default" />
    </div> // Button to change the whole card
  );
}

export default HeroCard;
