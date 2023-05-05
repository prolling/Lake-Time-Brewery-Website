import React from "react";
import BeerSQL from "./BeerSQL";

const Beers = () => {
  return (
    <div>
      <div className="pt-32">
        <h1 className="text-7xl font-bold animate-fade-in duration-1 delay-1 text-center">
          Our Beers
        </h1>
      </div>
      <BeerSQL />
    </div>
  );
};

export default Beers;
