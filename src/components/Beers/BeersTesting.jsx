import React from "react";
import BeerCard from "./BeerCard"

const BeersTesting = () => {
  const beers = [
    {
      name: "Copper Road ",
      type: "Sticke Alt",
      ID: 1,
      IBU: 30,
      ABV: 6.199999809265137,
      description:
        "A beer style that dates back to before refrigeration, an Altbier is typically cool fermented and then cool lagered. Made with plenty of Munich malts, the taste is greatly influenced by the yeast – creating a light and clean mouthfeel with an aromatic finish. While an Altbier in general is an amber hybrid, our Copper Road is copper in color, hop accented and clean tasting. A true relic!",
      hops: "",
      malts: "Pilsner, Munich, dextrin, Caramunich",
      good_stuff:
        "While most ales in the Anglo-Saxon brewing tradition-as well as most classic, top fermented Weissbiers from Bavaria-are relatively warm fermented. Altbier is unusually cool fermented and then cool conditioned or lagered. The Altbiers unique fermentation temperature has geographic and historsticke alt beerical reasons. It is a relic from a time before refrigeration, which we owe to Carl von Linde, who installed the worlds first beer refrigeration at the Spaten brewery of Munich in 1876.",
      img: "https://drive.google.com/uc?id=1fs9Xq7mpUj1VauKkddQxdmpgwklFmW0h\r",
      rating: 0,
    },
    {
      name: "Anchors Aweigh Chocolate",
      type: "Imperial Stout",
      ID: 2,
      IBU: 50,
      ABV: 10.5,
      description:
        "Our traditional Anchors Aweigh is perfect for sipping anytime you want a big, bold beer that’ll warm you from the inside out. Now we’ve taken our beloved Imperial Stout and infused it with cinnamon and nutmeg! The dark chocolate and roasted malts accent it to make this beer taste like a mexican hot chocolate – certainly one you will never forget.",
      hops: "German Northern Brewer, Centenial",
      malts: "2 row, crystal, roast, black, caramunich, and oats.",
      good_stuff: "coco nibs, cinnamon, nutmeg.",
      img: "https://drive.google.com/uc?id=1n4lqN-o7iU30oSvlMGkNwvOxWwfxTbgg\r",
      rating: 0,
    },
    {
      name: "Coconut Anchors Aweight",
      type: "Imperial Stout",
      ID: 3,
      IBU: 50,
      ABV: 10.5,
      description:
        "Our traditional Anchors Aweigh is perfect for sipping anytime you want a big, bold beer that’ll warm you from the inside out. Now we’ve taken our beloved Imperial Stout and infused it with toasted coconut! The dark chocolate and roasted malts accent the complexity to make this coconut Anchors Aweigh certainly one you will never forget.",
      hops: "German Northern Brewer, Centenial",
      malts: "2 row, crystal, roast, black, caramunich, and oats.",
      good_stuff: "Toasted Coconut",
      img: "https://drive.google.com/uc?id=19r8zBMean066w_z6X5V-_7AJ3_QZj7TR\r",
      rating: 0,
    },
    {
      name: "Java Junkie",
      type: "English Style Stout",
      ID: 4,
      IBU: 26,
      ABV: 5.599999904632568,
      description:
        "Brew: a word shared by brewers & baristas; a combo of the two makes perfect sense. Pouring a deep espresso color, this English Style Stout is dominated by the aroma of roasted Guatamalan and Nicaraguan coffee. Flavors of dark chocolate, vanilla & sweet cream create a unique depth of decadent tastes. Brew & friends – the perfect blend.                                                        ",
      hops: "Liberty Hops",
      malts: "2 row, Roasted Barley, Chocolate Malk",
      good_stuff: "Lactose, guatamalan and Nicaraguan Coffee ",
      img: "https://drive.google.com/uc?id=1-VZHMvFglkdC6ugIi7C00JugJfZYol1y\r",
      rating: 0,
    },
    {
      name: "Abbey of My Eye",
      type: "Apple Abbey",
      ID: 5,
      IBU: 15,
      ABV: 7,
      description:
        "Abbey beers are produced in a style made famous by Belgian Trappist monks, even though they were not actually brewed within the walls of a monastery.  It is a full-bodied beer featuring a deep burgundy color and enchanting aromas of fruit, honey, caramel, and toffee. We used local honey and fresh pressed apple juice in ours, resulting in rich and fruity flavors, with a dry finish.\t\t\t\t\t\t\t\t\t",
      hops: "Tettnang",
      malts: "pale, pilsner, caramel malts. ",
      good_stuff: "Brewed with local honey and fresh pressed apple juice. ",
      img: "https://drive.google.com/uc?id=1D0RSoPcRM78WUKyS2fDPu-gl-eolnTuc\r",
      rating: 0,
    },
    {
      name: "Adult Decisions IIPA\t\t\t",
      type: "IIPA",
      ID: 6,
      IBU: 50,
      ABV: 10,
      description:
        "Some decisions are easy, like drinking this IIPA.  Some decisions are hard, like which hops to use...so we used them all.  This classic Imperial IPA is bursting with hops, we used complex variety of six different hops and a double dry-hopped addition.  The forefront is an aroma of lemon, orange-citrus, and pine;  the classic Northwest flavor continues and is accompanied by bold hop flavors.  All this with a slightly sweet malty finish.  We hope you decide you love it.\t\t\t\t\t\t\t",
      hops: "",
      malts: "",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=1FVAX5VP7cDuX4_aGorY6rIn_DDhhqL8x\r",
      rating: 0,
    },
    {
      name: "All Fudge No Grudge",
      type: "Fudgsicle Ale",
      ID: 7,
      IBU: 16,
      ABV: 5.5,
      description:
        "Like the kid with a whole mess of fudgsicle-face we hope this beer brings you pure joy. Built with a foundation of malty-chocolate grains, we then added lactose sugar for sweetness and absolutely no bittering hops. On top of all this, gallons and gallons of melted fudgsicles directly into fermentation for a finish unlike any other beer. Just one sip and this Fudgsicle Ale will have you feeling like a kid again.\t\t\t\t\t\t\t",
      hops: "",
      malts: "",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=1jrea4NaGZ5gapQgxNgLtx2YypS9fzzIH\r",
      rating: 0,
    },
    {
      name: "All You Cool Cats & Kittens\t\t\t",
      type: "Hazy IPA",
      ID: 8,
      IBU: 30,
      ABV: 6.199999809265137,
      description:
        '"This insanely exotic but true Hazy IPA will tempt even the wildest of enthusiasts. Its flavors of Huell Mellon, Chinook & Ella hops are fully unleashed & Double Dry Hopped for a\nbeer more irresistible than the latest crime story & its characters you can’t stop watching.\n"\t\t\t\t\t\t\t',
      hops: "Huell Mellon, Chinook,Ella",
      malts: "2 row, Flaked Wheat",
      good_stuff: "Lactose",
      img: "https://drive.google.com/uc?id=1hSzvYWKqGw7YIc_8q27Qifd15Klfj5zX\r",
      rating: 0,
    },
    {
      name: "Alpha Dogbone Sandwich",
      type: "Hazy West Coast IPA",
      ID: 9,
      IBU: 0,
      ABV: 7.199999809265137,
      description:
        "After just one taste of this Hazy West Coast IPA, you’ll pledge your allegiance to the brotherhood of Alpha Dogbone Sandwich & to great craft beer. Formed chiefly for social purposes, Alpha Dogbone Sandwich starts with aromas that will knock you off your chair even before the taste of grapefruit, guava & passion fruit hit you. This beer was meant to be shared among friends.\t\t\t\t\t\t\t",
      hops: "Cascade, Citra Icognito, Mosaic Icognito",
      malts: "2-Row, White Wheat, Caramel malt",
      good_stuff: "Mash Hopping with Cascade Hops, Cosmic punch yeast",
      img: "https://drive.google.com/uc?id=1NTwL-ZvXSl-MyK4_Mlg7RglgKNbwp-JA\r",
      rating: 0,
    },
    {
      name: "Anchors Aweigh",
      type: "Imperial Stout",
      ID: 10,
      IBU: 43,
      ABV: 9.5,
      description:
        "This big beer is perfect for sipping anytime you want a big, bold beer that’ll warm you from the inside out. Nearly black in color, the dark chocolate and roasted malts accent the complexity of the fruit to make our Anchors Aweigh Imperial Stout a beer you’ll never forget.",
      hops: "Chinook, Centennial",
      malts:
        "2-Row, Carmel 110, Chocolate, Roasted Barley, Black Patten, Flaked Rye, Flaked Oats, Flaked Wheat",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=1Puk085YTcx7sY4fi-YJuaSCTYNQCSBcj\r",
      rating: 0,
    },
    {
      name: "Australian Pineapple Farmer",
      type: "DDHIPA",
      ID: 12,
      IBU: 40,
      ABV: 6.099999904632568,
      description:
        '"This Double Dry Hopped New England- style IPA is all about hops from our mates in the land down under. Using a blend of Australian Vic\'s Secret, Azacca & Citra hops, it erupts with a pineapple & citrus aroma. So whether you drink it straight from the tinny or pair it with some shrimp on the barbie, this beer is one you will yabber (talk a lot) about for days.\n"\t\t\t\t\t\t\t',
      hops: "Vic's Secret, Azacca, Citra",
      malts: "2-Row, White Wheat, Caramel, Munich, Flaked Wheat",
      good_stuff: "Double Dry Hopped",
      img: "https://drive.google.com/uc?id=1bBj7un0czLC5j7bXhVBEH34euWF_Gmk8\r",
      rating: 0,
    },
    {
      name: "Banana Milkshake",
      type: "IPA",
      ID: 13,
      IBU: 36,
      ABV: 5.5,
      description:
        '"Packed full of banana flavor and completely irresistible, this Banana Milkshake IPA is a refreshing adult twist on an age old favorite. Using a specialty banana yeast, vanilla beans and three different hops, we recreated a beverage that will instantly transport you to a carefree place and time. Sip away...\n  "\t\t\t\t\t\t\t',
      hops: "Cascade, Mosaic, Moteuka",
      malts: "2-Row, White Wheat, Dextrine",
      good_stuff:
        "Lactose, Dextrose, Vanillia Beans, DDH, Specialty Banana Yeast",
      img: "https://drive.google.com/uc?id=1FbBdeZATbu2eCn1BBWas_gXBHQZ89EvM\r",
      rating: 0,
    },
    {
      name: "Barrel Aged Double Stuffed Oreo Speedwagon",
      type: "Milk Stout",
      ID: 14,
      IBU: 32,
      ABV: 10.699999809265137,
      description:
        "We already know you can't fight the feeling of sweet chocolate with a hint of vanilla in our silky smooth chocolate vanilla milk stout. But now we found a way to make it even more irresistible - we aged it in four roses Kentucky straight bourbon barrels to surely leave you warm on one lonely night. We're positive you'll keep loving it and won't want to let it go!",
      hops: "",
      malts: "",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=1tYE8zxdldlNBhm9HA-qYTfMfwujurlWG\r",
      rating: 0,
    },
    {
      name: "Barrel Aged One Tough Cookie",
      type: "Imperial Oatmeal Stout",
      ID: 15,
      IBU: 22,
      ABV: 8.699999809265137,
      description:
        "Take fresh Cookies Etc. Monster cookies, add them to the mash, and load it with more oats than a quaker farm. This bold, rich oatmeal stout is full of flavors. Caramel, chocolate, brown sugar, peanut butter, we've got it. Then to finish it off, we aged it in heaven hill bourbon barrels! Who says you can't have it all? And at 8.7%, this is one tough cookie.  ",
      hops: "",
      malts: "",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=18G69350QhuexekrhMB-e_bKhCv7GGbro\r",
      rating: 0,
    },
    {
      name: "Heaven Hill Barrel Aged Baltic Storm\t\t\t",
      type: "Porter",
      ID: 17,
      IBU: 30,
      ABV: 11,
      description:
        "A style to keep mariners warm while crossing the Baltic Sea, this sweet yet robust Porter leads with the dark fruits of dates & plums, followed by the velvety smooth tastes of espresso, dark chocolate & hazelnut. Aged for two years in French Oak Merlot barrels, this porter is sure to keep any traveler warm on their voyage. \t\t\t\t\t\t\t",
      hops: "Fuggles, Norther Brewer, Columbus, Hallertauer Hersbrucker",
      malts:
        "2 Row, Munich, Maris Otter, Cara Munich, Carafa II, White Wheat, Dextrine, Black Patent, Chocolate",
      good_stuff: "Aged for over 2 years in a Heaven Hill Bourbon Barrel",
      img: "https://drive.google.com/uc?id=1fGoL2QXfOEcmF_4s7EceSIfTZBn-AQh9\r",
      rating: 0,
    },
    {
      name: "Merlot Barrel Aged Baltic Storm\t\t\t",
      type: "Porter",
      ID: 18,
      IBU: 30,
      ABV: 11,
      description:
        "A style to keep mariners warm while crossing the Baltic Sea, this sweet yet robust Porter leads with the dark fruits of dates & plums, followed by the velvety smooth tastes of espresso, dark chocolate & hazelnut. Aged for two years in French Oak Merlot barrels, this porter is sure to keep any traveler warm on their voyage. \t\t\t\t\t\t\t",
      hops: "Fuggles, Norther Brewer, Columbus, Hallertauer Hersbrucker",
      malts:
        "2 Row, Munich, Maris Otter, Cara Munich, Carafa II, White Wheat, Dextrine, Black Patent, Chocolate",
      good_stuff: "Aged for over 2 years in a Heaven Hill Bourbon Barrel",
      img: "https://drive.google.com/uc?id=1fGoL2QXfOEcmF_4s7EceSIfTZBn-AQh9\r",
      rating: 0,
    },
    {
      name: "Rum Barrel aged Imperial Funfetti\t\t\t",
      type: "Imperial Stout",
      ID: 19,
      IBU: 20,
      ABV: 10.5,
      description:
        "This American Cream Ale was brewed with over a pound of rainbow sprinkles, flavors of sweet malts and vanilla, before aging in a Cruzan Rum barrel for nearly a year. Its smell and taste have a slight oak undertone, leaving it sweet and balanced with notes of Carribean Rum. Who says you can’t have your cake and drink it too?\t\t\t\t\t\t\t",
      hops: "Liberty",
      malts: "2 row, Wheat,",
      good_stuff: "Lactose",
      img: "https://drive.google.com/uc?id=1SAGdOG2r9r9FJsMe2Rfl5Jcwuqa7rSUE\r",
      rating: 0,
    },
    {
      name: "Beach Bod IPA",
      type: "IPA",
      ID: 20,
      IBU: 35,
      ABV: 4.199999809265137,
      description:
        "Whether you’re catching waves, or soaking up the rays, you’ll be reaching for this bod all day. Boasting only 120 calories, you can keep doing those 12 oz. curls. This fruity low cal Recreational IPA is pleasure on your lips and not on your hips. So go ahead and tilt without all the guilt. Abs not included.\t\t\t\t\t\t\t",
      hops: "Mosaic, Citra, Amarillo, Kohita",
      malts: "2-Row, Golden Promise, Dextrine",
      good_stuff: "Low Cal. IPA; Large West Coast Style Single Dry Hop",
      img: "https://drive.google.com/uc?id=1p3shUPq4U4DSHCosV60zYaCsvjrVz9gX\r",
      rating: 0,
    },
    {
      name: "Bearfoot Robust Porter",
      type: "Porter",
      ID: 21,
      IBU: 58,
      ABV: 6.099999904632568,
      description:
        "Here's a beer roaring with character for those who enjoy a malty full-bodied beer.  It pours a dark brown, nearly black, with a cappuccino colored thick, frothy head.  Bear down and enjoy its candy sweet aromas of molasses, roasted marshmallows, toffee and fudge.  Savor its robust flavor that finishes with notes of chocolate and roasted nuts.  It's easy to drink and features a great aftertaste something you can really wrap your paws around.\t\t\t\t\t\t\t",
      hops: "Norther Brewer, English Fuggles",
      malts: "2 row, Maris Otter, Chocolate, carmel, special B, Black Patent",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=11IvosoOrKCOoS1oDn-QfAYARZIEeHudV\r",
      rating: 0,
    },
    {
      name: "Big Bang Sweet Stout",
      type: "Sweet Stout",
      ID: 22,
      IBU: 36,
      ABV: 7.099999904632568,
      description:
        '"Just as the universe began, this beer started with a single ingredient and before we knew it – bang! An explosion of flavors happened. This Sweet Stout is the amazing collision of vanilla, coconut, salted caramel Macchiato coffee, chocolate and habanero peppers. All combined with 8 specialty malts – you can’t top this cosmic creation.\n"\t\t\t\t\t\t\t',
      hops: "Chinook, Centennial",
      malts:
        "2-Row, Caramel 110, Chocolate, Roasted Barley, Black Patten, Flaked Rye, Flaked Oats, Flaked Wheat",
      good_stuff:
        "Coconut, Vanilla, Salted Caramel Macchiato Coffee, Lactose, and Habanero Peppers",
      img: "https://drive.google.com/uc?id=1pIs5FTIfGjscuCs9ypYJkYzg_IBKDP1_\r",
      rating: 0,
    },
    {
      name: "Billy Goat Doppelbock",
      type: "Dobbelbock",
      ID: 23,
      IBU: 40,
      ABV: 7.900000095367432,
      description:
        "Literally meaning ‘double beer’, a Doppelbock is one of Germany’s biggest beers, and our Billy Goat is no exception. Its deep, rich malty character with a balanced hop profile will warm your heart on a cold winter night. But as ‘bock’ (which means billy goat) might suggest, this beer has a big kick. It contains so much malty goodness, you’ll be bleating from the mountain tops in no time!\t\t\t\t\t\t\t",
      hops: "Tettnang, Hallertau Middlefru",
      malts: "pilsner, munich, cara munich",
      good_stuff: "Lagered for 6 weeks",
      img: "https://drive.google.com/uc?id=1R4g4WI8pM33GliwOhwa6hkYIf954FmW_\r",
      rating: 0,
    },
    {
      name: "Billy's Reef Black Lager",
      type: "Black Lager",
      ID: 24,
      IBU: 23,
      ABV: 5.5,
      description:
        "Just like the gold deposits of a black reef formation in the sea, this black lager is smooth with undertows of light carmel & toffee.  It finishes crisp & clean without any bitterness, allowing you to dive right back in for a second sip of its sweet complexities & malt depth.\t\t\t\t\t\t\t",
      hops: "",
      malts: "",
      good_stuff: "",
      img: "https://drive.google.com/uc?id=1QZf4pSgDm7Y1yf8t2aWouanofGMw5yv0\r",
      rating: 0,
    },
    {
      name: "Black Spruce IPA",
      type: "IPA",
      ID: 25,
      IBU: 52,
      ABV: 6.699999809265137,
      description:
        "We didn’t skimp on flavor when we brewed this Black Spruce IPA. A number of flavors are often  associated with spruce-flavored beers, ranging from floral, citrus, and fruity, to a more cola-like pine flavor. We took that diversity in flavor and mixed it with just the right malt blend to bring you the taste you want, with a finish that will make you come back for more. \t\t\t\t\t\t\t",
      hops: "Simcoe",
      malts: "2-Row, Caramel, Carapils",
      good_stuff: "Black Spruce Tincture",
      img: "https://drive.google.com/uc?id=1kZC30s2PTUAIFUsxSV13uKzJbOgngU9n\r",
      rating: 0,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeersTesting;
