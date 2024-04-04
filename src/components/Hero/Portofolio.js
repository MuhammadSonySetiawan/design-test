"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dataPortofolio from "./dataPortofolio";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Portofolio() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <div className="my-11 w-auto md:m-28 flex justify-center gap-9 flex-wrap">
      {dataPortofolio.map((item, index) => (
        <Link
          href={`/detail/${item.id}`}
          data-aos="fade-up"
          key={index}
          className="rounded-xl border border-[#5459688d] bg-gradient-to-r from-[#3974DC00] from-10 via-[#026BEC1A] via-10% to-[#1FA4D91A] to-10% md:w-[28rem]"
        >
          <div className="m-2 mb-5">
            <Image
              className="rounded-xl w-80 md:w-fit h-auto"
              src={item.img}
              width={470}
              height={500}
              alt="Logo"
            />
          </div>
          <div className="text-slate-200 rounded-xl border border-[#5459688d] p-2 m-2">
            <div className="flex justify-start my-3 text-[11px] md:text-sm gap-3 ">
              {item?.category?.map((item, index) => (
                <div
                  key={index}
                  className="py-1 px-2 border rounded-2xl border-[#1f79d9] bg-gradient-to-r from-[#1FA4D9] from-10 via-[#096EB1] via-10% to-[#026BEC] inline-block text-transparent bg-clip-text "
                >
                  {item}
                </div>
              ))}
            </div>

            <h2 className="font-medium">{item.name}</h2>
            <p className="w-[36ch] text-[11px] md:text-sm line-clamp-3 mt-2 font-light">
              {item.desc}
            </p>
          </div>
        </Link>
      ))}

      <div className="md:absolute left-44 bottom-[95.5rem] bg-[#121c2e] px-2">
        <div className="font-light text-white bg-[#736969e6] transition-all duration-300 hover:bg-[#1a68fe] rounded-3xl py-2 px-3 text-xs">
          <a href="">Load More</a>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
