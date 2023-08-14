import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiMenu } from "react-icons/fi";
import engLogo from "../assets/images/u_language-line.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div>
      <div className="shadow-sm">
        <section className="max-w-[1120px] mx-auto">
          {/* Navbar */}
          <div className="flex flex-col justify-center items-center py-5 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            {/* Logo and Menu Items */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-12">
              <div>
                <p className="text-[#1684D4] text-2xl font-bold">LOGO</p>
                <small className="text-gray-500 block">TAGLINE</small>
              </div>
              {mobileMenuOpen || (
                <>
                  <div className="hidden sm:flex justify-center items-center gap-2">
                    <p className="text-[#2E4369]">Emergency</p>
                    <span>
                      <FiChevronDown className="text-[#D3D5D8]" />
                    </span>
                  </div>
                  <div className="hidden sm:flex justify-center items-center gap-2">
                    <p className="text-[#2E4369]">Health Services</p>
                    <span>
                      <FiChevronDown className="text-[#D3D5D8]" />
                    </span>
                  </div>
                  <div className="hidden sm:flex justify-center items-center gap-2">
                    <p className="text-[#2E4369]">Health Education</p>
                    <span>
                      <FiChevronDown className="text-[#D3D5D8]" />
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button (Hamburger Icon) */}
            <div className="sm:hidden">
              <button onClick={toggleMobileMenu} className="text-[#D3D5D8] p-2">
                <FiMenu size={24} />
              </button>
            </div>

            {/* Search Input */}
            <div className="flex justify-center items-center ">
              <input
                type="text"
                placeholder="Search Hospital, Doctor, Medicine, Company"
                className="px-3 py-1 w-[80%] sm:w-80 h-[32px] text-gray-500 outline-none ring-1 ring-gray-300 rounded-sm focus:ring-gray-700"
              />
              <FiSearch
                size="35px"
                className=" rounded-[3px] p-2 text-white bg-gradient-to-r from-[#22B1DE] to-[#1DC09D]"
              ></FiSearch>
            </div>

            {/* Language Selection and Login */}
            <div className="flex justify-center items-center space-x-2">
              <img src={engLogo} alt="" className="hidden sm:block" />
              <p className="hidden sm:block text-[#7B8997]">English</p>
              <FiChevronDown className="text-[#D3D5D8]" />
              <button className="font-semibold">Login</button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {mobileMenuOpen && (
            <div className="sm:hidden flex flex-col space-y-2">
              <p className="text-[#2E4369]">Emergency</p>
              <p className="text-[#2E4369]">Health Services</p>
              <p className="text-[#2E4369]">Health Education</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
