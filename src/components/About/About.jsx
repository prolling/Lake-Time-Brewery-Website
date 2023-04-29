import React, { useState } from "react";
import img1 from "../../images/community_images/careers_brewery.jpg";
import sustainImg from "../../images/production_images/brewery_equitment.JPG";
import startImg from "../../images/community_images/brewery_chamber.jpg";

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
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 gap-6 mx-20 sm:mx-6">
          <div
            name="card1"
            className="shadow-md shadow-gray-500 hover:scale-105 duration-200 cursor-pointer relative rounded-full"
            onClick={() => handleCardClick("sustainCard")}
            style={{ height: "200px", width: "200px" }}
          >
            <div
              className="h-full w-full overflow-hidden rounded-full"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <img
                src={sustainImg}
                alt="bw sustain"
                className="filter grayscale hidden sm:block h-full w-full object-cover"
              />
            </div>
            <h3 className="text-center absolute inset-0 flex items-center justify-center font-bold text-2xl text-white">
              Sustainability
            </h3>
          </div>
          <div
            name="card2"
            className="shadow-md shadow-gray-500 hover:scale-105 duration-200 cursor-pointer relative rounded-full"
            onClick={() => handleCardClick("startCard")}
            style={{ height: "200px", width: "200px" }}
          >
            <div
              className="h-full w-full overflow-hidden rounded-full"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <img
                src={img1}
                alt="bw start"
                className="filter grayscale hidden sm:block h-full w-full object-cover"
              />
            </div>
            <h3 className="text-center absolute inset-0 flex items-center justify-center font-bold text-2xl text-white">
              Our Start
            </h3>
          </div>
          <div
            name="card3"
            className="shadow-md shadow-gray-500 hover:scale-105 duration-200 cursor-pointer relative rounded-full"
            onClick={() => handleCardClick("careersCard")}
            style={{ height: "200px", width: "200px" }}
          >
            <div
              className="h-full w-full overflow-hidden rounded-full"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <img
                src={img1}
                alt="bw career"
                className="filter grayscale hidden sm:block h-full w-full object-cover"
              />
            </div>
            <h3 className="text-center absolute inset-0 flex items-center justify-center font-bold text-2xl text-white">
              Careers
            </h3>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center mx-6 sm:mx-2  border-2 border-black">
          <div
            className="relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden"
            onClick={() => handleCardClick("sustainCard")}
          >
            <img
              src={sustainImg}
              alt="sustainability"
              className="w-full h-full object-cover object-center absolute top-0 left-0 brightness-50"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-25 hover:bg-opacity-50 transition-all duration-200">
              <h3 className="text-white font-bold text-xl">Sustainability</h3>
            </div>
          </div>
          <div
            className="relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden"
            onClick={() => handleCardClick("startCard")}
          >
            <img
              src={startImg}
              alt="our start"
              className="w-full h-full object-cover object-center absolute top-0 left-0 brightness-50"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-25 hover:bg-opacity-50 transition-all duration-200">
              <h3 className="text-white font-bold text-xl">Our Start</h3>
            </div>
          </div>
          <div
            className="relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden"
            onClick={() => handleCardClick("careersCard")}
          >
            <img
              src={img1}
              alt="careers"
              className="w-full h-full object-cover object-center absolute top-0 left-0 brightness-50"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-25 hover:bg-opacity-50 transition-all duration-200">
              <h3 className="text-white font-bold text-xl">Careers</h3>
            </div>
          </div>
        </div>
      </div>

      {/* these get rendered in
      {selectedCard === "sustainCard" && (
        <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={img1}
              alt="sustain text"
              className="w-1/2 lg:w-1/3 mr-4 object-contain"
            />
            <p className="flex-1">
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              minima vel id dolorum, quae explicabo possimus, facilis neque quo
              nobis doloribus voluptate sequi tenetur dolores odit adipisci
              itaque velit unde!{" "}
            </p>
          </div>
        </div>
      )}
      {selectedCard === "startCard" && (
        <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={img1}
              alt="our start text"
              className="w-1/2 lg:w-1/3 mr-4 object-contain"
            />
            <p className="flex-1">
              2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              expedita numquam dignissimos nihil ea sunt voluptatibus natus
              similique dolores, consequatur saepe vero alias labore a voluptas
              at ad quis vitae.
            </p>
          </div>
        </div>
      )}
      {selectedCard === "careersCard" && (
        <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src={img1}
              alt="career text"
              className="w-1/2 lg:w-1/3 mr-4 object-contain"
            />
            <p className="flex-1">
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              magnam minus ad nulla impedit ea reiciendis, autem voluptatem
              natus accusantium harum laborum, eius excepturi blanditiis placeat
              odit alias vel necessitatibus.
            </p>
          </div>
        </div>
      )} */}

      <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={img1}
              alt={
                selectedCard === "sustainCard"
                  ? "sustain text"
                  : selectedCard === "startCard"
                  ? "our start text"
                  : "career text"
              }
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">
              {selectedCard === "sustainCard"
                ? "Sustainability"
                : selectedCard === "startCard"
                ? "Our Start"
                : "Careers"}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {selectedCard === "sustainCard" && (
                <>
                  <span className="font-bold">
                    3 Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <span>
                    Hic, minima vel id dolorum, quae explicabo possimus, facilis
                    neque quo nobis doloribus voluptate sequi tenetur dolores
                    odit adipisci itaque velit unde!
                  </span>
                </>
              )}
              {selectedCard === "startCard" && (
                <>
                  <span className="font-bold">
                    2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <span>
                    Odit expedita numquam dignissimos nihil ea sunt voluptatibus
                    natus similique dolores, consequatur saepe vero alias labore
                    a voluptas at ad quis vitae.
                  </span>
                </>
              )}
              {selectedCard === "careersCard" && (
                <>
                  <span className="font-bold">
                    3 Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <span>
                    Aperiam magnam minus ad nulla impedit ea reiciendis, autem
                    voluptatem natus accusantium harum laborum, eius excepturi
                    blanditiis placeat odit alias vel necessitatibus.
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

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
