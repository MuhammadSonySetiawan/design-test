"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DataStack from "./DataStack";
import Image from "next/image";

function DetailDesc(props) {
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
    <div className="text-white py-24 relative">
      <h1
        data-aos="fade-up"
        className="md:absolute text-[2rem] font-semi-bold top-16 left-20 bg-[#0e1b35] px-2"
      >
        {result.name}
      </h1>

      <div className="text-base border-0 md:border-l-2 md:border-t-2 border-[#444e61] p-3 md:p-20 font-light">
        <p>
          Through Levare website, we aim to share the joy of authentic wine
          enjoyment by offering innovative products that enhance the tasting
          experience, provide valuable resources and knowledge, and foster a
          vibrant community of wine lovers.
        </p>

        <div className="mt-10 ">
          <h3 className="text-2xl font-medium mb-5">Tech stack</h3>
          <div
            data-aos="fade-up"
            className="border flex-wrap border-[#444e61] rounded-2xl w-full flex justify-between "
          >
            {DataStack.map((item, index) => (
              <div key={index} className=" m-1">
                <Image
                  src={item}
                  alt="Stack skill"
                  height={200}
                  width={250}
                  className="object-fill md:block hidden"
                />
                <Image
                  src={item}
                  alt="Stack skill"
                  height={200}
                  width={166}
                  className="object-fill block md:hidden"
                />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button className="bg-[#1a68fe] py-3 px-4 rounded-3xl text-xs mt-20">
              Visit Site
            </button>
          </div>

          {/* list */}
          <div className="w-full border-b-2 my-20 border-[#444e61]"></div>

          {/* desc */}

          <div data-aos="fade-up">
            <h3 className="text-2xl font-medium mb-6">Description</h3>
            <p className="text-base">{result.desc}</p>
          </div>

          {/* Sneak peek */}
          <div data-aos="fade-up" className="my-16">
            <h3 className="text-2xl font-medium mb-6">A sneak peek</h3>
            <p className="text-base mb-5">
              Here’s a sneak peek of what we do with Levare:
            </p>

            <Image
              data-aos="fade-up"
              className="rounded-xl"
              src={result.img}
              width={1800}
              height={1}
              alt="image sneak peek"
            />
          </div>

          {/* Problem Statement */}
          <div data-aos="fade-up" className="my-16">
            <h3 className="text-2xl font-medium mb-6">Problem Statement</h3>
            <p className="text-base mb-5">
              The wine industry lacks an accessible platform that enables wine
              drinkers, regardless of expertise, to fully appreciate and enjoy
              the authentic taste, aroma, and bouquet of their wines as
              intended. Currently, wine enthusiasts face challenges such as long
              waiting periods and resorting to artificial methods to aerate
              their wines, compromising the true tasting experience. There is a
              need for a solution that eliminates these barriers and provides a
              convenient way for wine lovers to enhance their enjoyment of wines
              without compromising quality.
            </p>
          </div>

          {/* What We Did */}
          <div data-aos="fade-up" className="my-16">
            <h3 className="text-2xl font-medium mb-6">What We Did</h3>
            <p className="text-base mb-5">
              By developing a website for Levare Decanter, we aim to address
              these challenges and provide a platform that offers innovative
              products and resources to revolutionize the wine drinking
              experience. Our goal is to create an online destination where wine
              enthusiasts can access reliable information, discover products
              that enhance wine aeration, and connect with a community of
              like-minded individuals passionate about true taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDesc;
