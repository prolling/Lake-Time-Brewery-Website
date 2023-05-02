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
      short: "Our one-size fits most cap is comes in multiple colors!",
      long: "Our Lake Time Brewery cap is the perfect accessory for any beer lover. Made from high-quality materials, this stylish cap features our brewery's logo and a classic design that's perfect for any occasion. It's a great way to show your love for craft beer and our brewery, whether you're visiting us in person or enjoying a beer at home. With an adjustable strap, it's also a comfortable and versatile accessory that you can wear all day long.",
    },
    {
      title: "Pint Glass Gift Pack",
      img: gift_pack_pint,
      short:
        "Make gift giving easy this holiday season and give the gift of our Lake Time pint glasses!",
      long: "Our Lake Time Brewery gift pack pint set is the perfect gift for any beer lover. This set includes two pint glasses, each featuring our brewery's logo and a classic design that's perfect for any occasion. It's a great way to share your love of craft beer with a friend or family member, or to commemorate a visit to the brewery.",
    },
    {
      title: "Lake Time Growler",
      img: lake_time_growler,
      short:
        "Enjoy your favorite Lake Time Brewery beer on the go with our growler with travel case.",
      long: "Our Lake Time Brewery growler w/ travel case is the perfect choice for taking your favorite beer on the go. Made from high-quality glass, this 64oz growler features our brewery's logo and a secure cap for preventing spills. The set also includes a convenient travel case for easy transport. It's a great way to enjoy your favorite beer wherever you go, whether it's to the beach, on a hike, or to a friend's house.",
    },
    {
      title: "T-Shirts",
      img: t_shirts,
      short: "Show off your love for Lake Time with our t-shirt.",
      long: "Whether you're a craft beer enthusiast or just looking for a comfortable and stylish shirt, our Lake Time Brewery men's shirt is the perfect choice. Made from high-quality materials, this shirt is soft, breathable, and features our brewery's logo on the front. It's perfect for wearing to the brewery or for any casual occasion, and is sure to become a favorite among beer lovers.",
    },
    {
      title: "Pint Glassware",
      img: pint_glassware,
      short: "Emjoy your Lake Time craft beer at home with our pint glasswear.",
      long: "Our Lake Time Brewery pint glassware is the perfect way to enjoy your favorite beer in style. Made from high-quality glass, these pint glasses feature our brewery's logo and a classic design that's perfect for any occasion. Whether you're sipping a cold one at the brewery or enjoying a beer at home, these glasses are sure to become a go-to in your beer glass collection.",
    },
    // {
    //   title: "Single Pint Glass",
    //   img: single_gift_pint,
    //   short: "this is a short description",
    //   long: "this is a long description",
    // },
    {
      title: "Lake Time Sweatshirt",
      img: sweatshirt,
      short: "Stay warm this winter with our Lake Time sweatshirts!",
      long: "Our Lake Time Brewery sweatshirt is the perfect choice for staying cozy and stylish in cooler weather. Made from high-quality materials, this sweatshirt features our brewery's logo on the front and a comfortable design that's perfect for relaxing at home or hanging out at the brewery. It's sure to become a favorite among beer lovers.",
    },
    {
      title: "Tulip Samplers",
      img: tulips_samplers,
      short:
        "Elevate your beer-drinking experience with our Lake Time Brewery tulip glassware.",
      long: "Our Lake Time Brewery tulip glassware is the perfect choice for elevating your beer-drinking experience. Made from high-quality glass, these glasses feature a unique tulip-shaped design that enhances the aroma and flavor of your beer. The front of the glass also features our brewery's logo, making it a stylish addition to any beer enthusiast's collection. Whether you're enjoying a Belgian ale or a hoppy IPA, these tulip glasses are sure to enhance your drinking experience.",
    },
    {
      title: "Stocking Hat",
      img: beanie,
      short: "Keep warm with our Lake Time stocking hat!",
      long: "Our Lake Time Brewery men's stocking hat is the perfect choice for keeping warm and stylish in cold weather. Made from high-quality materials, this hat features our brewery's logo and a comfortable design that's perfect for any outdoor activity. Whether you're hitting the slopes or just running errands, this hat is sure to become a go-to in your winter wardrobe.",
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
                  <p className=" opacity-0 group-hover:opacity-100 rounded-lg py-2 px-4 transition duration-300 absolute top-12 left-0 w-full z-10">
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
