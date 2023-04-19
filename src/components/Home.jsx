import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/peanut-butter-porter.jpg";

const Home = () => {
  return (
    // <div>Home</div>
    <Link to="/beers">
      <div className="relative w-screen">
        <img src={hero} alt="Peanut Butter Porter" className="w-full cursor-pointer bg-gradient-to-bl" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
        >
          <h2 className="font-bold text-5xl">Peaunut Butter Porter</h2>
          <p>Try our award winning brew, Peanut Butter Porter.</p>
        </div>
      </div>
    </Link>
  );
};

export default Home;
