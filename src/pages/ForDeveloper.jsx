import BannerForDeveloper from "@/components/for-developer/BannerForDeveloper";
import React from "react";
import "../styles/fordevelopment.css";
import DeveloperDreamCompany from "@/components/for-developer/DeveloperDreamCompany";
import GlobalOpportunities from "@/components/for-developer/GlobalOpportunities";
import ApplyForJob from "@/components/for-developer/ApplyForJob";
import MatchingProcess from "@/components/for-developer/MatchingProcess";
import ApplyNowBanner from "@/components/for-developer/ApplyNowBanner";
import FAQForDeveloper from "@/components/for-developer/FAQForDeveloper";
import JobOnZixisoft from "@/components/for-developer/JobOnZixisoft";

const ForDeveloper = () => {
  return (
    <>
      <BannerForDeveloper />
      <DeveloperDreamCompany />
      <GlobalOpportunities />
      <ApplyForJob />
      {/* <MatchingProcess /> */}
      <JobOnZixisoft />
      <FAQForDeveloper />
      <ApplyNowBanner />
    </>
  );
};

export default ForDeveloper;
