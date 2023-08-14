import React from "react";
import Container from "./Container";
import { FiSearch } from "react-icons/fi";
import departmentImg from "../assets/images/departments.svg";
import onlineReportsImg from "../assets/images/online-test.svg";
import drugImg from "../assets/images/drug.svg";
import bloodBankImg from "../assets/images/blood-bank.svg";
import whiteCircle from "../assets/images/white-bg.svg";

const Services = () => {
  return (
    <Container>
      <section className="bg-[#d2f7ec] py-10 px-12 rounded-2xl mt-12 md:mb-20 mb-10">
        {/* Services section starts */}
        <div className="text-center  space-y-5">
          <small className="text-[#1684D4] font-semibold">
            SELECT YOUR DESIRED SERVICE FROM OUR WIDE RANGE OF
          </small>
          <h1 className="text-4xl font-bold">Services</h1>

          {/* Search */}
          <div className="flex justify-center items-center relative">
            <input
              className="outline-none ring-1 ring-gray-400 rounded-md px-4 py-2 md:w-1/3 focus:ring-gray-700"
              placeholder="Search a service.."
              type="text"
            />
            <FiSearch className="absolute md:ml-80 ml-44 text-[#6F8691]"></FiSearch>
          </div>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-1 md:grid-cols-4  md:mx-0 gap-5 mt-20 mb-10">
          <div className="bg-[#a3ecd6] p-10 rounded-lg mt-5 ">
            {/* Card head */}
            <div className="flex items-center justify-center  relative">
              <img
                className="absolute -top-16 w-24 border-8 border-[#a3ecd6] rounded-full"
                src={whiteCircle}
                alt=""
              />
              <img className="absolute -top-10" src={departmentImg} alt="" />
            </div>
            <h1 className="font-bold text-[20px] mt-14 text-center text-[#080940]">
              Departments
            </h1>

            <div className="mt-8">
              <ul className="list-disc space-y-2 font-semibold">
                <li>Medicine</li>
                <li>Orthopedics</li>
                <li>Neurology</li>
                <li>Gynaecologist</li>
                <li>Psychologist</li>
                <li>Psychiatrists</li>
                <li>Child Speciallist</li>
                <li>Phsyotheraphist</li>
                <li>Nutritionist</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#c1dbfa] p-10 rounded-lg mt-5">
            {/* Card head */}
            <div className="flex items-center justify-center  relative">
              <img
                className="absolute -top-16 w-24 border-8 border-[#c1dbfa] rounded-full"
                src={whiteCircle}
                alt=""
              />
              <img className="absolute -top-10" src={onlineReportsImg} alt="" />
            </div>

            <h1 className="font-bold text-[20px] mt-14 text-center text-[#080940]">
              Online Test Reports
            </h1>
            <div className="mt-8">
              <ul className="list-disc space-y-2">
                <li>CBC</li>
                <li>ESR</li>
                <li>Lipid</li>
                <li>haemogoblin</li>
                <li>Blood glucose</li>
                <li>CRP</li>
                <li>Creatine</li>
                <li>X-Ray</li>
                <li>MRI</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#facab8] p-10 rounded-lg mt-5">
            {/* Card head */}
            <div className="flex items-center justify-center  relative">
              <img
                className="absolute -top-16 w-24 border-8 border-[#facab8] rounded-full"
                src={whiteCircle}
                alt=""
              />
              <img className="absolute -top-10" src={drugImg} alt="" />
            </div>

            <h1 className="font-bold text-[19px] text-[#080940] mt-14 text-center">
              Drug and Supplement
            </h1>
            <div className="mt-8">
              <ul className="list-disc space-y-2">
                <li>OTC Medicine</li>
                <li>Food supplement</li>
                <li>Herbal Products</li>
                <li>Nutritional Drinks</li>
                <li>Sports Drinks</li>
                <li>Supporitive Equipments</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#aed1ec] p-10 rounded-lg mt-5">
            {/* Card head */}
            <div className="flex items-center justify-center  relative">
              <img
                className="absolute -top-16 w-24 border-8 border-[#aed1ec] rounded-full"
                src={whiteCircle}
                alt=""
              />
              <img className="absolute -top-10" src={bloodBankImg} alt="" />
            </div>

            <h1 className="font-bold text-[20px] text-[#080940] mt-14 text-center">
              Blood Bank & Others
            </h1>
            <div className="mt-8">
              <ul className="list-disc space-y-2">
                <li>University Blood Bank</li>
                <li>Hospital Blood bank</li>
                <li>Private Blood Bank</li>
                <li>Personal Donor </li>
                <li>Daily Health Status</li>
                <li>Online Health Report</li>
                <li>Doctor Suggestions</li>
                <li>Health Tips</li>
                <li>Health Education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Services;
