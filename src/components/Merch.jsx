import React from "react";
import kegs from "../images/merch_images/beanie.jpg";

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
  ];
  return (
    <div name="about" className="pt-24 bg-slate-400">
      <div className="flex items-center justify-evenly gap-y-2 gap-x-4 p-2 flex-wrap">
        <div className="grid w-1/5 border-4 border-secondary">
          <img src={cap} alt="Image 1"></img>
          <p className="border-2 border-secondary text-center bg-primary">
            Embroidered Cap
          </p>
        </div>
        <div className="grid w-1/5 border-4 border-secondary">
          <img src={gift_pack_pint} alt="Image 2"></img>
          <p className="border-2 border-secondary text-center bg-primary">
            Pint Glass Gift Pack
          </p>
        </div>
        <div className="grid w-1/5 border-4 border-secondary">
          <img src={lake_time_growler} alt="Image 3"></img>
          <p className="border-2 border-secondary text-center bg-primary">
            Lake Time Growler
          </p>
        </div>
        <div className="grid w-1/5 border-4 border-secondary">
          <img src={lots_of_shirts} alt="Image 4"></img>
          <p className="border-2 border-secondary text-center bg-primary">
            t-Shits
          </p>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={pint_glassware} alt="Image 5"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={single_gift_pint} alt="Image 6"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={sweatshirt} alt="Image 7"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={two_boston_rounds} alt="Image 8"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={tulips_samplers} alt="Image 9"></img>
        </div>
        <div className="w-1/4 px-2 mb-4">
          <img src={t_shirts} alt="Image 10"></img>
        </div>
      </div>
    </div>
  );
};

export default Merch;
