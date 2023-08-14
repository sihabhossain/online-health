import React from "react";
import Container from "./Container";
import mark1 from "../assets/images/Ellipse 260.svg";
import mark2 from "../assets/images/Ellipse 261.svg";
import mark3 from "../assets/images/Ellipse 262.svg";
import mark4 from "../assets/images/Ellipse 263.svg";
import mark5 from "../assets/images/Ellipse 264.svg";
import mark6 from "../assets/images/Ellipse 265.svg";

const Quotes = () => {
  return (
    <Container>
      <section>
        <div className="text-center mt-10 bg-[#a3ecd6] p-14 rounded-lg mb-20 relative">
          {/* Headline */}
          <h2 className="text-4xl font-bold mb-20 text-[#080940]">
            Quotes of the Day
          </h2>
          <p className="font-semibold mb-8">
            Dignissim quis tempor non consequat faucibus. Tincidunt mauris
            pretium consequat porta <br /> vitae commodo vitae lorem. Morbi erat
            orci eget dictum.
          </p>
          <small className="font-semibold text-[#2E4369]">
            Urna nam quisque massa ut.
          </small>

          {/* Ellipse images */}
          <div>
            <img className="absolute left-0 top-0" src={mark1} alt="" />
          </div>
          <div>
            <img className="absolute right-96 bottom-14" src={mark2} alt="" />
          </div>

          <div>
            <img className="absolute top-0 right-60" src={mark3} alt="" />
          </div>

          <div>
            <img src={mark4} alt="" />
          </div>
          <div>
            <img className="absolute top-12 left-36" src={mark5} alt="" />
          </div>
          <div>
            <img className="absolute right-28" src={mark6} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Quotes;
