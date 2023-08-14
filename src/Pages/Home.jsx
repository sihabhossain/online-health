import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import HappyPatient from "../Components/HappyPatient";
import Doctors from "../Components/Doctors";
import SpeacialOffers from "../Components/SpeacialOffers";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <HappyPatient></HappyPatient>
      <Doctors></Doctors>
      <SpeacialOffers></SpeacialOffers>
    </div>
  );
};

export default Home;
