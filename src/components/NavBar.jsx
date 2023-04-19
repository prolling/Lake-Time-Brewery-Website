import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/Lake-Time-Logo.png";
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
    <nav className="flex justify-between items-center w-full h-40 pr-2 md:fixed bg-secondary">
      {/* Desktop Menu */}
      <Link to="/">
        <div className="cursor-pointer hover:scale-105">
          <img
            className="w-64 h-auto hidden md:flex min-w-[256px]"
            src={logo}
            alt="Lake Time Brewery Logo"
          />
        </div>
      </Link>

      <ul className="hidden md:flex text-white">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-3xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100"
          >
            {link.sublinks ? (
              <div
                className="relative"
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
                <Link className="text-white" to={link.link}>
                  {link.name}
                </Link>
                {item.isOpen && item.activeLink === link.id && (
                  <ul className="absolute left-0 top-full bg-secondary text-white py-2 px-4">
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.id}>
                        <Link to={sublink.link}>{sublink.name}</Link>
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
        className="pr-4 cursor-pointer z-10 text-lavender md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="text-white" />
        ) : (
          <FaBars size={30} className="text-white" />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary text-black">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => setNav(!nav)}
              className="text-white py-6 text-4xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100"
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
