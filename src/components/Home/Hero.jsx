import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hero1 from "C:/Users/paige/OneDrive/Desktop/Iowa State/COM S 319/Final/lake-time-website/src/images/peanut-butter-porter.jpg";

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
      image: hero1,
      link: "/about",
    },
    {
      title: "Our Taproom",
      text: "Explore our taproom and events calendar.",
      button: "Visit Us",
      image: hero1,
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
    <Slider ref={sliderRef} {...settings} className="">
      {heroSections.map((hero, index) => (
        <div key={index} className="pt-40 pb-16 w-full bg-secondary">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative">
            <div className="w-1/2 h-full bg-secondary flex items-center">
              <img
                className="rounded-2xl md:w-full md:max-w-[250px]"
                src={hero.image}
                alt={hero.title}
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center px-8">
              <h1 className="text-5xl font-bold text-white mb-4">
                {hero.title}
              </h1>

              <p className="text-2xl text-white mb-8">{hero.text}</p>
              <div className="flex flex-col items-center">
              <Link to={hero.link}>
                <button className="bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                  {hero.button}
                </button>
              </Link>
              <div className="flex justify-center mt-4 absolute bottom-0 left-0 right-0 z-10">
                <FiChevronLeft
                  className="mx-4 text-white cursor-pointer text-4xl"
                  onClick={handlePrevClick}
                />
                <FiChevronRight
                  className="mx-4 text-white cursor-pointer text-4xl"
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
