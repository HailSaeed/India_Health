import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
//@ts-ignore
import { gsap } from "gsap/dist/gsap";
import SmoothScroll from "../components/SmothScroll";
import Hero from "../components/Hero";
import Divisions from "../components/Divisions";
import Service from "../components/Service";
import Background from "../components/Background";
import Calculator from "../components/Calculator";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Logos from "../components/Logos";

const Home: NextPage = () => {
  useEffect(() => {
    var viewport = document.querySelector("meta[name=viewport]");
    if (viewport)
      viewport.setAttribute(
        "content",
        //@ts-ignore
        viewport.content + ", height=" + window.innerHeight
      );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  w-full top-0 left-0 overflow-hidden relative">
      <Background></Background>
      <div className="md:h-[110vh] h-[120vh] w-full">
        <div className="w-full h-14 pt-2 flex flex-row justify-center items-center">
          <button
            id="contact"
            className="p-3 h-full rounded-b-3xl bg-pumpa hover:bg-orange rounded-xl text-white transition duration-150 z-30 font-main mt-10"
            onClick={() => {
              window.scrollTo(0, document.documentElement.scrollHeight);
              globalThis.skipped = true;
            }}
          >
            تواصل معنا
          </button>
        </div>
        <div className="relative w-full h-[60vh] pt-20 flex justify-center  items-center font-main">
          <Hero></Hero>
        </div>
        <Logos />
        <div className="flex justify-center items-center w-full md:h-[120px] gap-6 mt-8 flex-wrap"></div>
      </div>
      <Divisions></Divisions>
      <Calculator></Calculator>
      <Services></Services>
      <Contact />
    </div>
  );
};

export default Home;
