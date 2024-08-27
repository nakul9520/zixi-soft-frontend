import React from "react";
import ClientServe from "@/components/home/clientServe";
import HireDevelopers from "@/components/home/HireDevelopers";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Techstack from "@/components/home/Techstack";
import HiringExpert from "@/components/home/HiringExpert";
import TeamSection from "@/components/home/TeamSection";
import DiscoverOpportunities from "@/components/home/DiscoverOpportunities";
import JoinUsSection from "@/components/home/JoinUsSection";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/Layout/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Techstack />
      <About />
      <ClientServe />
      <HireDevelopers />
      <HiringExpert />
      <TeamSection />
      <DiscoverOpportunities />
      <JoinUsSection />
      <ContactUs />
    </React.Fragment>
  );
};

export default Home;
