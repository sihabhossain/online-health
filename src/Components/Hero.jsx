import React from "react";
import heroImg from "../assets/images/hero.svg";
import heroArrowIcon from "../assets/images/hero-arrow.svg";
import arrowHead from "../assets/images/arrow-head.svg";
import pattern from "../assets/images/Pattern.svg";
import gradient from "../assets/images/bg-gradient.svg";

const Hero = () => {
  return (
    <div className="md:max-w-[1120px] max-w-screen-sm mx-auto">
      <section className="md:flex justify-center items-center gap-5 mt-20 sm:mx-10">
        {/* HERO SECTION STARTS */}
        <div className="space-y-[40px] mx-5">
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

        <div
          className="mx-5 mt-5"
          style={{ backgroundImage: `url(${gradient})` }}
        >
          <div className="relative">
            <img src={heroImg} alt="" />
            <img
              className="absolute hidden sm:block md:-bottom-14 md:-right-14 bg-cover"
              src={pattern}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
