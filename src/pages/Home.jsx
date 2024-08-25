import About from "@/components/common/home/About";
import Banner from "@/components/common/home/Banner";
import Techstack from "@/components/common/home/Techstack";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Techstack />
      <About />
    </React.Fragment>
  );
};

export default Home;
