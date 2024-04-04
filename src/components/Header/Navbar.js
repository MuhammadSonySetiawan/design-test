"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import dataNavbar from './dataNavbar'
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-100 p-5 flex justify-between items-center">
      {/* title navbar */}
      <div>
        <Image
          src="/asset/images/logo-navbar.svg"
          width={80}
          height={100}
          alt="Logo"
        />
      </div>

      {/* menu navbar */}
      <ul className="md:flex justify-center text-xs gap-6 bg-[#d1e1ff29] px-5 py-3 rounded-3xl shadow-md text-white hidden  ">
        {dataNavbar?.map((item, key) => (
          <li key={key}>
            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              {item?.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Btn right */}
      <div className="transition ease-in-out delay-150 bg-[#5459688d] hover:bg-[#1a68fe] text-xs rounded-3xl py-3 px-5 text-white  shadow-sm hover:shadow md:block hidden">
        <Link
          href="#Offer"
        >
          Let's talk
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
