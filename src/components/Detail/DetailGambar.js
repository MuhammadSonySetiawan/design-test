"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function DetailGambar(props) {
  const result = props;

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <div data-aos="fade-up" className="py-5 px-2 md:px-24 ">
      <Link
        href="/"
        className="text-white flex justify-start items-center text-sm md:text-lg gap-5 md:gap-5 mb-3 transition-all duration-300 hover:text-[#1a68fe]"
      >
        <ArrowLeft />
        <p>Go Back</p>
      </Link>
      <div className="">
        <div className=" w-full h-full bg-black"></div>
        <Image
          className="rounded-xl"
          src={result.img}
          width={1800}
          height={1}
          alt="Logo"
        />
      </div>

      <div className="flex gap-5 md:gap-20 mt-10 flex-col md:flex-row">
        <h2 className="text-white text-base md:text-2xl">Our role</h2>
        <div className="flex gap-5 text-sm md:text-base">
          {result.category.map((item, index) => (
            <div
              key={index}
              className="py-1 px-2 border rounded-2xl border-[#1f79d9] bg-gradient-to-r from-[#1FA4D9] from-10 via-[#096EB1] via-10% to-[#026BEC] inline-block text-transparent bg-clip-text transition-all duration-300 hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailGambar;
