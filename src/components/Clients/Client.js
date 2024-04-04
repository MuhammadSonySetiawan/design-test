"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import dataClients from "./dataClients";

function Client() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <div data-aos="fade-up" className="static p-5 md:p-36 ">
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        Our{" "}
        <span className="bg-gradient-to-r from-[rgb(31,164,217)] via-[rgb(9,110,177)] to-[rgb(57,116,220)] inline-block text-transparent bg-clip-text">
          Clients
        </span>
      </h1>
      <p className="text-white pt-5 pb-9">
        Here are just few of the clients we’ve had the privilege to serve:
      </p>

      {/* CLients */}
      <div className="flex flex-wrap justify-start items-center gap-3 ">
        {dataClients?.map((item, index) => (
          <div
            key={index}
            className="border border-[#5459688d] rounded-lg py-2 px-3 h-16"
          >
            <Image src={item} alt="Client Logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
