import React from "react";
import Container from "./Container";
import offer1 from "../assets/images/offer1.svg";
import offer2 from "../assets/images/offer2.svg";
import offer3 from "../assets/images/offer3.svg";
import offer4 from "../assets/images/offer4.svg";
import offer5 from "../assets/images/offer5.svg";
import offer6 from "../assets/images/offer6.svg";
import offer7 from "../assets/images/offer7.svg";
import offer8 from "../assets/images/offer8.svg";

const SpeacialOffers = () => {
  return (
    <Container>
      <section>
        {/* HEADing */}
        <div className="mx-12 md:mx-auto mb-10">
          <div>
            <h2 className="text-4xl font-bold text-center mb-20">
              Special Offers & New Product Arrivals
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
              <img className="w-[250px]" src={offer1} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer2} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer3} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer4} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer5} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer6} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer7} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>

            <div>
              <img className="w-[250px]" src={offer8} alt="" />
              <div className="space-y-2 mt-2">
                <h3 className="text-[#AFBAB8] font-semibold">TEST discount</h3>
                <h1 className="font-bold">Tellus mauris varius est</h1>
                <p className="text-[#28A7CF] font-bold">$121.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <button className="bg-gradient-to-r from-[#22B1DE] to-[#1DC09D] px-8 py-3 rounded-lg text-white font-semibold mb-20">
            Load More Offers
          </button>
        </div>
      </section>
    </Container>
  );
};

export default SpeacialOffers;
