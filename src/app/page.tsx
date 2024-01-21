"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("./components/header"), {
  ssr: false,
});
import MainCard from "./components/maincard";
import Portfolio from "./components/portfoliocards";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <main className="bg-[#f9f9f9] text-white h-screen w-full box-border">
      <DynamicHeader
        scrollToHomeRef={homeRef}
        scrollToAboutRef={aboutRef}
        scrollToProjectsRef={projectsRef}
        scrollToContactRef={contactRef}
      />
      <MainCard homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Portfolio projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}
