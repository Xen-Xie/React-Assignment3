import React from "react";
import SortButton from "../ReuseComponents/SortButton";
import FilterButton from "../ReuseComponents/FilterButton";
import { Review } from "../lib/reuse/ReviewCardItems";
import { Button } from "@heroui/react";

function ReviewArea() {
  return (
    <div className="max-w-5xl mx-3 xl:mx-auto md:mx-20 mt-8 font-roboto">
      {/* Header with Filter and Sort */}
      <div className="flex items-center gap-8 mb-6">
        <FilterButton />
        <SortButton className="border-1 rounded-full border-[#5E5E5E] bg-foreground">
          <div>
            <img
              src="/GreySort.svg"
              alt="Sort Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </div>
          <div className="text-sm sm:text-base text-[#5E5E5E] font-roboto">
            Sort
          </div>
        </SortButton>
      </div>

      {/* Review Items */}
      {Review.map((item, i) => (
        <div key={i} className="bg-[#F8F8F8] rounded-xl p-6 mb-6 space-y-4 hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="flex items-start gap-4">
            <img
              src={item.image}
              alt="User Avatar"
              className="w-10 h-10 rounded-full bg-foreground"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">{item.name}</h1>
              <p className="text-sm text-[#8A8A8A]">{item.location}</p>
              <div className="flex items-center gap-2 mt-1">
                <img src={item.rating} alt="Rating" className="h-5" />
                <p className="text-sm text-[#343434]">{item.date}</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#5E5E5E] leading-relaxed">
            {item.review}
          </p>
        </div>
      ))}
      <div className="text-center mt-12">
        <Button className="bg-primary text-foreground px-8">Show More Reviews</Button>
      </div>
    </div>
  );
}

export default ReviewArea;
