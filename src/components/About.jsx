import React, { useState } from "react";
import img1 from "../images/community_images/careers_brewery.jpg";

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <div name="about" className="pt-24">
      {/* about story*/}
      <div className="flex flex-col items-center  p-12">
        <h1 className="text-7xl font-medium text-center">Lake Time</h1>
        <div className="max-w-4xl">
          <h2 className="m-8 text-center text-lg">
            What is Lake Time you ask? Lake Time is not a time, but a state of
            mind — or an absence of time. Eat when you are hungry. Sleep when
            you are tired. Fish, swim, read a great book, and enjoy the sunshine
            when you please. Naps are encouraged. Friends and family are
            welcome. Nature is embraced. That is Lake Time.
          </h2>
        </div>
      </div>

      {/* about sections*/}
      <div class="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 gap-6  mx-20 sm:mx-6 ">
          <div
            name="card1"
            className="shadow-md shadow-gray-500  hover:scale-105 duration-200 cursor-pointer"
            onClick={() => handleCardClick("sustainCard")}
          >
            <h3 className="text-center">Sustainability</h3>
            <img
              src={img1}
              alt="bw sustain"
              className="filter grayscale hidden sm:block"
            />
          </div>
          <div
            name="card2"
            className="shadow-md shadow-gray-500  hover:scale-105 duration-200 cursor-pointer"
            onClick={() => handleCardClick("startCard")}
          >
            <h3 className="text-center">Our Start</h3>
            <img
              src={img1}
              alt="bw start"
              className="filter grayscale hidden sm:block"
            />
          </div>
          <div
            name="card3"
            className="shadow-md shadow-gray-500  hover:scale-105 duration-200 cursor-pointer"
            onClick={() => handleCardClick("careersCard")}
          >
            <h3 className="text-center">Careers</h3>
            <img
              src={img1}
              alt="bw career"
              className="filter grayscale hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* these get rendered in */}
      {selectedCard === "sustainCard" && (
        <div className=" flex justify-center p-6 m-12">
          <div className="flex justify-center items-center  ">
            <img src={img1} alt="sustain text" className="max-w-sm" />
            <p>Text to display when Sustainability card is clicked</p>
          </div>
        </div>
      )}
      {selectedCard === "startCard" && (
        <div className=" flex justify-center p-6 m-12">
          <div className="flex justify-center items-center ">
            <img src={img1} alt="our start text" className="max-w-sm" />
            <p>Text to display when Our Start card is clicked</p>
          </div>
        </div>
      )}
      {selectedCard === "careersCard" && (
        <div className=" flex justify-center m-12">
          <div className="flex justify-center items-center ">
            <img src={img1} alt="career text" className="max-w-sm" />
            <p>Text to display when Careers card is clicked</p>
          </div>
        </div>
      )}

      {/* learn more */}
      <div className="flex flex-col items-center p-8">
        <h2 className="text-4xl font-medium mt-12">Learn More</h2>
        <div name="2 cards" className="flex items-center gap-12 sm:gap-24 m-8">
          <div
            name="card1"
            className="flex flex-col shadow-md shadow-gray-500  hover:scale-105 duration-200 cursor-pointer items-center"
          >
            <img src={img1} alt="" className="w-48" />
            <h3>Our Story</h3>
          </div>
          <div
            name="card2"
            className="flex flex-col shadow-md shadow-gray-500  hover:scale-105 duration-200 cursor-pointer items-center"
          >
            <img src={img1} alt="" className="w-48" />
            <h3>Our Story</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
