import React, { useState } from "react";
import { Button } from "@heroui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function FilterButton() {
  const [showFilter, setShowFilter] = useState(false);

  const Icons = [
    { rating: 5, icon: "/5Star.svg" },
    { rating: 4, icon: "/4Star.svg" },
    { rating: 3, icon: "/3Star.svg" },
    { rating: 2, icon: "/2Star.svg" },
    { rating: 1, icon: "/1Star.svg" },
  ];

  return (
    <div className="relative inline-block font-roboto">
      {/* Filter Toggle Button */}
      <Button
        variant="solid"
        className="text-foreground bg-[#5E5E5E] flex items-center space-x-2 rounded-full"
        onClick={() => setShowFilter(!showFilter)}
      >
        <img src="/Filter.svg" alt="loading" className="w-5 h-5" />
        <p className="text-base">Filter</p>
      </Button>

      {/* Filter Popup */}
      {showFilter && (
        <div className="absolute z-50 mt-2 left-1/2 -translate-x-1/2 bg-foreground border border-[#E6E6E6] rounded-xl shadow-lg w-48 p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-base font-bold text-default">filter by rating</p>
            <button onClick={() => setShowFilter(false)}>
              <XMarkIcon className="w-6 h-6 text-[#717171] bg-[#D9D9D9] rounded-full hover:text-[#717171]/75 transition-colors" />
            </button>
          </div>

          {/* Ratings List with Custom Icons */}
          <div className="space-y-2">
            {Icons.map((item) => (
              <div key={item.rating} className="flex items-center space-x-2">
                <span className="text-base text-[#E8A641] font-medium">{item.rating}</span>
                <img src={item.icon} alt="" className="h-5" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterButton;
