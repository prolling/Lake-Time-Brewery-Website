import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/pages/Lake-Time-Brewery/539130622766741?fref=ts",
    icon: <FaFacebook className="text-3xl" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/laketimebrewery/",
    icon: <FaInstagram className="text-3xl" />,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@lake_time_brewery",
    icon: <FaTiktok className="text-3xl" />,
  },
];

const Socials = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Follow us on social media</h2>
        <div className="flex items-center justify-center">
          {socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
