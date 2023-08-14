import React from "react";
import Container from "./Container";
import doctor1 from "../assets/images/doctor1.svg";
import doctor2 from "../assets/images/doctor2.svg";
import doctor3 from "../assets/images/doctor3.svg";
import doctor4 from "../assets/images/doctor4.svg";

const Doctors = () => {
  return (
    <div className="bg-[#F7FAFC] mb-20 pb-5 pt-20 curved-background__curved ">
      <Container>
        <section className="">
          {/* section heading */}
          <div className="text-center space-y-2 py-10 mb-10">
            <small className="text-[#1684D4] font-semibold">WE WORK WITH</small>
            <h2 className="text-4xl font-bold">
              Doctors & Organizations you trust
            </h2>
          </div>

          {/* doctor cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 pb-10 mx-5 md:mx-auto text-center gap-10">
            <div className="shadow-md p-5 rounded-md bg-white">
              <div>
                <img className="w-[250px]" src={doctor1} alt="" />
              </div>
              <div className="mb-10 mt-5">
                <h2 className="text-2xl font-semibold">LifeOmic</h2>
                <small className="text-gray-600">Specialities</small>
                <p className="font-semibold">Workplace Description</p>
              </div>
            </div>

            <div className="shadow-md p-5 rounded-md bg-white">
              <div>
                <img className="w-[250px]" src={doctor2} alt="" />
              </div>
              <div className="mb-10 mt-5">
                <h2 className="text-2xl font-semibold">Brandon Carter</h2>
                <small className="text-gray-600">Specialities</small>
                <p className="font-semibold">Workplace Description</p>
              </div>
            </div>

            <div className="shadow-md p-5 rounded-md bg-white">
              <div>
                <img className="w-[250px]" src={doctor3} alt="" />
              </div>
              <div className="mb-10 mt-5">
                <h2 className="text-2xl font-semibold">Alyssa Gray</h2>
                <small className="text-gray-600">Specialities</small>
                <p className="font-semibold">Workplace Description</p>
              </div>
            </div>

            <div className="shadow-md p-5 rounded-md bg-white">
              <div>
                <img className="w-[250px]" src={doctor4} alt="" />
              </div>
              <div className="mb-10 mt-5">
                <h2 className="text-2xl font-semibold">Medcare</h2>
                <small className="text-gray-600">Specialities</small>
                <p className="font-semibold">Workplace Description</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Doctors;
