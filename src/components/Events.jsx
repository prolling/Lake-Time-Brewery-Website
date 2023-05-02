import React from "react";

const Events = () => {
  return (
    <div className="bg-gray-200 p-4 pt-24">
      <div className="max-w-4xl mx-auto text-center mb-4">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl text-center mb-8">Upcoming events</h2>
          <div className="max-w-4xl mx-auto text-center mb-4">
          <h2 className=" text-lg">Join us in the taproom for some of our upcoming events!</h2>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=laai3r40il66nfo0pun5oeltt4%40group.calendar.google.com&ctz=America%2FChicago"
          className="border-0 filter invert-90 saturate-50 hue-rotate-145"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Events;
