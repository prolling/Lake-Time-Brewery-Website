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
      title: "Our Taproom",
      text: "Explore our taproom and events calendar.",
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
    // hero section slider here
    <div>
      <Slider ref={sliderRef} {...settings} className="pt-40">
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
                <Link to={hero.link}>
                  <button className="bg-white text-black py-2 px-4 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                    {hero.button}
                  </button>
                </Link>
                {/* put slider buttons here */}
                <div className="flex justify-center mt-4">
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
        ))}
      </Slider>

      {/* 3 sections here with image backgrounds */}
      <div className="mx-auto py-2 w-full">
        <div className="flex flex-wrap">
          {[
            {
              title: "Find Our Brews",
              // text: "Find your favorite Lake Time brew at a store near you.",
              image: hero1,
              link: "/beers",
            },
            {
              title: "Sustainability",
              // text: "Learn about our brewing process.",
              image: hero2,
              link: "/about",
            },
            {
              title: "Our Story",
              // text: "Learn how we got started",
              image: hero3,
              link: "/events",
            },
          ].map((item, index) => (
            <div key={index} className="w-full md:w-1/3 py-1">
              <Link to={item.link}>
                <div
                  className="h-64 rounded-lg bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    borderLeft: index !== 0 ? "1px solid white" : "none",
                    borderRight: index !== 2 ? "1px solid white" : "none",
                  }}
                >
                  <div className="text-2xl hover:text-4xl duration-200 absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 flex flex-col justify-center items-center">
                    <h2 className=" font-bold text-white flex items-center">
                      {item.title}
                    </h2>
                    {/* <p className="mt-2 text-white flex items-center">
                {item.text}
              </p> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
