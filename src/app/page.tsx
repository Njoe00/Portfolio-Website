"use client";
import React, { useRef } from "react";
import Header from "./components/header";
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

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="bg-[#f9f9f9] text-white h-screen w-full box-border">
      <Header
        scrollToHomeRef={() => scrollToSection(homeRef)}
        scrollToAboutRef={() => scrollToSection(aboutRef)}
        scrollToProjectsRef={() => scrollToSection(projectsRef)}
        scrollToContactRef={() => scrollToSection(contactRef)}
      />
      <MainCard homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Portfolio projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}
