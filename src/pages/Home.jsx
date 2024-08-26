import About from "@/components/common/home/About";
import Banner from "@/components/common/home/Banner";
import ClientServe from "@/components/common/home/clientServe";
import HireDevelopers from "@/components/common/home/HireDevelopers";
import Techstack from "@/components/common/home/Techstack";
import React from "react";

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
