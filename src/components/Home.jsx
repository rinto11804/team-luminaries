import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#0A1128] ">
      <h1 className="font-bold text-[100px] text-white">Alfrin Poulose</h1>
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
  );
}

export default Home;
