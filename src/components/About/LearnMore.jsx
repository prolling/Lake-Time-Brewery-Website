import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import article1 from "../../images/community_images/50fastest.jpg";
import article2 from "../../images/community_images/lastPint.jpg";

const LearnMore = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const article = [
    {
      name: "Brewers Association, March 2019",
      image: article1,
      link: "https://www.brewersassociation.org/press-releases/fastest-growing-craft-breweries-2018/",
    },
    {
      name: "Brewer Magazine, Jan/Feb 2016",
      image: article2,
    },
    {
      name: "Clear Lake IPA",
      image: article1,
    },
    {
      name: "Cabana Boy",
      image: article1,
    },
  ];

  return (
    <div className=" max-w-screen-lg mx-auto relative py-20 ">
      <h2 className="text-4xl font-bold text-center pb-2">Learn More</h2>
      <div className="">
        <Slider ref={sliderRef} {...settings} className="">
          {article.map((article, index) => (
            <div key={index} className="p-4 shadow-md shadow-gray-800">
              <a href={article.link} target="blank">
                <img src={article.image} alt={article.name} />
              </a>
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
    </div>
  );
};

export default LearnMore;
