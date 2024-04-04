import React from 'react'

function Offer() {
  return (
    <div
      id="Offer"
      className="flex flex-col justify-center items-center text-white w-full mt-20 mb-32 md:mb-56 "
    >
      <div className="text-3xl md:text-5xl font-bold md:leading-loose text-center">
        <p className="">We can help to improve your business</p>
        <p className="bg-gradient-to-r from-[rgb(31,164,217)] via-[rgb(9,110,177)] to-[rgb(57,116,220)] inline-block text-transparent bg-clip-text">
          by upgrading your technology!
        </p>
      </div>

      <p className="my-12 text-sm md:text-xl text-[#ffffff90] ">
        Schedule a free 30 mins call with us
      </p>

      <button className="text-sm md:text-base py-2 px-5 bg-blue-600 transition-all duration-300 hover:bg-white hover:text-black rounded-3xl">
        Book an appointment
      </button>
     
    </div>
  );
}

export default Offer