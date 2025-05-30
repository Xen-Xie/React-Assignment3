import React from "react";
import SortButton from "../ReuseComponents/SortButton";
import RestaurentCard from "../ReuseComponents/RestaurentCard";
import { Button } from "@heroui/react";
import Navigates from "../Navigate";

function AllRestaurents() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4">
      <Navigates />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {/* Left Side */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-extrabold font-lexend">
              best restaurants in singapore
            </h1>
            <SortButton>
            <div>
          <img
            src="/SortIco.svg"
            alt="Sort Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
        <div className="text-sm sm:text-base text-foreground font-roboto">
          Sort
        </div>
              </SortButton>
          </div>
          <RestaurentCard />
          <div className="flex items-center justify-center sm:justify-start">
            <Button className="bg-primary text-foreground text-base font-roboto rounded-full px-5 py-3 hover:bg-primary/85 transition-all">
              Show more
            </Button>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full">
          <img src="/Fakemap.svg" alt="Map" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default AllRestaurents;
