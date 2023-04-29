import React from "react";
import { Link } from "react-router-dom";

// TODO: change images 
import sect1 from "../../images/community_images/brewery_chamber.jpg";
import sect2 from "../../images/production_images/lots_of_cans.jpg";
import sect3 from "../../images/taproom_images/outside_cans.jpg"

const Giving = () => {
  const givingSections = [
    {
      index: 1,
      title: "Giving Back",
      text: "As members of the Clear Lake community, we are commited to giving back to the community that has supported us from the beginning.",
      button: "Our Community",
      img: sect1,
      imgAlt: "Community Service",
      link: "/about",
    },
    {
      index: 2,
      title: "Brewing a Better World",
      text: "We aspire to be a leader in sustainability in the craft beer industry by being an environmental steward throughout the entire brewing process.",
      button: "Our Brewing Process",
      img: sect2,
      imgAlt: "Sustainability",
      link: "/about",
    },
    {
      index: 3,
      title: "Brews on the Beach",
      text: "Join us for our annual Brews on the Beach festival, featuring live music, food trucks, and of course, great craft beer. Funds from Brews on the Beach go towards community projects led by the Clear Lake Rotary Club.",
      button: "About Lake Time",
      img: sect1,
      imgAlt: "Brews on the Beach",
      link: "https://www.brewsonthebeach.com/tickets",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {givingSections.map((section) => (
          <div
            key={section.index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              section.index % 2 === 0 ? "md:grid-cols-reverse" : ""
            } ${section.index > 1 ? "mt-12" : ""}`}
          >
            <div
              className={`${
                section.index % 2 === 0 ? "md:order-2" : "md:order-1"
              } space-y-4 text-center`}
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-gray-700">{section.text}</p>
              <div className="pt-6">
                <Link to={section.link}>
                  <button className="group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-secondary hover:cursor-pointer">
                    {section.button}
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${
                section.index % 2 === 0 ? "md:order-1" : "md:order-2"
              } flex justify-center`}
            >
              <img
                src={section.img}
                alt={section.imgAlt}
                className="rounded-2xl md:w-full md:max-w-[250px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Giving;
