import React from "react";
import kegs from "../images/merch_images/beanie.jpg";

const Merch = () => {
  return (
    <div name="about" className="pt-24 bg-slate-400">
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/4 px-2 mb-4">
          <img src={kegs} alt="Image 1"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="./images/careers_brewery.jpg" alt="Image 2"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image3.jpg" alt="Image 3"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image4.jpg" alt="Image 4"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image5.jpg" alt="Image 5"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image6.jpg" alt="Image 6"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image6.jpg" alt="Image 7"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image6.jpg" alt="Image 8"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image6.jpg" alt="Image 9"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src="path/to/image6.jpg" alt="Image 10"></img>
        </div>
      </div>
    </div>
  );
};

export default Merch;
