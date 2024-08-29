import { assetsObj } from "@/utils/Images";
import React from "react";
import { Card, Container, Stack } from "react-bootstrap";

const TalentNeed = () => {
  const cardData = [
    {
      title: "Tell us what you need",
      description:
        "Tell Us Your Needs: Start with an introductory meeting and detailed requirements discussion with your personal Matching Expert. They will create an Ideal Candidate Profile tailored to your exact needs. You'll have the opportunity to review and adjust this profile before we proceed.",
      avatar: assetsObj.talentImg1,
    },
    {
      title: "Your Matching Expert gets to work",
      description:
        "Zixisoft's automated process identifies partners with the ideal tech stack, industry experience, and engineers to match your Ideal Candidate Profile.",
      avatar: assetsObj.talentImg2,
    },
    {
      title: "Candidate pre-screening",
      description:
        "Zixisoft's automated process identifies partners with the ideal tech stack, industry experience, and engineers to match your Ideal Candidate Profile.",
      avatar: assetsObj.talentImg2,
    },
  ];
  return (
    <>
      <section className="talent_need_section">
        <h3 className="text-center mb-5">
          See How We Perfectly Match Talent to Your Needs
        </h3>
        <Container fluid="lg" className="main_block">        
          <Card className="talent_card">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg1} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">Tell us what you need</h4>
                  <p className="body1">
                    Tell Us Your Needs: Start with an introductory meeting and
                    detailed requirements discussion with your personal Matching
                    Expert. They will create an Ideal Candidate Profile tailored
                    to your exact needs. You'll have the opportunity to review
                    and adjust this profile before we proceed.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card ms-auto">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg1} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">Tell us what you need</h4>
                  <p className="body1">
                    Tell Us Your Needs: Start with an introductory meeting and
                    detailed requirements discussion with your personal Matching
                    Expert. They will create an Ideal Candidate Profile tailored
                    to your exact needs. You'll have the opportunity to review
                    and adjust this profile before we proceed.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg1} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">Tell us what you need</h4>
                  <p className="body1">
                    Tell Us Your Needs: Start with an introductory meeting and
                    detailed requirements discussion with your personal Matching
                    Expert. They will create an Ideal Candidate Profile tailored
                    to your exact needs. You'll have the opportunity to review
                    and adjust this profile before we proceed.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default TalentNeed;
