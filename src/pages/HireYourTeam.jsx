import HireTeamBanner from "@/components/hire-team/HireTeamBanner";
import React from "react";
import "../styles/hireteam.css";
import HiringModels from "@/components/hire-team/HiringModels";
import VerifiedDevelopers from "@/components/hire-team/VerifiedDevelopers";
const HireYourTeam = () => {
  return (
    <>
      <HireTeamBanner />
      <HiringModels />
      <VerifiedDevelopers />
    </>
  );
};

export default HireYourTeam;
