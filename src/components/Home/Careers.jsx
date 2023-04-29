import React from "react";
import careers from "../../images/community_images/careers_brewery.jpg";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="bg-black text-white w-full min-h-48 flex items-center justify-center py-10">
      <div className="max-w-4xl px-8 py-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-secondary mr-6"
            src={careers}
            alt="Round Image"
          />
          <div>
            <h1 className="text-4xl font-semibold mb-4 text-secondary">
              Careers
            </h1>
            <p className="text-lg leading-relaxed">
              We're always on the lookout for talented, driven individuals to
              join our team. If you're passionate about what you do and are
              eager to make an impact, we'd love to hear from you! We offer a
              dynamic work environment, and ample opportunities for growth and
              development.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Check out our current openings or reach out to us to find
              opportunities that match your skills and interests!
            </p>
            <Link to="/about" className="hover:cursor-pointer">
              <button className="mt-4 inline-block bg-secondary text-white text-lg font-semibold py-2 px-4 rounded hover:bg-gray-200 hover:text-black duration-200">
                Explore Careers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
