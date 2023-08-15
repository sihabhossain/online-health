import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import overviewImg from "../assets/images/overview.svg";
import healthImg from "../assets/images/health.svg";
import appointmentImg from "../assets/images/appointments.svg";
import manageImg from "../assets/images/manage.svg";
import storeImg from "../assets/images/store.svg";
import QRBackroundImg from "../assets/images/qrcode-bg.svg";
import qrcode from "../assets/images/QR.svg";
import checkbox from "../assets/images/checkbox-group.svg";
import checkbox2 from "../assets/images/checkbox-group (1).svg";

const QRcode = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* QR CODE PAGE CONTENT */}
      <section>
        <div className="min-h-screen bg-[#F8FAFB]">
          {/* Top content */}

          <div className="max-w-[1120px] md:mx-auto ">
            <div className="px-36 py-4 md:flex md:justify-around bg-[#ECF7FF]">
              <div className="flex gap-2">
                <img src={overviewImg} alt="" />
                <p>Overview</p>
              </div>
              <div className="flex gap-2">
                <img src={healthImg} alt="" />
                <p>Health Diary</p>
              </div>
              <div className="flex gap-2">
                <img src={appointmentImg} alt="" />
                <p>Appointments</p>
              </div>
              <div className="flex gap-2">
                <img src={manageImg} alt="" />
                <p>Manage Family</p>
              </div>
              <div className="flex gap-2">
                <img src={storeImg} alt="" />
                <p>Store</p>
              </div>
            </div>

            {/* Main content */}
            <div className="md:flex justify-between pt-10 mx-20 md:mx-0 space-y-5 md:space-y-0">
              <div>
                <p className="text-[#192530] text-3xl font-bold">My QR Code</p>
              </div>

              <div className="space-y-2">
                <button className="px-10 py-2 md:ml-40 bg-[#1684D4] rounded-lg text-white">
                  Scan other QR code
                </button>
                <p className="md:ml-28 text-[12px] text-[#6F8691]">
                  We need your device’s camera permission for that
                </p>
              </div>
            </div>

            {/* QR CODE */}
            <div className="relative">
              <img className="pt-10" src={QRBackroundImg} alt="" />
              <img
                className="absolute w-[100px] top-14 left-32 md:w-[250px] md:left-96 md:top-24"
                src={qrcode}
                alt=""
              />
            </div>

            {/* bottom content */}

            <div className="space-y-3 md:mx-0 mx-10">
              <p className="text-2xl font-semibold mt-10">Settings</p>
              <hr />
              <img src={checkbox} alt="" />
              <img src={checkbox2} alt="" />
            </div>

            {/* Main content ends */}
          </div>
        </div>
      </section>

      {/* Qr code page content ends */}
      <Footer></Footer>
    </>
  );
};

export default QRcode;
