import React from "react";
import BeersMain from "./BeersMain";
import BeerSQL from "./BeerSQL";
import BeersTesting from "./BeersTesting";

const Beers = () => {
  return (
    <div>
      <div className="pt-24">{/* <BeersTesting /> */}</div>
      {/* <BeersMain /> */}
      <BeerSQL />
    </div>
  );
};

export default Beers;
