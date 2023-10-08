import React from "react";

function Tours() {
  return (
    <div className=" px-[100px]">
      <div className="w-full text-center text-[50px] font-Pbold">Tours</div>
      <div className="flex items-center justify-center w-full">
        <TourSite />
      </div>
    </div>
  );
}

const planets = [
  {
    id: 1,
    name: "Mars",
    href: "#",
    imageSrc:
      "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1140x641.jpg",
    imageAlt: "Mars a red planets",
    description:"Mars is the second smallest planet in the Solar System - only Mercury is smaller."
  },
  {
    id:2,
    name:"Jupiter",
    imageSrc:"https://api.time.com/wp-content/uploads/2022/09/jupiter-china-spacecraft.jpg?quality=85&w=800",
    imageAlt:"Jupiter 101",
    description:"Jupiter is, by far, the largest planet in the solar system - more than twice as massive as all the other planets combined."
  },
  {
    id:3,
    name:"Neptune",
    imageSrc:"https://wallpapers.com/images/high/neptune-on-black-533l3zznbxf1wdty.webp",
    imageAlt:"Neptune",
    description:"Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System.",
  }
];

function TourSite() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {planets.map((planet) => (
            <div key={planet.id} className="group relative shadow-xl p-10 hover-2 ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={planet.imageSrc}
                  alt={planet.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-center w-full">
                  <h3 className="text-lg font-semibold text-gray-700 ">
                    <a href={planet.href} className="flex flex-col gap-3">
                      <span className="font-Psemi text-[30px] text-black">
                      {planet.name}
                      </span>
                      <p className="font-Nlight text-[15px]">{planet.description}</p>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
