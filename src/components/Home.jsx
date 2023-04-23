import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/peanut-butter-porter.jpg";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen pt-40 flex items-center"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Award Winning Brews
        </h1>
        <p className="text-2xl text-white mb-8">
          Find our award winning Peanut Butter Porter at a store near you.
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition duration-300">
          Find Our Brews
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>
    </section>
  );
};

export default Home;

