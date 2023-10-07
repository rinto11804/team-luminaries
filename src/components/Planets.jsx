import React from "react";
import adventure from "../assets/180716_AdventureSports_Feature.jpg";
import place from "../assets/jupiter.jpeg";

const array1 = [
  {
    img: place ,
    title: "lorem",
    description: "lorem .pfknwoejfvwoiefhbvoihc02yhdbc2yev8v",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "jwnfvp2eurg2[9uebpqub2ubr-fub2pr",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "oenfvp2ubrg-183brv[ou2be-r9g4",
    hash: ["place", "life", "joy"],
  },
];
const array2 = [
  {
    img: place ,
    title: "lorem",
    description: "lorem .pfknwoejfvwoiefhbvoihc02yhdbc2yev8v",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "jwnfvp2eurg2[9uebpqub2ubr-fub2pr",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "oenfvp2ubrg-183brv[ou2be-r9g4",
    hash: ["place", "life", "joy"],
  },
];
const array3 = [
  {
    img: place ,
    title: "lorem",
    description: "lorem .pfknwoejfvwoiefhbvoihc02yhdbc2yev8v",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "jwnfvp2eurg2[9uebpqub2ubr-fub2pr",
    hash: ["place", "life", "joy"],
  },
  {
    img: place ,
    title: "lorem",
    description: "oenfvp2ubrg-183brv[ou2be-r9g4",
    hash: ["place", "life", "joy"],
  },
];
function Planets() {
  return (
    <div>
      <div className="flex gap-2 bg-black h-screen text-white">
        <div className="w-1/2 flex justify-center flex-col gap-5">
          <span className="text-[70px] font-medium w-[500px] f">
            Place name
          </span>
          <p className="w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            adipisci consectetur necessitatibus tenetur, quis quidem aspernatur
            at dolores eveniet recusandae. Aspernatur nesciunt, sint eum
            cupiditate repellendus cumque. Nulla, dolorem quia?
          </p>
          <ul className="text-[25px]">
            <li>
              <span className="font-light">Temperature : </span>
              <span className="font-light">53.3</span>
            </li>
            <li>
              <span className="font-light">Highest Wind Speed : </span>
              <span className="font-light">900MPH</span>
            </li>
            <li>
              <span className="font-light">Water : </span>
              <span className="font-light">Yep!</span>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex items-center justify-center ">
          <img alt="place image" src={place} />
        </div>
      </div>
      <h3 className="text-[50px] font-medium">Places</h3>
      <div className="flex gap-2">
        <div>
          <div className="w-[500px]">
            <img alt="place image" src={place} />
          </div>
          <span className="text-[35px] font-medium">Place name</span>
          <p className="w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            adipisci consectetur necessitatibus tenetur, quis quidem aspernatur
            at dolores eveniet recusandae. Aspernatur nesciunt, sint eum
            cupiditate repellendus cumque. Nulla, dolorem quia?
          </p>
        </div>
        <div>
          <span className="text-[35px] font-medium">Activites</span>
          <div className="flex gap-2 items-center justify-center">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img class="rounded-t-lg" src={adventure} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
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
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img class="rounded-t-lg" src={adventure} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
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
          </div>
        </div>
      </div>
      <Must title="Must Watch" array={array1} />
      <Must title="Must Try" array={array2} />
      <Must title="Must Tribes" array={array3} />
    </div>
  );
}

function Must({ title, array }) {
    return (
      <div>
        <span className="text-[35px] font-medium w-full text-center">{title}</span>
        <div className="flex gap-4 items-center justify-center">
          {array.map((items, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={items.img} alt="Sunset in the mountains" />
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
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default Planets;
