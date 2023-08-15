import React from "react";
import Container from "./Container";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import visa from "../assets/images/visa.svg";
import masterCard from "../assets/images/mastercard.svg";
import paypal from "../assets/images/paypal.svg";
import americanExpress from "../assets/images/americanexpress.svg";

const Footer = () => {
  return (
    <>
      {/* First Half of foooter */}
      <div className="bg-[#F1F7FC]">
        <div className="md:flex gap-10 pb-20 pt-20 mb-10 md:max-w-[1280px] mx-10 md:mx-auto space-y-8 md:space-y-0">
          <div className="md:w-[20%]">
            <h2 className="text-2xl font-bold text-[#28A7CF]">Useful links</h2>

            <ul className="space-y-2 mt-5 font-semibold text-[#080940]">
              <li>About us</li>
              <li>Health Service</li>
              <li>Health Education</li>
              <li>Blood Bank</li>
              <li>Career</li>
              <li>Affiliates</li>
              <li>Help us</li>
            </ul>
          </div>

          <div className="md:w-[20%]">
            <h2 className="text-2xl font-bold text-[#28A7CF]">Support</h2>

            <ul className="space-y-2 mt-5 font-semibold text-[#080940]">
              <li>Legal Notice</li>
              <li>Health Policy</li>
              <li>Privacy Policy</li>
              <li>Report Abuse</li>
              <li>Data store and security</li>
              <li>Accesibility Policy</li>
              <li>Trademark policy</li>
              <li>Site map</li>
            </ul>
          </div>

          <div className="md:w-[20%]">
            <h2 className="text-2xl font-bold text-[#28A7CF]">Resources</h2>

            <ul className="space-y-2 mt-5 font-semibold text-[#080940]">
              <li>Blog</li>
              <li>News</li>
              <li>Health Related websites</li>
              <li>List of Hospital</li>
              <li>List of Pharmacy</li>
              <li>List of doctors</li>
              <li>Volunteer Blood Donor</li>
            </ul>
          </div>

          <div className="md:w-[20%]">
            <h2 className="text-2xl font-bold text-[#28A7CF]">Account</h2>

            <ul className="space-y-2 mt-5 font-semibold text-[#080940]">
              <li>Create an account</li>
              <li>Log in</li>
              <li>Subscriptions</li>
              <li>Account balance</li>
              <li>Appointment list</li>
              <li>Emergency Request</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="md:w-[20%]">
            <h2 className="text-2xl font-bold text-[#28A7CF]">Shopping</h2>

            <ul className="space-y-2 mt-5 font-semibold text-[#080940]">
              <li>My Orders</li>
              <li>Find Medicine</li>
              <li>Food Supplement</li>
              <li>Herbal Products</li>
              <li>Nutrition Drinks</li>
              <li>Sports Drinks</li>
              <li>Sell a Service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* second half of the footer */}
      <Container>
        <div className="md:flex gap-10 space-y-10 md:space-y-0 mb-10">
          {/* First Column */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-[#2A95B7]">LOGO</h2>
            <p className="font-semibold text-[#5B6D7D]">TAGLINE</p>

            <p className="mt-5 text-[#080940] font-semibold">
              Ut in non elementum elementum senectus tristique quis eget. Justo,
              hac lacus etiam fusce auctor integer.
            </p>
          </div>

          {/* Second Column */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-[#28A7CF]">
              Give a hand with us
            </h2>
            <p className="mt-5 text-[#080940] font-semibold">
              Ut in non elementum elementum senectus tristique quis eget. Justo,
              hac lacus etiam fusce auctor integer.
            </p>

            <button className="bg-gradient-to-r mt-5 from-[#22B1DE] to-[#1DC09D] px-14 py-3 rounded-lg text-white font-semibold">
              Donate
            </button>
          </div>

          {/* Third Column */}
          <div className="md:w-1/3 space-y-5">
            <h2 className="text-2xl font-bold text-[#28A7CF]">
              Connect With us
            </h2>

            <div className="flex items-center">
              <BsTelephone></BsTelephone>
              <p className="text-[#080940] font-semibold ml-2">08-21 11 21</p>
            </div>

            <div className="flex items-center">
              <HiOutlineMail></HiOutlineMail>
              <p className="text-[#080940] font-semibold ml-2">
                info@dailyonlinehealth.com
              </p>
            </div>

            <div className="flex gap-5">
              <AiFillFacebook
                size="32"
                className="text-[#5A5A5A]"
              ></AiFillFacebook>
              <AiFillLinkedin
                size="32"
                className="text-[#5A5A5A]"
              ></AiFillLinkedin>
              <AiFillInstagram
                size="32"
                className="text-[#5A5A5A]"
              ></AiFillInstagram>
            </div>
          </div>
        </div>
      </Container>

      {/* Third half of the footer */}
      <Container>
        <hr />
        <div className="mb-20 md:flex items-center justify-between mt-5">
          <div className="text-[#7B8997]">
            Copyright DOH @ 2020. All rights reserved.
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#7B8997]">We accept</p>
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
            <img src={paypal} alt="" />
            <img src={americanExpress} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
