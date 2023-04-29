import React from "react";
import {
  AiOutlineClockCircle,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-secondary text-center text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Address */}
          <div>
            <h3 className="text-xl font-medium mb-2">Location</h3>
            <p className="text-md">801 Main Avenue</p>
            <p className="text-md">Clear Lake, IA</p>
            <p className="text-md">(641) 357-2040</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-medium mb-2">Hours</h3>
            <p className="text-md">Wednesday 4pm - 9pm</p>
            <p className="text-md">Thursday & Friday 4pm - 10pm</p>
            <p className="text-md">Saturday 12pm - 10pm</p>
            <p className="text-md">Sunday 12pm - 8pm</p>
          </div>

          {/* Facebook link */}
          <div>
            <h3 className="text-xl font-medium mb-2">Follow Us!</h3>
            <a
              href="https://www.facebook.com/laketimebrewery/?fref=ts"
              target="blank"
              className=" hover:text-gray-400 transition-colors"
            >
              <AiFillFacebook
                className="inline-block mr-1 hover:scale-105 duration-200"
                size={40}
              />
            </a>
            <a
              href="https://www.instagram.com/laketimebrewery/"
              target="blank"
              className=" hover:text-gray-400 transition-colors"
            >
              <AiOutlineInstagram
                className="inline-block mr-1 hover:scale-105 duration-200"
                size={40}
              />
            </a>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>&copy; 2023 Lake Time Brewery</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
