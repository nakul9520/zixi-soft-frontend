import { assetsObj } from "@/utils/Images";
import React from "react";
import { Card, Container } from "react-bootstrap";

const TalentNeed = () => {
  const cardData = [
    {
      title: "Tell us what you need",
      description:
        "Tell Us Your Needs: Start with an introductory meeting and detailed requirements discussion with your personal Matching Expert. They will create an Ideal Candidate Profile tailored to your exact needs. You'll have the opportunity to review and adjust this profile before we proceed.",
      avatar: assetsObj.avatar1,
    },
  ];
  return (
    <>
      <section className="talent_need_section">
        <Container fluid="lg">
          <Card>
            <Card.Body></Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default TalentNeed;
