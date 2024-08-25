
import React from "react";

import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Techstack from "@/components/home/Techstack";

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
