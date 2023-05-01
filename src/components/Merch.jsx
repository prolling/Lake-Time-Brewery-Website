import React from "react";
import cap from "../images/merch_images/m_cap.jpeg";
import gift_pack_pint from "../images/merch_images/m_gift_pack_pint.jpg";
import lake_time_growler from "../images/merch_images/m_lake_time_growler.jpg";
import pint_glassware from "../images/merch_images/m_pint_glassware.jpeg";
import single_gift_pint from "../images/merch_images/m_single_gift_pint.jpg";
import sweatshirt from "../images/merch_images/m_sweatshirt.jpeg";
import t_shirts from "../images/merch_images/t-shirts.jpg";
import tulips_samplers from "../images/merch_images/m_tulips_samplers.jpeg";
import beanie from "../images/merch_images/m_beanie.jpg";

const Merch = () => {
  const merchItems = [
    {
      title: "Embroidered Cap",
      img: cap,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Pint Glass Gift Pack",
      img: gift_pack_pint,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Lake Time Growler",
      img: lake_time_growler,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "T-Shirts",
      img: t_shirts,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Pint Glassware",
      img: pint_glassware,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Single Pint Glass",
      img: single_gift_pint,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Lake Time Sweatshirt",
      img: sweatshirt,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Tulip Samplers",
      img: tulips_samplers,
      short: "this is a short description",
      long: "this is a long description",
    },
    {
      title: "Beanie",
      img: beanie,
      short: "this is a short description",
      long: "this is a long description",
    },
  ];

  return (
    <div className="pt-24 bg-gradient-to-b from-secondary to white via-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
          Our Apparel & Merchandise
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-4">
          <h2 className=" text-lg">
            TAKE A LITTLE LAKE TIME HOME! Commemorate your Lake Time experience
            with our ever changing selection of Lake Time merchandise – apparel,
            glassware, koozies & much more. Stop in and check it out!
          </h2>
        </div>

        <h3 className="text-xl font-extrabold text-white sm:text-xl text-center"></h3>
        <div className="flex flex-wrap justify-center items-center gap-4 pb-20">
          {merchItems.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 group"
            >
              <div className="group bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:opacity-75 relative">
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  className="w-full h-48 object-cover group-hover:opacity-20 duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                  <p className="opacity-0 group-hover:opacity-100 rounded-lg py-2 px-4 transition duration-300 absolute top-12 left-0 w-full z-10">
                    {item.short}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="pt-24 bg-gradient-to-b from-secondary to white via-white">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
  //         Our Apparel & Merchandise
  //       </h2>
  //       <div className="max-w-4xl mx-auto text-center mb-4">
  //         <h2 className=" text-lg">
  //           TAKE A LITTLE LAKE TIME HOME! Commemorate your Lake Time experience
  //           with our ever changing selection of Lake Time merchandise – apparel,
  //           glassware, koozies & much more. Stop in and check it out!
  //         </h2>
  //       </div>

  //       <h3 className="text-xl font-extrabold text-white sm:text-xl text-center"></h3>
  //       <div className="flex flex-wrap justify-center items-center gap-4 pb-20">
  //         {merchItems.map((item, index) => (
  //           <div key={index} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
  //             <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:opacity-75">
  //               <img
  //                 src={item.img}
  //                 alt={item.imgAlt}
  //                 className="w-full h-48 object-cover"
  //               />
  //               <div className="p-4 text-center">
  //                 <h3 className="text-lg font-semibold">{item.title}</h3>
  //                 <p className="text-gray-700">{item.text}</p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Merch;
