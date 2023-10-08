import React from "react";
import { TypeAnimation } from "react-type-animation";
 
function Home() {
  return (
    <div className=" bg-[url('https://wallpapers.com/images/hd/planet-in-a-colorful-outer-space-1e4f2o2mmscz9h1b.webp')]">
      <div className="flex items-center justify-center flex-col h-screen w-full bg-[#0A1128]/60 gap-3">
        <h1 className="font-Pbold text-[100px] text-white">
          Spac<span className="text-amber-300">Xplore</span>
        </h1>
        <h3 className="text-white font-Nitalics text-xl pb-5">
          <TypeAnimation
            sequence={[
              "Where Dreams Reach for the Stars",
              4500, 
              "Discover the Universe with Us",
              4500,
              "Adventures Beyond Earth",
              4500,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "1.5em",fontStyle: 'italic', display: "inline-block" }}
            repeat={Infinity}
          />
        </h3>
        <nav>
          <ul className="flex font-Nlight gap-5 text-[20px] cursor-pointer">
            <li className="navitem"><a href="#1">Tours</a></li>
            <li className="navitem"><a href="#2">Services</a></li>
            <li className="navitem"><a href="#3">Testimonials</a></li>
            <li className="navitem"><a href="#4">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;