import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* LOGIN PAGE CONTENT */}
      <section>
        <div className="min-h-screen">
          <h2 className="text-center text-[#2E4369] pt-32 text-4xl font-bold">
            Personal User
          </h2>

          {/* Email input */}

          <div className="text-center">
            <p className="pt-10 pb-1 md:mr-72 text-[#6F8691]">
              Your email/phone/DOH ID
            </p>
            <input
              className="outline-none ring-1 ring-gray-400 rounded-md px-4 py-2 md:w-1/3 focus:ring-gray-700"
              placeholder="John Doe"
              type="text"
            />
          </div>

          {/* Password input */}
          <div className="text-center">
            <p className="pt-10 pb-1 md:mr-80 font-bold text-[#2E4369]">
              Enter your password <span className="text-red-500">*</span>
            </p>
            <div className="relative">
              <input
                className="outline-none ring-1 ring-gray-400 rounded-md px-4 py-2 md:w-1/3 focus:ring-gray-700"
                placeholder="Placeholder text"
                type="text"
              />

              <AiOutlineEye className="absolute md:right-[520px] md:bottom-3 right-24 bottom-3"></AiOutlineEye>
            </div>

            <p className="md:mr-72 md:mt-2">
              <span className="text-[#2E4369]">New here?</span>
              <Link to="/qrcode" className="text-[#1684D4] font-bold ml-2">
                Create account
              </Link>
            </p>
          </div>

          {/* Login stuff */}
          <div className="text-center mt-10 space-x-5">
            <button className="px-24 py-2 bg-[#FFFFFF] rounded-lg text-[#737373]">
              Cancel
            </button>
            <button className="px-24 py-2 bg-[#1684D4] rounded-lg text-white">
              Login
            </button>
          </div>

          {/* forget password */}
          <div>
            <p className="text-[#6F8691] text-center pt-10">
              Forgot your password?
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Login;
