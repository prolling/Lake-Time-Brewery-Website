import React from "react";
import cap from "../images/merch_images/m_cap.jpeg";
import lake_time_growler from "../images/merch_images/m_lake_time_growler.jpg";
import pint_glassware from "../images/merch_images/m_pint_glassware.jpeg";
import sweatshirt from "../images/merch_images/m_sweatshirt.jpeg";
import t_shirts from "../images/merch_images/m_t-shirts.jpg";
import tulips_samplers from "../images/merch_images/m_tulips_samplers.jpeg";
import beanie from "../images/merch_images/m_beanie.jpg";

const Merch = () => {
  const merchItems = [
    {
      title: "Embroidered Cap",
      text: "Lake time brewery offers 2 styles of baseball caps. Each is embroidered with the Lake time logo.",
      img: cap,
      imgAlt: "cap image",
    },
    {
      title: "Lake Time Stocking Cap",
      text: "Whether you are planning to go skiing, sledding, or just crawling into your freezer for a quick mental breakdown, this stylish stocking cap brings both style and warmth to any activity.",
      img: beanie,
      imgAlt: "beanie image",
    },
    {
      title: "t-shirts",
      text: "Thats right motherfuckers, we got t-shirts. With a metric fuck-ton of styles to choose from, you could replace your entire wardrobe with soley these and no-one would be any the wiser!",
      img: t_shirts,
      imgAlt: "t-shirt image",
    },
    {
      title: "Lake Time Sweatshirt",
      text: "Are you tired of your nipples getting hard? ",
      img: sweatshirt,
      imgAlt: "sweatshirt image",
    },
    {
      title: "Lake Time Growler",
      text: "this is text for lake time growler",
      img: lake_time_growler,
      imgAlt: "growler image",
    },
    {
      title: "Pint Glassware",
      text: "text for pint glassware",
      img: pint_glassware,
      imgAlt: "pint glassware image",
    },
    {
      title: "Tulip Samplers",
      text: "text for tulips",
      img: tulips_samplers,
      imgAlt: "tulip samplers image",
    },
  ]
  return (
    <div name="about" className="pt-24 bg-primary">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {merchItems.map((item, index) => (
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
            <div className="relative">
              <img src={item.img} alt={item.imgAlt} className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-black hover:bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                <div className="overflow-hidden shadow-lg p-4">
                  <p className="text-white">{item.text}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Merch;
