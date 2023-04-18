import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/Lake-Time-Logo.png";
import { Link as ReactScrollLink } from "react-scroll";
import Socials from "./Socials";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-40 bg-rose pr-2 md:fixed">
      <ReactScrollLink to="home" spy={true} smooth={true} duration={500}>
        <div className="cursor-pointer hover:scale-105">
          <img
            className="w-64 h-auto hidden md:flex min-w-[256px]"
            src={logo}
            alt="Paige Rolling"
          />
        </div>
      </ReactScrollLink>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-lavender text-3xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100"
          >
            <ReactScrollLink
              to={link.link}
              spy={true}
              smooth={true}
              duration={500}
              scrollToTopOffset={50}
            >
              {link.link}
            </ReactScrollLink>
          </li>
        ))}
      </ul>
      <Socials /> {/* render Socials component here */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 text-lavender md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-rose to-timberwolf_light text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white py-6 text-4xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100"
            >
              <ReactScrollLink
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link.link}
              </ReactScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
