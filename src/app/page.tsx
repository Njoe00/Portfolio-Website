import React from "react";

import Header from "./header/page";
import MainCard from "./mainCard/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
export default function Home() {
  return (
    <main className="bg-[#f9f9f9] text-white h-screen w-screen box-border">
      <Header />
      <MainCard />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
