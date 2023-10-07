import React from "react";

function Home() {
  return (
    <div className=" bg-[url('https://wallpapers.com/images/hd/planet-in-a-colorful-outer-space-1e4f2o2mmscz9h1b.webp')]">
     <div className="flex items-center justify-center flex-col h-screen w-full bg-[#0A1128]/60">
      <h1 className="font-bold text-[100px] text-white">Spac<span className="text-amber-300">Explore</span></h1>
      <h3 className="text-white text-3xl pb-5">"Charting New Horizons,Together"</h3>
      <nav>
        <ul className="flex gap-3 text-[20px] cursor-pointer">
          <li className="hover:ring-offset-2 hover:ring-2 rounded-sm px-2 text-white">
            Tours
          </li>
          <li className="hover:ring-offset-2 hover:ring-2 rounded-sm px-2 text-white">
            Services
          </li>
          <li className="hover:ring-offset-2 hover:ring-2 rounded-sm px-2 text-white">
            Testimonials
          </li>
          <li className="hover:ring-offset-2 hover:ring-2 rounded-sm px-2 text-white">
            Contact
          </li>
        </ul>
      </nav>
     </div>
    </div>
  );
}

export default Home;
