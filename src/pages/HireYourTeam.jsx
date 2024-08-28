import HireTeamBanner from "@/components/hire-team/HireTeamBanner";
import React from "react";
import "../styles/hireteam.css";
import HiringModels from "@/components/hire-team/HiringModels";
import VerifiedDevelopers from "@/components/hire-team/VerifiedDevelopers";
import ScheduleCall from "@/components/hire-team/ScheduleCall";
import Guarantee from "@/components/hire-team/Guarantee";
import StartToday from "@/components/hire-team/StartToday";
import SuccessStories from "@/components/hire-team/SuccessStories";
import TalentNeed from "@/components/hire-team/TalentNeed";
const HireYourTeam = () => {
  return (
    <>
      <HireTeamBanner />
      <HiringModels />
      <VerifiedDevelopers />
      <TalentNeed />
      <ScheduleCall />
      <Guarantee />
      <SuccessStories />
      <StartToday />
    </>
  );
};

export default HireYourTeam;
