
import React from "react";
// import { useRouter } from 'next/router';

import dataPortofolio from "@/components/Hero/dataPortofolio";

import Navbar from "@/components/Header/Navbar";
import NavbarRespon from "@/components/Header/NavbarRespon";
import DetailGambar from "@/components/Detail/DetailGambar";
import DetailDesc from "@/components/Detail/DetailDesc";
import Offer from "@/components/Offer/Offer";
import Footer from "@/components/Footer/Footer";

function page({ params }) {
  const result = dataPortofolio[params.id];
  return (
    <div className="container mx-auto md:px-10 relative">
      <Navbar />
      <NavbarRespon />
      <DetailGambar img={result.img} category={result.category} />
      <DetailDesc img={result.img} name={result.name} desc={result.desc} />
      <Offer />
      <Footer />
    </div>
  );
}

export default page;
