import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo2 from "../images/logos/Lake-Time-Logo.png";
import logo1 from "../images/logos/LTB 1Color Logo FINAL 2018.png"
import logo from "../images/logos/LTB Name Only FINAL.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [item, setDrop] = useState({ activeLink: null, isOpen: false });

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/about",
      name: "About",
      sublinks: [
        {
          id: 1,
          link: "/sustainability",
          name: "Sustainability",
        },
        {
          id: 2,
          link: "/careers",
          name: "Careers",
        },
        {
          id: 3,
          link: "/news",
          name: "News",
        },
      ],
    },
    {
      id: 3,
      link: "/beers",
      name: "Beers",
      sublinks: [
        {
          id: 1,
          link: "/ourbeers",
          name: "Our Beers",
        },
        {
          id: 2,
          link: "/distribution",
          name: "Distribution",
        },
        {
          id: 3,
          link: "/beerfinder",
          name: "Beer Finder",
        },
      ],
    },
    {
      id: 4,
      link: "/merch",
      name: "Merch",
    },
    {
      id: 5,
      link: "/events",
      name: "Events",
    },
    {
      id: 6,
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="z-20 flex justify-between items-center w-full h-16 pr-2 md:fixed bg-white">
      {/* Desktop Menu */}
      <Link to="/">
        <div className="cursor-pointer">
          <img
            className="w-40 px-6 h-auto  md:flex duration-200"
            src={logo}
            alt="Lake Time Brewery Logo"
          />
        </div>
      </Link>

      <ul className="hidden md:flex text-black text-xl font-medium">
        {links.map((link) => (
          <li
            key={link.id}
            className="capitalize text-md font-semibold px-4 cursor-pointer hover:text-gray-500 duration-200"
          >
            {link.sublinks ? (
              <div
                className="relative "
                onMouseEnter={() =>
                  setDrop({
                    activeLink: link.id,
                    isOpen: true,
                  })
                }
                onMouseLeave={() =>
                  setDrop({
                    activeLink: null,
                    isOpen: false,
                  })
                }
              >
                <Link
                  className="text-black  hover:text-gray-500 duration-200 "
                  to={link.link}
                >
                  {link.name}
                </Link>
                {item.isOpen && item.activeLink === link.id && (
                  <ul className="absolute left-0 top-full bg-white text-black py-2 px-4 shadow-md shadow-black ">
                    {link.sublinks.map((sublink) => (
                      <li
                        key={sublink.id}
                        className=" hover:text-gray-500 duration-200"
                      >
                        <Link
                          className="hover:text-gray-500 duration-200"
                          to={sublink.link}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={link.link}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-30 text-white md:hidden"
      >
        {nav ? (
          <FaTimes
            size={30}
            className="text-white hover:scale-105 hover:text-gray-500 duration-200"
          />
        ) : (
          <FaBars
            size={30}
            className="text-secondary hover:scale-105 hover:text-gray-500 duration-200"
          />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary text-black z-20">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => setNav(!nav)}
              className="text-white py-6 text-4xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-200"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
