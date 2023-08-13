import React from "react";
import heroImg from "../assets/images/hero.svg";
import heroArrowIcon from "../assets/images/hero-arrow.svg";
import arrowHead from "../assets/images/arrow-head.svg";
import pattern from "../assets/images/Pattern.svg";
import gradient from "../assets/images/bg-gradient.svg";
import whiteBg from "../assets/images/white-bg.svg";
import play from "../assets/images/u_play.svg";

const Hero = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${gradient})` }}
        className="bg-no-repeat bg-[length:450px_600px] bg-right-top  md:max-w-[1120px] max-w-screen-sm mx-5 md:mx-auto"
      >
        <section className="md:flex justify-center items-center gap-5 py-16 sm:mx-10 ">
          {/* HERO SECTION STARTS */}
          <div className="space-y-[40px] ">
            <div>
              <h1 className="text-[#111111] font-bold text-5xl">
                Healthcare <br /> - just a fingertip away
              </h1>
            </div>

            <div>
              <p className="text-[#6F8691]">
                Egestas cursus id scelerisque rhoncus eu Metus rhoncus quam erat
                bibendum feugiat. Vitae nibh amet scelerisque vestibulum.
              </p>
            </div>

            <div className="flex space-x-8 items-center">
              <div>
                <button className="bg-[#1684D4] text-white font-semibold px-10 py-2 rounded-md">
                  Get Started
                </button>
              </div>
              <div className="flex justify-center items-center ">
                <p className="text-[#7B8997] hidden sm:block">Watch How to</p>
                <img className="hidden sm:block" src={heroArrowIcon} alt="" />
                <img className="hidden sm:block" src={arrowHead} alt="" />
              </div>
            </div>
          </div>

          <div className=" mt-5">
            <div className="relative">
              <img src={heroImg} alt="" />
              <img
                className="absolute hidden sm:block md:-bottom-14 md:-right-14 "
                src={pattern}
                alt=""
              />
              <img
                className="absolute hidden sm:block md:bottom-28 md:right-44"
                src={whiteBg}
                alt=""
              />
              <img
                className="absolute hidden sm:block md:bottom-32 md:right-48"
                src={play}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
