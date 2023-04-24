import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div
      name="entire-footer"
      className="flex justify-center items-center mx-auto w-full text-2x1 h-40 relative bottom-0 text-white font-medium bg-secondary border-2 border-black"
    >
      <div
        name="content1"
        className="flex justify-center space-x-6 items-center flex-grow h-full text-sm md:text-lg min-w-fit border-2 border-black"
      >
        <div>
          <GrLocation size={60} className="text-white" />
        </div>
        <ul>
          <li>801 Main Avenue</li>
          <li>Clear Lake, IA</li>
          <li> (641) 357-2040</li>
        </ul>
      </div>
      <div
        name="content2"
        className="flex justify-center space-x-6 items-center flex-grow h-full text-sm md:text-lg min-w-fit border-2 border-black"
      >
        <div>
          <AiOutlineClockCircle size={60} className="text-white" />
        </div>
        <ul>
          <title>Hours:</title>
          <li>Wed 4 pm - 9 pm</li>
          <li>Thurs 4 pm - 10pm</li>
          <li>Fri 4 pm - 10pm</li>
          <li>Sat 12pm - 10pm</li>
          <li>Sun 12pm - 8 pm</li>
        </ul>
      </div>
      <div
        name="content3"
        className="flex justify-center space-x-6 items-center flex-grow h-full text-sm md:text-lg min-w-fit border-2 border-black"
      >
        <div>Socials</div>
        <div>FB</div>
        <div>TW</div>
      </div>
    </div>
  );
};

export default Footer;
