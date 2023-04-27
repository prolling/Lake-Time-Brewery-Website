import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import sect11 from "../images/glass.JPG";
import sect13 from "../images/brewery_chamber.jpg";
import sect12 from "../images/taproom_outside.jpg";
import sect21 from "../images/taproom_inside.JPG";
import sect31 from "../images/careers_brewery.jpg";
import sect32 from "../images/lots_of_cans.jpg";
import sect33 from "../images/t-shirts.jpg";
import hours from "../images/Hours_yellow.png";
import location from "../images/location_yellow.png";

import Hero from "./Home/Hero.jsx"

const Home = () => {
  // put in any hero sections here
  

  return (
    // home content here
    <div>
      <Hero />
      

      {/* 3 sections here with image backgrounds */}
      <div className="mx-auto py-2 w-full">
        <div className="flex flex-wrap">
          {[
            {
              title: "Find Our Brews",
              // text: "Find your favorite Lake Time brew at a store near you.",
              image: sect11,
              link: "/beers",
            },
            {
              title: "Sustainability",
              // text: "Learn about our brewing process.",
              image: sect12,
              link: "/about",
            },
            {
              title: "Our Story",
              // text: "Learn how we got started",
              image: sect13,
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
                    <h2 className="font-bold text-white flex items-center">
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

      {/* one section taproom here */}
      <div className="mx-auto py-2 w-full">
        <div className="flex flex-wrap">
          {[
            {
              title: "Taproom",
              // text: "Find your favorite Lake Time brew at a store near you.",
              image: sect21,
              link: "/events",
              p1: "HOURS: Wednesday 4pm - 9pm <br> Thursday & Friday 4pm - 10 pm <br> Saturday 12pm - 10pm <br> Sunday 12pm - 8pm",
              p2: "Location: 801 Main Avenue <br> Clear Lake, IA <br> (641) 357-2040",
            },
          ].map((item, index) => (
            <div key={index} className="w-full py-1">
              <Link to={item.link}>
                <div
                  className="h-64 rounded-lg bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    borderLeft: index !== 0 ? "1px solid white" : "none",
                    borderRight: index !== 2 ? "1px solid white" : "none",
                  }}
                >
                  <div className="font-bold text-2xl md:text-4xl hover:text-4xl md:hover:text-6xl duration-200 absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 flex flex-col justify-center items-center">
                    <div className="flex flew-row justify-between w-full md:px-4">
                      {/* <div
                        className="mt-2 text-white flex items-center text-xl"
                        dangerouslySetInnerHTML={{ __html: item.p1 }}
                      /> */}
                      <img
                        src={hours}
                        alt="hours"
                        className="z-10 h-80 w-auto hidden lg:block"
                      />
                      <h2 className="font-bold text-white flex items-center justify-center">
                        {item.title}
                      </h2>
                      <img
                        src={location}
                        alt="location"
                        className="z-10 h-80 w-auto hidden lg:block"
                      />
                      {/* <div
                        className="font-bold mt-2 text-white flex items-center text-xl"
                        dangerouslySetInnerHTML={{ __html: item.p2 }}
                      /> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* one section for events here */}
      <div>
        <h1>Events</h1>
      </div>

      {/* 3 sections here with image backgrounds */}
      <div className="mx-auto py-2 w-full">
        <div className="flex flex-wrap">
          {[
            {
              title: "Careers",
              // text: "Find your favorite Lake Time brew at a store near you.",
              image: sect31,
              link: "/about",
            },
            {
              title: "Distribution",
              // text: "Learn about our brewing process.",
              image: sect32,
              link: "/about",
            },
            {
              title: "Merch",
              // text: "Learn how we got started",
              image: sect33,
              link: "/merch",
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
