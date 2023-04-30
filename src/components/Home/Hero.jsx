import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hero1 from "../../images/taproom_images/peanut-butter-porter.jpg";
import hero2 from "../../images/production_images/kegs.jpg";
import hero3 from "../../images/taproom_images/taproom_outside.jpg";

const Hero = () => {
  const heroSections = [
    {
      title: "Award Winning Brews",
      text: "Find our award winning Peanut Butter Porter at a store near you.",
      button: "Find Our Brews",
      image: hero1,
      link: "/beers",
    },
    {
      title: "Brewing a Better World",
      text: "We are committed to serving our community and being environmentally friendly through the brewing process.",
      button: "About Lake Time",
      image: hero2,
      link: "/about",
    },
    {
      title: "Our Taproom and Events",
      text: "Explore our taproom and events calendar. Join us for a pint here at Lake Time!",
      button: "Visit Us",
      image: hero3,
      link: "/events",
    },
  ];

  // reference to the slider
  const sliderRef = useRef(null);

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

  // settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

return (
  <Slider
    ref={sliderRef}
    {...settings}
    className="bg-gradient-to-t from-white to-secondary"
  >
    {heroSections.map((hero, index) => (
      <div key={index} className="pt-40 pb-16 w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto md:h-64 px-4 md:flex-row relative">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start">
            <img
              className="rounded-2xl object-cover h-56 w-full max-w-[300px] md:max-w-[300px] mx-auto md:mx-0"
              src={hero.image}
              alt={hero.title}
            />
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center md:text-left">
              {hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 text-center md:text-left">{hero.text}</p>
            <div className="flex flex-col items-center">
             
              <a href={hero.link} className="group w-fit block text-white px-6 py-3 my-2 mx-auto flex items-center justify-center rounded-md bg-secondary hover:cursor-pointer hover:scale-105 duration-100">
                {hero.button}
              </a>
                             
              <div className="flex justify-center mt-4 bottom-0 left-0 right-0 z-10">
                <FiChevronLeft
                  className="mx-4 text-secondary cursor-pointer text-4xl"
                  onClick={handlePrevClick}
                />
                <FiChevronRight
                  className="mx-4 text-secondary cursor-pointer text-4xl"
                  onClick={handleNextClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

};

export default Hero;
