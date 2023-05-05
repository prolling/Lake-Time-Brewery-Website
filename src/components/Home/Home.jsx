import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./Hero.jsx";
import Beers from "./Beers";
import Giving from "./Giving.jsx";
import Careers from "./Careers.jsx";

const Home = () => {
  return (
    // home content here
    <div>
      <Hero />
      <Beers />
      <Giving />
      <Careers />
    </div>
  );
};

export default Home;
