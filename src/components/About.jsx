import React, { useState } from "react";

const About = () => {
  return (
    <div name="about" className="pt-24">
      {/* about story*/}
      <div className="border-2 border-black p-12">
        <h1 className="text-7xl font-medium text-center">Lake Time</h1>
        <h2 className="m-8 border-2 border-black text-center">
          What is Lake Time you ask? Lake Time is not a time, but a state of
          mind — or an absence of time. Eat when you are hungry. Sleep when you
          are tired. Fish, swim, read a great book, and enjoy the sunshine when
          you please. Naps are encouraged. Friends and family are welcome.
          Nature is embraced. That is Lake Time.
        </h2>
      </div>

      {/* about sections*/}
      <div className="flex items-center justify-evenly border-2 border-black p-24">
        <div>
          <h3>Sustainability</h3>
          <img src="" alt="bw sustain" />
        </div>
        <div>
          <h3>Our Start</h3>
          <img src="" alt="bw start" />
        </div>
        <div>
          <h3>Careers</h3>
          <img src="" alt="bw career" />
        </div>
      </div>

      {/* these get rendered in */}
      {/* sustainability section */}
      <div></div>
      {/* our start*/}
      <div></div>
      {/* careers*/}
      <div></div>

      {/* learn more */}
      <div></div>
    </div>
  );

  // careers section

  // news section
};

export default About;
