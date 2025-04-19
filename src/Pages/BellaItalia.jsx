import React from "react";
import BellaItalHero from "../Components/BellaItalHero";
import BellaDiscover from "../Components/BellaDiscover";
import Information from "../Components/Information";
import OverAll from "../Components/OverAll";
import ReviewArea from "../Components/ReviewArea";
import Discover from "../Components/Discover";
import Navigates from "../Navigate";

function BellaItalia() {
  return (
    <div>
      <Navigates />
      <BellaItalHero />
      <BellaDiscover />
      <Information />
      <div className='border-b-1 mt-3'></div>
      <OverAll />
      <div className='border-b-1 mt-3'>

      </div>
      <ReviewArea />
      <Discover />
    </div>
  );
}

export default BellaItalia;
