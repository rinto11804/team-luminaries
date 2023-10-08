import React from "react";
import Mars_race from "../assets/images/Mars Rover Races.webp";
import Low_gratity from "../assets/images/Low-Gravity Athletics.webp";
import place from "../assets/images/mars.webp";
import Olympus from "../assets/images/Olympus.webp";
import Gale from "../assets/images/Gale Crater.webp";
import Polar from "../assets/images/Polar.webp";
import Valles from "../assets/images/Valles Marineris.webp";
import Martian from "../assets/images/Martian Tacos.webp";
import Algae from "../assets/images/AlgaeBased.webp";
import Space from "../assets/images/SpaceFarmed.webp";
import Vallesian from "../assets/images/Vallesian Rock Dwellers.webp";
import Canyon from "../assets/images/Canyon Nomads of Marineris.webp";
import Aerial from "../assets/images/Aerial.webp";
const array1 = [
  {
    img: Olympus,
    title: "Olympus Mons",
    description:
      "Discover the Martian marvel: Olympus Mons. Join us on a journey to the largest volcano in the solar system. Witness breathtaking vistas and explore the mysteries of Mars like never before. Book your Olympus Mons expedition now!",
    hash: ["place", "life", "joy"],
  },
  {
    img: Gale,
    title: "Gale Crater",
    description:
      "Experience the wonders of Gale Crater on Mars! Be part of an exclusive expedition to this ancient Martian crater, home to the Curiosity Rover's discoveries. Dive into the mysteries of Mars with us. Book your Gale Crater adventure today!",
    hash: ["place", "life", "joy"],
  },
  {
    img: Polar,
    title: "Polar Ice Caps",
    description:
      "Take a trip through Mars' polar ice cap and take in the frozen beauty of the Red Planet. Join our campaign and explore these cool spots. Reserve your seat for an unforgettable polar experience today!",
    hash: ["place", "life", "joy"],
  },
];
const array2 = [
  {
    img: Martian,
    title: "Martian Tacos",
    description:
      " Imagine savoring the flavors of Mars with our Martian Tacos. Featuring locally sourced Martian grains for taco shells, protein-rich, cultured Martian beans, and fresh vegetables grown right on the Red Planet, these tacos are a taste of the future of space cuisine. They provide essential nutrients while connecting astronauts to the unique environment of Mars.",
    hash: ["place", "life", "joy"],
  },
  {
    img: Algae,
    title: "Algae-Based Martian Gelato",
    description:
      "Experience the otherworldly delight of Algae-Based Martian Gelato. Made from algae cultivated in space, our gelato offers a creamy, nutrient-rich dessert with flavors inspired by Mars, such as 'Martian Mint' and 'Red Dust Raspberry.' It's a sweet treat that's truly out of this world.",
    hash: ["place", "life", "joy"],
  },
  {
    img: Space,
    title: "Space-Farmed Insects",
    description:
      "Sustainable and protein-packed, our Space-Farmed Insects are a future-forward food source for space travelers. Whether in the form of energy bars with cricket protein or seasoned mealworm snacks, these insect-based options provide a unique culinary experience while ensuring astronauts have the essential nutrients they need for their journey to Valles Marineris.",
    hash: ["place", "life", "joy"],
  },
];
const array3 = [
  {
    img: Vallesian,
    title: "Vallesian Rock Dwellers",
    description:
      "Discover the enigmatic Vallesian Rock Dwellers, a remarkable alien species that has made Valles Marineris their home. These bioluminescent beings have mastered the art of living within Martian caves and rock formations, crafting stunning artworks and tools from the Martian rock. Explore their underground world and witness their unique way of life.",
    hash: [],
  },
  {
    img: Canyon,
    title: "Canyon Nomads of Marineris",
    description:
      "Encounter the resilient Canyon Nomads of Marineris, a nomadic alien community that traverses the winding canyons of Valles Marineris in biodome-covered mobile habitats. Learn about their sustainable farming techniques, resourcefulness, and harmonious coexistence with the Martian landscape as they roam the Martian wilderness.",
    hash: [],
  },
  {
    img: Aerial,
    title: "Aerial Selenites",
    description:
      "Ascend to the skies and meet the ethereal Aerial Selenites, a floating alien race that calls Valles Marineris home. Marvel at their cities suspended high above the Martian surface, powered by advanced anti-gravitational technology. Discover their unique adaptations for gliding through the thin Martian atmosphere and their role as pioneers in energy production and diplomacy on Mars.",
    hash: [],
  },
];

