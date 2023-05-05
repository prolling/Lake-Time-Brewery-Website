import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import article1 from "../../images/community_images/50fastest.jpg";
import article2 from "../../images/community_images/lastPint.jpg";
import article3 from "../../images/taproom_images/peanut-butter-porter.jpg";
import article4 from "../../images/community_images/brews_on_the_beach.jpg";

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
      name: "Great American Beer Festival Bronze Medal",
      image: article3,
      link: "https://www.desmoinesregister.com/story/entertainment/2022/10/11/clear-lake-brewery-wins-bronze-at-great-american-beer-festival/69554734007/",
    },
    {
      name: "Brews on the Beach",
      image: article4,
      link: "https://globegazette.com/announcements/brews-on-the-beach-to-make-return-this-summer/article_8993218c-7012-54b7-a2a9-8214fd73e00e.html",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto relative py-20 opacity-0 animate-fade-in duration-2 delay-5">
      <h2 className="text-4xl font-bold text-center pb-8">Learn More</h2>
      <div className="">
        <Slider ref={sliderRef} {...settings} className="w-auto px-20">
          {article.map((article, index) => (
            <div
              key={index}
              className="p-4 mx-2"
            >
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={article.image}
                  alt={article.name}
                  className="object-contain h-48 w-full"
                />
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
