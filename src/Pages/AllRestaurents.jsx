import React from "react";
import SortButton from "../ReuseComponents/SortButton";

function AllRestaurents() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex justify-around items-center">
            <h1 className="text-xl font-extrabold font-lexend">
              best restaurants in singapore
            </h1>
            <div>
              <SortButton />
            </div>
          </div>
        </div>
        <div>
            <img src="/Fakemap.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AllRestaurents;
