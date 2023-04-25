import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="bg-blue-600 pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full text-white">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight text-white">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8 text-white">
              Sub-hero message, not too long and not too short. Make it just right!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" alt="hero" />
          </div>
        </div>
      </div>
      <div>
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 C0,200 270,0 720,200 C1170,400 1440,200 1440,200 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>
      {/* The rest of your code */}
    </>
  );
};

export default Hero;