const activities = [
  {
    img: Mars_race,
    title: "Mars Rover Races",
    description:
      "Races using Mars rovers designed for agility and speed, navigating the Martian terrain.Unleash your inner explorer with Mars Rover Races. Take the wheel of your own rover and compete on the Red Planet's rugged terrain. Join us for the ultimate Martian adventure!",
  },
  {
    img: Low_gratity,
    title: "Low-Gravity Athletics",
    description:
      "Elevate your athleticism on Mars with adapted versions of familiar sports! Experience the thrill of long jumps, high jumps, and discus throws in the lower gravity of the Red Planet. Join us for a unique sporting adventure beyond Earth!",
  },
];
function Planets() {
  return (
    <div>
      <div className="flex gap-2 bg-black  text-white h-screen">
        <div className="w-1/2 flex justify-center flex-col gap-5 px-[100px]">
          <span className="text-[70px] font-Nmedium w-[500px] f">Mars</span>
          <p className="w-[500px]">
            Mars is the fourth planet from the Sun, known for its red color.
            It's rocky, has a thin atmosphere, and is a key target for potential
            future human missions.
          </p>
          <ul className="text-[25px] flex flex-col gap-2">
            <li>
              <span className="font-Nregular">Temperature : </span>
              <span className="font-Nregular">80°F</span>
            </li>
            <li>
              <span className="font-Nregular">Highest Wind Speed : </span>
              <span className="font-Nregular">60MPH</span>
            </li>
            <li>
              <span className="font-Nregular">Water : </span>
              <span className="font-Nregular">Yep!</span>
            </li>
            <li className="pt-5">
              <button className=" text-lg bg-transparent hover:bg-[#FFD700] text-white font-PSemi hover:text-[white] py-1 px-3 border border-grey hover:border-transparent rounded">
                Book Now!
              </button>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex items-center justify-center  ">
          <img alt="place image " src={place} />
        </div>
      </div>
      <h3 className="text-[50px] font-Nmedium px-[100px] py-5">Explore Mars' Grand Canyon</h3>
      <div className="flex gap-5 px-[100px]">
        <div className="px-5">
          <div className="w-[500px]">
            <img alt="place image" src={Valles} />
          </div>
          <span className="text-[35px] font-Nmedium">Valles Marineris</span>
          <p className="w-[500px]">
            Valles Marineris on Mars, often called the "Grand Canyon of Mars,"
            is an awe-inspiring geological marvel, spanning over 4,000
            kilometers in length and making it the largest canyon in our solar
            system. With towering cliffs, rugged terrain, and captivating
            valleys, it offers a visually stunning and surreal experience.
            Exploring Valles Marineris unveils the mysteries of Martian geology
            and showcases the vastness of our universe. Don't miss the chance to
            be part of this extraordinary Martian adventure - book your journey
            to Valles Marineris today!
          </p>
        </div>
        <div>
          <span className="text-[35px] font-Nmedium">Extreme Mars Sports</span>
          <div className="flex gap-2 items-center justify-center">
            {activities.map((act, i) => (
              <div
                key={i}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              >
                <a href="#">
                  <img className="rounded-t-lg" src={act.img} alt="adventure" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {act.title}
                    </h5>
                  </a>
                  <p className="mb-3 w-full font-Nlight text-gray-700 dark:text-gray-400">
                    {act.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-Nmedium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Must title="Explore the Breathtaking Landscapes of Mars' Grand Canyon" array={array1} />
      <Must title="Exquisite Space Cuisine for Martian Adventurers" array={array2} />
      <Must title="Discover Martian Enclaves" array={array3} />
    </div>
  );
}

function Must({ title, array }) {
  return (
    <div className="px-[100px] py-5 ">
      <div className="text-[35px] font-Nmedium p-2">{title}</div>
      <div className="flex gap-4 items-baseline justify-center">
        {array.map((items, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={items.img}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{items.title}</div>
              <p className="text-gray-700 text-base">{items.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {items.hash.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="flex items-center px-3 py-3 text-sm font-Nmedium text-center text-white bg-blue-700 rounded-bl-lg rounded-br-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planets;
