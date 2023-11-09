"use client";
import React, { useRef } from "react";
import Header from "./header/page";
import MainCard from "./mainCard/page";
import Portfolio from "./portfolio/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="bg-[#f9f9f9] text-white h-screen w-screen box-border">
      <Header
        scrollToHomeRef={() => scrollToSection(homeRef)}
        scrollToAboutRef={() => scrollToSection(aboutRef)}
        scrollToProjectsRef={() => scrollToSection(projectsRef)}
        scrollToContactRef={() => scrollToSection(contactRef)}
      />
      <MainCard homeRef={homeRef} />
      {/* <About aboutRef={aboutRef} /> */}
      <Portfolio projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}
