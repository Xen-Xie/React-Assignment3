import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

function BellaDiscover() {
  const [showViewer, setShowViewer] = useState(false);

  const openViewer = () => {
    setShowViewer(true);
  };

  const closeViewer = () => {
    setShowViewer(false);
  };

  useEffect(() => {
    if (showViewer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showViewer]);

  return (
    <div className="mt-20 px-4 max-w-[1280px] mx-auto">
      <div className="mb-6 max-w-2xl">
        <h1 className="font-lexend text-[#1E1E1E] text-2xl mb-2">
          Discover our magnificent place in photos
        </h1>
        <p className="text-sm font-roboto text-[#5E5E5E]">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout. The lorem ipsum is, in printing.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-4 h-[500px]">
        {/* Left Side Image */}
        <div className="relative overflow-hidden">
          <img
            src="/ViewAll.svg"
            alt="View All"
            className="w-full h-full object-cover rounded-none sm:rounded-l-lg"
          />
          <div className="absolute bottom-4 left-4">
            <Button
              onClick={openViewer}
              className="bg-foreground text-[#232323] px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-semibold"
            >
              <img src="/GridIcon.svg" alt="Grid Icon" className="h-4 w-4" />
              <span>View all photos (7)</span>
            </Button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 overflow-hidden">
          <img
            src="/V1.svg"
            alt="Photo 1"
            className="w-full h-full object-cover rounded-tl-lg sm:rounded-none"
          />
          <img
            src="/V2.svg"
            alt="Photo 2"
            className="w-full h-full object-cover rounded-tr-lg"
          />
          <img
            src="/V3.svg"
            alt="Photo 3"
            className="w-full h-full object-cover rounded-bl-lg sm:rounded-none"
          />
          <img
            src="/V4.svg"
            alt="Photo 4"
            className="w-full h-full object-cover rounded-br-lg"
          />
        </div>
      </div>

      {/* Modal Viewer */}
      {showViewer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-foreground rounded-md shadow-xl p-4 w-full max-w-4xl animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeViewer}
              className="absolute top-[-10px] xl:top-[-25px] right-0 xl:right-[-20px] z-20 bg-foreground text-[#232323] p-2 rounded-full shadow hover:bg-foreground/85 transition"
            >
              <X size={20} />
            </button>

            {/* Main Image with arrows and dots inside */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/InImg.svg"
                alt="Main Photo"
                className="w-full h-[500px] object-cover"
              />

              {/* Arrows and Dots Area */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10  px-4 py-2">
                {/* Left Arrow */}
                <button className="p-1 rounded-full bg-foreground hover:bg-foreground/50 transition">
                  <ArrowLeft size={20} className="text-[#232323]" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  <span className="h-2 w-2 bg-foreground rounded-full"></span>
                  <span className="h-2 w-2 bg-foreground/30 rounded-full"></span>
                  <span className="h-2 w-2 bg-foreground/30 rounded-full"></span>
                  <span className="h-2 w-2 bg-foreground/30 rounded-full"></span>
                  <span className="h-2 w-2 bg-foreground/30 rounded-full"></span>
                </div>

                {/* Right Arrow */}
                <button className="p-1 rounded-full bg-foreground hover:bg-foreground/50 transition">
                  <ArrowRight size={20} className="text-[#232323]" />
                </button>
              </div>
            </div>

            {/* Static Image */}
            <div className="mt-2">
              <img src="/Long.svg" alt="Gallery Thumbnails" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BellaDiscover;
