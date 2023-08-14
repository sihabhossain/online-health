import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import HappyPatient from "../Components/HappyPatient";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <HappyPatient></HappyPatient>
    </div>
  );
};

export default Home;
