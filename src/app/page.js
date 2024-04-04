import React from 'react'
import Navbar from '@/components/Header/Navbar';
import Hero from '@/components/Hero/Hero';
import NavbarRespon from '@/components/Header/NavbarRespon';
import Client from '@/components/Clients/Client';
import Footer from '@/components/Footer/Footer';
import Offer from '@/components/Offer/Offer';

function Home() {
  return (
    <div className="container mx-auto md:px-10 relative">
      <Navbar />
      <NavbarRespon />
      <Hero />
      <Client />
      <Offer />
      <Footer />
    </div>
  );
}

export default Home
