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
                  <img src={assetsObj.talentImg2} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">
                    Your Matching Expert gets to work
                  </h4>
                  <p className="body1">
                    Zixisoft's automated process identifies partners with the
                    ideal tech stack, industry experience, and engineers to
                    match your Ideal Candidate Profile.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg3} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">
                    Candidate pre-screening
                  </h4>
                  <p className="body1">
                    Based on the proposals we receive, YouTeam pre-screens
                    talents to create a shortlist of candidates who most closely
                    match your Ideal Candidate Profile. We look at :
                  </p>
                  <ul className="talent_card_list">
                    <li>
                      Zixisoft reviews the proposals and pre-screens candidates
                      to create a shortlist that best aligns with your Ideal
                      Candidate Profile.
                    </li>
                    <li>English proficiency</li>
                    <li>
                      Soft skills check: independence, clear communication,
                      teamwork
                    </li>
                    <li>
                      CV skill set validation: advertised skills should match
                      actual work experience
                    </li>
                    <li>
                      At customer's request: a free HackerRank skill test before
                      the first interview
                    </li>
                  </ul>
                  <p>
                    Based on the pre-screening process, your Matching Expert
                    creates a Talent Shortlist and sends it to you for review.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card ms-auto">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg4} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">
                    Review Your Candidate Shortlist
                  </h4>
                  <p className="body1">
                    Evaluate the shortlist with your Matching Expert to see how
                    candidates measure up. Choose the developers you wish to
                    interview, and if you're not satisfied, your Matching Expert
                    will find new candidates for you.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card">
          
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg5} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">Conduct Interviews</h4>
                  <p className="body1">
                    Your Matching Expert will assist you during interviews and
                    screenings, offering support for technical assessments such
                    as test tasks, live coding sessions, or code sample
                    evaluations.
                  </p>
                </div>
              </Stack>
            </Card.Body>
          </Card>
          <Card className="talent_card ms-auto">
            <Card.Body className="p-4">
              <Stack direction="horizontal" gap={4}>
                <div className="avatar_wrapper flex-shrink-0">
                  <img src={assetsObj.talentImg6} alt="talent_icon" />
                </div>
                <div>
                  <h4 className="secondary_font mb-2">Hire with confidence</h4>
                  <p className="body1">
                    Congratulations! Your hire comes with the Zixisoft
                    Guarantee, including free replacements, a 1-month
                    no-questions-asked cancellation, and a money-back policy.
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
