import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import hero1 from "../images/peanut-butter-porter.jpg";
import hero2 from "../images/kegs.jpg";
import hero3 from "../images/deck_beers.jpg";

const Home = () => {
  // put in any hero sections here
  const heroSections = [
    {
      title: "Award Winning Brews",
      text: "Find our award winning Peanut Butter Porter at a store near you.",
      button: "Find Our Brews",
      image: hero1,
    },
    {
      title: "Brewing a Better World",
      text: "We are committed to serving our community and being environmentally friendly through the brewing process.",
      button: "About Lake Time",
      image: hero2,
    },
    {
      title: "Our Taproom",
      text: "Explore our taproom and events calendar.",
      button: "Visit Us",
      image: hero3,
    },
  ];

  const sliderRef = useRef(null);

  // settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Slider {...settings}>
      {heroSections.map((hero, index) => (
        <div key={index} className="relative">
          <div className="h-screen flex items-center justify-center bg-black">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-70"
              style={{
                backgroundImage: `url(${hero.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h1 className="text-5xl font-bold text-white mb-4">
                {hero.title}
              </h1>
              <p className="text-2xl text-white mb-8">{hero.text}</p>
              <button className="bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                {hero.button}
              </button>
              {/* put slider buttons here */}
              <div className="flex justify-center mt-4">
                <FiChevronLeft
                  className="mx-4 text-white cursor-pointer"
                  onClick={handlePrevClick}
                />
                <FiChevronRight
                  className="mx-4 text-white cursor-pointer"
                  onClick={handleNextClick}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Home;
