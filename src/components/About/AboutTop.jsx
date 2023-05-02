import React from "react";
import { useState } from "react";
import img2 from "../../images/production_images/large_keg.JPG"
import img1 from "../../images/community_images/careers_brewery.jpg";
import sustainImg from "../../images/production_images/brewery_equitment.JPG";
import startImg from "../../images/community_images/brewery_chamber.jpg";

const AboutTop = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  //   const showElement = (name) => {
  //     var element = document.getElementById(name);
  //     element.classList.add("opacity-100");
  //   };

  return (
    <div name="about" className="">
      {/* about story*/}
      <div className="flex flex-col items-center pt-40 p-12 bg-gradient-to-t from-white to-secondary ">
        <h1 className="text-7xl font-bold text-white opacity-0 animate-fade-in duration-1 delay-1">
          Lake Time
        </h1>
        <div className="max-w-4xl">
          <h2 className="m-8 text-center text-lg opacity-0 animate-fade-in duration-2 delay-2">
            What is Lake Time you ask? Lake Time is not a time, but a state of
            mind — or an absence of time. Eat when you are hungry. Sleep when
            you are tired. Fish, swim, read a great book, and enjoy the sunshine
            when you please. Naps are encouraged. Friends and family are
            welcome. Nature is embraced. That is Lake Time.
          </h2>
        </div>
      </div>

      {/* about sections*/}
      <div class="max-w-3xl mx-auto px-4 opacity-0 animate-fade-in duration-2 delay-3">
        <div className="flex flex-wrap justify-center mx-6 sm:mx-2 ">
          <div
            className="hover:scale-105 duration-200 relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden opacity-0 animate-fade-in duration-1 delay-3"
            onClick={() => {
              handleCardClick("sustainCard");
            }}
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
            className="hover:scale-105 duration-200 relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden opacity-0 animate-fade-in duration-1 delay-4"
            onClick={() => {
              handleCardClick("startCard");
            }}
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
            className="hover:scale-105 duration-200 relative w-48 h-48  mx-2 my-2 sm:mx-4 sm:my-4 rounded-full hover:cursor-pointer overflow-hidden opacity-0 animate-fade-in duration-1 delay-5"
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

      {selectedCard === "sustainCard" && (
        <div
          name="sustainibility"
          className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md"
        >
          <div className="flex flex-col lg:flex-row items-center opacity-0 animate-fade-in duration-2">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={img2}
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
              <h2 className="text-4xl font-bold">
                {selectedCard === "sustainCard"
                  ? "Our Practices"
                  : selectedCard === "startCard"
                  ? "Our Start"
                  : "Careers"}
              </h2>
              <p className=" text-lg leading-relaxed mb-6"></p>
              <div className="flex flex-col gap-4">
                <span>
                  Lake Time Brewery aspires to be a leader in sustainability in
                  the craft beer industry by being an environmental steward
                  throughout the entire brewing process. By thinking and acting
                  sustainably, we will manage and operate our business to best
                  serve our customers, reduce the environmental footprint of our
                  operations, and drive long-term profitability.
                </span>
                <ul>
                  <li className="text-xl font-bold">
                    Practices Lake Time follows to promote sustainability:
                  </li>
                  <li>
                    - Spent grain is transferred to a local farmer to be used
                    for feeding cattle
                  </li>
                  <li>- Lighting in facility is 100% LED</li>
                  <li>- Glycol cooling and steam heating systems</li>
                  <li>
                    - Recycled water utilized in brewing process Aluminum and
                    carboard recycling programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedCard === "startCard" && (
        <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-m ">
          <div className="flex flex-col lg:flex-row items-center opacity-0 animate-fade-in duration-2">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={startImg}
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
              <h2 className="text-4xl font-bold">
                {selectedCard === "sustainCard"
                  ? "Our Practices"
                  : selectedCard === "startCard"
                  ? "Our Start"
                  : "Careers"}
              </h2>
              <p className=" text-lg leading-relaxed mb-6"></p>
              <div className="flex flex-col gap-4">
                <span className="">
                  Two moves in ten months, a job elimination and raising two
                  pre-teen daughters all led to the birth of Lake Time Brewery.
                  These experiences taught a family to remain positive and
                  cherish the simple things in life – time with family and
                  friends around a campfire, fishing, sunning on the beach,
                  floating around the lake on a pontoon. It was during this
                  time, Bob decided to follow his true passion (and what all his
                  friends and family had been begging him to do) – brew great
                  craft beer.
                </span>
                <span>
                  Our mission is to brew great craft beer that you can enjoy
                  anytime…not just on Lake Time. Let us help you bring that
                  moment home every day. Enjoy Lake Time…now!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedCard === "careersCard" && (
        <div className="flex justify-center p-6 m-12 bg-gray-200 rounded-lg shadow-md ">
          <div className="flex flex-col lg:flex-row items-center opacity-0 animate-fade-in duration-2">
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
              <h2 className="text-4xl font-bold">
                {selectedCard === "sustainCard"
                  ? "Our Practices"
                  : selectedCard === "startCard"
                  ? "Our Start"
                  : "Careers"}
              </h2>
              <p className=" text-lg leading-relaxed mb-6"></p>
              <>
                <span className="font-bold">Join our team! </span>
                <span>
                  We are looking for enthusiastic, hard-working, and dedicated
                  individuals to join our team. If you are interested in working
                  at Lake Time Brewery, please send us your resume. We're
                  currently hiring servers for our taproom, but if you believe
                  you have something else to offer, we'd love to hear from you!
                </span>
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutTop;
