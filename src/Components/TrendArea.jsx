import React, { useState, useEffect } from "react";
import { TrendCards } from "../lib/reuse/TrendCards";
import { Button } from "@heroui/react";

function TrendArea() {
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-default font-lexend">
        The Latest trends
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {TrendCards.map((item, index) => (
          <CardWithImageCarousel key={index} item={item} />
        ))}
      </div>
    </div>
    <div className="text-center space-y-3 my-4">
        <h1 className="text-2xl xl:text-3xl font-lexend text-[#1E1E1E]">Discover more cool restaurants</h1>
        <Button className="bg-primary px-7 rounded-fulln text-foreground font-roboto">Show more</Button>
    </div>
    </>
  );
}

function CardWithImageCarousel({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.image.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [item.image.length]);

  return (
    <div className="rounded-xl shadow-lg bg-[#F8F8F8] overflow-hidden max-w-sm mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
      {/* Image Carousel */}
      <div className="relative w-full h-48">
        <img
          src={item.image[currentImageIndex]}
          alt={item.title}
          className="w-full h-full object-cover transition duration-500"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          {item.image.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition ${
                index === currentImageIndex ? "bg-foreground" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4 font-roboto">
        <h3 className="text-xl font-semibold text-default">{item.title}</h3>
        <p className="text-tertiary text-sm mt-1">{item.subtitle}</p>

        <div className="flex gap-2 items-center mt-4">
          <img src={`/${item.rating}`} alt="Rating Stars" className="h-6" />
          <div className="text-sm font-bold text-default">
            {item.ratingtitle}{" "}
            <span className="text-tertiary font-medium">
              ({item.ratingsub})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TrendArea;
