import React from "react";
import Container from "./Container";
import whiteBox from "../assets/images/white-box.svg";
import profile from "../assets/images/happy-patient.svg";
import worldMap from "../assets/images/world-map.svg";
import quote from "../assets/images/quote.svg";

const HappyPatient = () => {
  return (
    <Container>
      <section className="mb-20">
        {/* Happy patient */}
        <div>
          <h1 className="text-center text-4xl font-bold">
            Trusted by top
            <span className="text-[#23CA8E]"> healthcare professionals </span>
            & <br />
            <span className="text-[#23CA8E]"> patients </span> around the world
          </h1>
        </div>

        {/* bg world map */}
        <div
          style={{ backgroundImage: `url(${worldMap})` }}
          className="bg-no-repeat bg-[length:1250px_550px]"
        >
          {/* Happy patient profile */}
          <div className="flex justify-center items-center relative mt-20">
            <img className="" src={whiteBox} alt="" />
            <img className="absolute top-10" src={profile} alt="" />
          </div>

          {/* Happy patient name */}
          <div className="flex-row text-center mb-10">
            <h1 className="text-2xl font-semibold">Rakesh Chawla</h1>
            <p className="text-[#7B8997]">Happy patient</p>
          </div>

          {/* Happy patient description */}
          <div className="flex justify-center items-center text-center pb-20">
            <img className="mr-5" src={quote} alt="" />
            <p className="font-semibold">
              Gravida massa et aliquet velit fermentum senectus. Eget urna
              ultrices elit sociis. <br /> Diam vel purus non sapien. Enim
              viverra.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HappyPatient;
