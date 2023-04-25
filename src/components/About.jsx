import React, { useState } from "react";

const About = () => {
  const [tab, setTab] = useState("origins");

  const Tab = ({ title, content }) => (
    <button
      onClick={() => setTab(title)}
      className={`${
        tab === title ? "bg-blue-500 text-white" : "bg-white text-blue-500"
      } py-2 px-4 font-semibold rounded-t-lg border-t border-l border-r border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none`}
    >
      {content}
    </button>
  );

  return (
    <div
      name="about"
      className="h-screen w-full flex flex-col items-center justify-center bg-secondary pt-40"
    >
      <div name="about-section">
        {/* about section */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-5 text-center">About Us</h2>
          <div className="flex justify-center">
            <Tab title="origins" content="Origins" />
            <Tab title="mission" content="Mission" />
            <Tab title="react-tailwind" content="React & Tailwind" />
          </div>
          <div className="border border-t-0 border-blue-500 rounded-b-lg p-6">
            {tab === "origins" && (
              <p className="text-lg">
                Our company was founded in 2010 with a passion for delivering
                top-quality products and services to our customers. Over the
                years, we have grown into a leading brand known for innovation
                and customer satisfaction.
              </p>
            )}
            {tab === "mission" && (
              <p className="text-lg">
                Our mission is to consistently provide innovative, high-quality
                products and services to our customers. We believe that by
                focusing on customer satisfaction, we can build long-lasting
                relationships and drive our success in the industry.
              </p>
            )}
            {tab === "react-tailwind" && (
              <p className="text-lg">
                We utilize modern technologies like React and Tailwind CSS to
                create visually appealing and user-friendly web applications. By
                leveraging these tools, we can deliver efficient, responsive,
                and accessible solutions for our clients.
              </p>
            )}
          </div>
        </div>
      </div>
      <div name="sustainability">
        {/* sustainability section */}
        Sustainability
      </div>
      <div name="careers">
        {/* careers section */}
        Careers
      </div>
      <div name="news">
        {/* news section */}
        News
      </div>
    </div>
  );

  // careers section

  // news section
};

export default About;
