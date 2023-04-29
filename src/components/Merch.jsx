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
      text: "this is text for the embroidered cap",
      img: cap,
      imgAlt: "img1",
    },
    {
      title: "Pint Glass Gift Pack",
      text: "this is text is for the pint glass gift pack",
      img: gift_pack_pint,
      imgAlt: "img2",
    },
    {
      title: "Lake Time Growler",
      text: "this is text for lake time growler",
      img: lake_time_growler,
      imgAlt: "img3",
    },
    {
      title: "t-shits",
      text: "text for tshirts",
      img: t_shirts,
      imgAlt: "img4",
    },
    {
      title: "Pint Glassware",
      text: "text for pint glassware",
      img: pint_glassware,
      imgAlt: "img5",
    },
    {
      title: "Single Pint Glass",
      text: "text for single pint glass",
      img: single_gift_pint,
      imgAlt: "img6",
    },
    {
      title: "Lake Time Sweatshirt",
      text: "text for sweatshirt",
      img: sweatshirt,
      imgAlt: "img7",
    },
    {
      title: "Tulip Samplers",
      text: "text for tulips",
      img: tulips_samplers,
      imgAlt: "img8",
    },
    {
      title: "Beanie",
      text: "text for beanie",
      img: beanie,
      imgAlt: "img9",
    },
  ];
  return (
    <div name="about" className="pt-24 bg-slate-400">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {merchItems.map((item, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={item.img} alt={item.imgAlt} className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
