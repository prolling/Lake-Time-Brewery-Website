import React from "react";
import BeersMain from "./BeersMain";
import BeerSQL from "./BeerSQL";
import BeersTesting from "./BeersTesting";

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
