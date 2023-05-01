import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beer1 from "../../images/can_images/9-alpha-dogbone-sandwich/6-can_mockup.png";
import beer2 from "../../images/can_images/20-beach_bod_ipa/20-can_mockup.png";
import beer3 from "../../images/can_images/39-clear_lake_ipa/39-can_mockup.png";
import beer4 from "../../images/can_images/29-cabana_boy/29-can_mockup.png";
import beer5 from "../../images/can_images/52-funfetti/52-can_mockup.png";
import beer6 from "../../images/can_images/66-idiocracy/66-can_mockup.png";
import beer7 from "../../images/can_images/1-copper_road_sticke_alt/1-can_mock_up.png";
import beer8 from "../../images/can_images/10-archors_aweigh/10-can_mockup.png";
import beer9 from "../../images/can_images/21-bearfoot_robust_porter/21-can_mockup.png";
import beer10 from "../../images/can_images/23-billy_goat_doppelbock/23-can_mockup.png";
import beer11 from "../../images/can_images/42-crooked_shillalah/42-can_mockup.png";
import beer12 from "../../images/can_images/48-dunkel_donuts/48-can_mockup.png";

const Beers = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const beerData = [
    {
      name: "Alpha Dogbone Sandwich",
      image: beer1,
    },
    {
      name: "Beach Body IPA",
      image: beer2,
    },
    {
      name: "Clear Lake IPA",
      image: beer3,
    },
    {
      name: "Cabana Boy",
      image: beer4,
    },
    {
      name: "Funfetti",
      image: beer5,
    },
    {
      name: "Idiocracy",
      image: beer6,
    },
    {
      name: "Copper Road",
      image: beer7,
    },
    {
      name: "Archors Aweigh",
      image: beer8,
    },
    {
      name: "Bearfoot Robust Porter",
      image: beer9,
    },
    {
      name: "Billy Goat Doppelbock",
      image: beer10,
    },
    {
      name: "Crooked Shillalah",
      image: beer11,
    },
    {
      name: "Dunkel Donuts",
      image: beer12,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto relative py-20 opacity-0 animate-fade-in duration-2 delay-4">
      <h2 className="text-4xl font-bold text-center pb-2">Our Brews</h2>
      <div className="">
        <Slider ref={sliderRef} {...settings} className="">
          {beerData.map((beer, index) => (
            <div key={index} className="p-4">
              <img src={beer.image} alt={beer.name} />
            </div>
          ))}
        </Slider>
      </div>
      <FiChevronLeft
        className="absolute top-1/2 left-0 transform -translate-y-1/2 mx-4 text-black cursor-pointer text-4xl"
        onClick={handlePrevClick}
      />
      <FiChevronRight
        className="absolute top-1/2 right-0 transform -translate-y-1/2 mx-4 text-black cursor-pointer text-4xl"
        onClick={handleNextClick}
      />
      <div className="text-center">
        <Link to="/beers#top" className="hover:cursor-pointer text-center">
          <button className="hover:scale-105 duration-100 group text-white w-fit px-6 py-3 my-2 text-center rounded-md bg-secondary hover:cursor-pointer">
            Find Our Brews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Beers;
