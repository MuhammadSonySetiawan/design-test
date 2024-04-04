import React from 'react'
import Portofolio from './Portofolio';

function Hero() {
  
  return (
    <div className="px-5">
      <div data-aos="fade-up" className="relative ">
        <div className="hidden md:block p-24 border-r-2 border-indigo-500 border-br-lg"></div>

        <h1
          className="bg-[#0c1b38] my-3 text-3xl md:text-5xl font-bold text-white 
         md:absolute top-40 left-24"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[rgb(31,164,217)] via-[rgb(9,110,177)] to-[rgb(57,116,220)] inline-block text-transparent bg-clip-text">
            Portfolio
          </span>
        </h1>
      </div>

      <div
        className="p-0 md:p-24 rounded-lg border-y-0 md:border-y-2 
      border-l-0 md:border-l-2 border-indigo-600 "
      >
        <p className="w-[32ch] md:w-[46ch]  text-white text-sm">
          As your digital partner, we collaborate with you to drive innovation,
          stay ahead of the curve, and deliver real impact for your business.
        </p>
      </div>

      {/* Menu */}
      <div className="m-5 overflow-x-scroll md:overflow-x-hidden w-auto md:absolute bg-[#0c1b38] text-white ps-2 pe-5 left-40 top-[29rem] text-xs flex gap-3 ">
        <button className="py-1 px-5 bg-[#1A68FE] rounded-3xl w-[90%]">
          All
        </button>
        <button className="py-2 px-5 bg-[#5459688d] rounded-3xl transition-all duration-300 hover:bg-[#1a68fe]">
          Web Development
        </button>
        <button className="py-2 px-5 bg-[#5459688d] rounded-3xl transition-all duration-300 hover:bg-[#1a68fe]">
          App Development
        </button>
        <button className="py-2 px-5 bg-[#5459688d] rounded-3xl transition-all duration-300 hover:bg-[#1a68fe]">
          UI Design
        </button>
      </div>

      {/* Portoflio */}
      <div className="border-0 md:border-y-2 md:border-r-2 border-indigo-600 rounded-lg">
        <Portofolio />
      </div>
    </div>
  );
}

export default Hero