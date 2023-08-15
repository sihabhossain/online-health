import React from "react";
import Container from "./Container";
import arrow from "../assets/images/right-arrow.svg";
import arrowGray from "../assets/images/arrow-gray.svg";
import plusCircle from "../assets/images/plus-circle.svg";

const Faq = () => {
  return (
    <Container>
      <section>
        <div className="max-w-6xl md:mx-auto">
          <div>
            {/* HEADING */}
            <h2 className="text-center text-4xl font-bold mb-14">FAQ</h2>
          </div>

          {/* FAQ questions */}
          <div className="md:flex mb-20 gap-5">
            <div className="md:w-[35%] space-y-3 mb-10">
              {/* LEFT SIDE */}
              <div className="relative">
                <p className="bg-gradient-to-r from-[#22B1DE] to-[#1DC09D] px-8 py-3 rounded text-white font-semibold">
                  Pricing
                </p>
                <img
                  className="absolute right-0 top-4 mr-3"
                  src={arrow}
                  alt=""
                />
              </div>

              <div className="relative">
                <p className="px-8 py-3 rounded border border-[#7B8997] text-[#7B8997]">
                  Health Education
                </p>
                <img
                  className="absolute right-0 top-4 mr-3"
                  src={arrowGray}
                  alt=""
                />
              </div>

              <div className="relative">
                <p className="px-8 py-3 rounded border border-[#7B8997] text-[#7B8997]">
                  Health Services
                </p>
                <img
                  className="absolute right-0 top-4 mr-3"
                  src={arrowGray}
                  alt=""
                />
              </div>

              <div className="relative">
                <p className="px-8 py-3 rounded border border-[#7B8997] text-[#7B8997]">
                  Doctors
                </p>
                <img
                  className="absolute right-0 top-4 mr-3"
                  src={arrowGray}
                  alt=""
                />
              </div>

              <div className="relative">
                <p className="px-8 py-3 rounded border border-[#7B8997] text-[#7B8997]">
                  Medical Institutes
                </p>
                <img
                  className="absolute right-0 top-4 mr-3"
                  src={arrowGray}
                  alt=""
                />
              </div>

              <div className="relative">
                <p className="px-8 py-3 rounded border border-[#7B8997] text-[#7B8997]">
                  Hospitals/Pharmacies
                </p>
                <img
                  className="absolute  right-0 top-4 mr-3"
                  src={arrowGray}
                  alt=""
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-[65%] ">
              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>

              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>

              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>

              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>

              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute  hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>

              <div className="py-3 relative">
                <p className="font-semibold mb-2">
                  Purus tincidunt ut et cum faucibus habitasse metus. Ac netus
                  sed maecenas diam ultrices ut?
                </p>
                <hr className="" />
                <img
                  className="absolute hidden sm:block right-5 top-4"
                  src={plusCircle}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Faq;
