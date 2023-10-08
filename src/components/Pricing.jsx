import React from "react";

function Pricing() {
  const pricing = [
    {
      type: "Economy Class",
      price: "$1000/-",
      features: [
        "free in-flight food",
        "Basic Accommodations",
        "Essential Amenities",
        "Affordable Pricing",
      ],
    },
    {
      type: "Business Class",
      price: "$2000/-",
      features: [
        "Panoramic Views",
        "Gourmet Dining Experience",
        "inperson-translation",
        "Comfortable Accommodations",
      ],
    },
    {
      type: "First Class",
      price: "$4000/-",
      features: [
        "Spacious and luxurious seating",
        "Seamless cash exchange",
        "Private space crafts",
        "Personal assistance",
        "Seamless service",
      ],
    },
  ];
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 h-screen py-5">
        <div className="text-[5rem] px-[100px] w-full text-center text-white font-Pbold">
          Packages
        </div>
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            {pricing.map((price) => (
              <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700 ">
                <div className="flex-shrink-0">
                  <h2 className="inline-flex items-center justify-center px-2 font-Psemi tracking-tight text-blue-400 uppercase rounded-lg text-3xl">
                    {price.type}
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <span className="pt-2 text-4xl font-Nregular text-gray-800 uppercase dark:text-gray-100">
                    {price.price}
                  </span>
                </div>
                <ul className="flex-1 space-y-4">
                  {price.features.map((feature) => (
                    <li className="text-gray-500 dark:text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center justify-center px-4 py-2 font-Psemi text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
