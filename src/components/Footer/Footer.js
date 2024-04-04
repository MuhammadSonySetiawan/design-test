import React from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import DataMedsos from "./DataFooter";

function Footer() {
  return (
    <div className="text-white w-full p-5">
      <div className="flex justify-between flex-col lg:flex-row gap-14">
        <div className="felx-1 ">
          <Image
            className="hidden lg:block"
            src="/asset/images/logo-navbar.svg"
            alt="Logo"
            width={100}
            height={58}
          />
          <p className="text-base w-[30ch] py-5 font-light">
            Hyge is a Singapore based company that provides customisation and
            specialisation in website design, development, as well as mobile app
            development.
          </p>
          <p className="text-base flex items-center gap-5 font-medium">
            <MapPin size={28} /> North Point Bizhub, Singapore.
          </p>
        </div>

        <div className="felx-1 font-light">
          <div className="leading-loose">
            <p>Email Us:</p>
            <p>michael@hygeworks.com</p>
          </div>
          <div className="mt-6 leading-loose">
            <p>Contact Us:</p>
            <p>+65 8533 3575</p>
          </div>
        </div>

        {/* Footer Medsos */}
        <div className="felx-1">
        {DataMedsos.map((item, index) => (
          <Link
          key={index}
            href={""}
            className="flex justify-between items-center border-b-2 pt-2 pb-5 w-56">
            <p>{item}</p>
            <ArrowUpRight
              size={22}
              className="transform active:scale-75 transition-transform"
            />
          </Link>
        ))}
        </div>

      </div>
      <div className="flex w-full justify-between py-10 text-xs">
        <p>Copyright © 2023 Hyge, Pte. Ltd.</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
