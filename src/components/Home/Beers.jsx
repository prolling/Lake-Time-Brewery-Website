import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Beers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const beerData = [
    {
      name: "Alpha Dogbone Sandwich",
      image: "../images/can_images/1-alpha_dogbone_sandwich/1-can_mockup.png",
    },
    {
      name: "Beach Body IPA",
      image: "../images/can_images/2-beach_body_ipa/2-can_mockup.png",
    },
    {
      name: "Clear Lake IPA",
      image: "../images/can_images/3-clear_lake_ipa/3-can_mockup.png",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {beerData.map((beer, index) => (
          <div key={index} className="p-4">
            <img src={beer.image} alt={beer.name} />
            <h2 className="text-lg font-bold mt-4">{beer.name}</h2>
            <p className="text-sm mt-2">{beer.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Beers;
