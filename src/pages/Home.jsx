import React from "react";
import ClientServe from "@/components/home/clientServe";
import HireDevelopers from "@/components/home/HireDevelopers";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Techstack from "@/components/home/Techstack";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Techstack />
      <About />
      <ClientServe />
      <HireDevelopers />
    </React.Fragment>
  );
};

export default Home;
