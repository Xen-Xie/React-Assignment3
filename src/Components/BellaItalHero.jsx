import React from "react";

function BellaItalHero() {
  return (
    <div className="relative bg-bella-italia w-full h-[600px] bg-cover bg-center text-white font-roboto px-10 pt-16">
      {/* Top section*/}
      <div className="space-y-4 max-w-2xl mx-2 sm:mx-8">
        <h1 className="font-lexend font-bold text-6xl">Bella italia</h1>
        <div className="flex items-center space-x-4">
          <img src="/5Star.svg" alt="5 stars" className="h-6" />
          <div className="flex items-center space-x-2 text-lg">
            <h1 className="font-semibold">5.0</h1>
            <p className="text-sm">(834 reviews)</p>
          </div>
        </div>
        <p className="text-base leading-relaxed lg:text-xl">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout. <br />
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout.
        </p>
        <div className="mt-6 space-y-4 text-sm lg:text-base">
          <div className="flex items-center space-x-3">
            <img src="/Location.svg" alt="Location" className="h-5 w-5" />
            <p>Singapour, Bishan-Ang Mo Kio Park</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/Time.svg" alt="Time" className="h-5 w-5" />
            <p>7j/7, 08:00 - 22:00</p>
          </div>
        </div>
      </div>
      {/*Logo*/}
      <div className="absolute bottom-[-50px] sm:bottom-[-40px] left-1/2 transform -translate-x-1/2">
        <div className="h-[80px] w-[80px] bg-white rounded-full shadow-lg flex items-center justify-center">
          <img src="/BellaLogo.svg" alt="Bella Italia Logo" />
        </div>
      </div>
    </div>
  );
}

export default BellaItalHero;
