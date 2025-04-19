import React from "react";

function OverAll() {
  return (
    <div className="max-w-5xl lg:mx-auto mx-3 md:mx-5 font-roboto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
        <div className="">
          <div className="flex space-x-2">
            <img src="/StarLogo.svg" alt="" className="" />
            <div className="space-y-3">
              <h1 className="text-lg font-bold text-default">Overall rating</h1>
              <p className="text-base text-[#838383]">834 Reviews</p>
              <img src="/5Star.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src="/RatingRange.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OverAll;
