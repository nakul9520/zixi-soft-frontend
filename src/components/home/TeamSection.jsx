import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TeamSection = () => {
  const teamInfoData = [
    {
      icon: assetsObj.flashLightningIcon,
      title: "Hire Quickly",
      desc: "Onboard talent in less than 48 hours. Scale your team up or down with ease—no long-term commitments required.",
    },
    {
      icon: assetsObj.fileIcon,
      title: "The Top 3%kly",
      desc: "Every candidate in our network undergoes rigorous testing and vetting. Our selective process results in a 98% success rate for trials leading to hires.",
    },
    {
      icon: assetsObj.pauseIcon,
      title: "Leading the Future of Work",
      desc: "Leading the Future of Work: Our network is prepared for the challenges of tomorrow, with skills in advanced areas like blockchain and AI.",
    },
    {
      icon: assetsObj.chartLevelUpIcon,
      title: "A Level Above",
      desc: "A Level Above: Every freelancer in our network is known for their top-notch integrity, professionalism, and communication.",
    },
  ];
  return (
    <>
      <section className="teams_section py-5">
        <Container>
          <Row>
            <Col xs={12} lg={7}>
              <Row>
                <Col xs={12}>
                  <div className="common_heading mb-4">
                    <h3>Build Outstanding Teams, Right When You Need Them</h3>
                    <p>
                      Build the perfect team on demand, just when you need it.
                    </p>
                  </div>
                </Col>
                {map(teamInfoData, (item, i) => (
                  <Col xs={12} sm={6} key={i}>
                    <div className="team_info_wrap mb-5">
                      <div className="team_info_wrap_icon">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>
                      <h5>The Top 3%</h5>
                      <p className="body1 fw-bolder">
                        Every candidate in our network undergoes rigorous
                        testing and vetting. Our selective process results in a
                        98% success rate for trials leading to hires.
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} lg={5}>
              <div className="teams_images_right d-flex flex-column  align-items-sm-start align-items-lg-center">
                <div className="teams_member_card_wrap teams_member_card_1 shadow">
                  <div className="img_wrap">
                    <img
                      src={assetsObj.teamMember2}
                      alt="team member image"
                      className="img-fluid member_img"
                    />
                    <img
                      src={assetsObj.logo_first_letter}
                      alt="logo z letter"
                      className="logo_first_letter"
                    />
                  </div>
                  <div className="team_member_info">
                    <h6>Marine Duo</h6>
                    <p>
                      <i class="bi bi-patch-check-fill"></i> Verified
                      Expert ​in Engineering
                    </p>
                    <p> JavaScript Developer</p>
                  </div>
                </div>

                <div className="teams_member_card_wrap teams_member_card_2">
                  <div className="img_wrap">
                    <img
                      src={assetsObj.teamMember2}
                      alt="team member image"
                      className="img-fluid member_img"
                    />
                    <img
                      src={assetsObj.logo_first_letter}
                      alt="logo z letter"
                      className="logo_first_letter"
                    />
                  </div>
                  <div className="team_member_info">
                    <h6>Marine Duo</h6>
                    <p>
                      <i class="bi bi-patch-check-fill"></i> Verified
                      Expert ​in Engineering
                    </p>
                    <p> JavaScript Developer</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TeamSection;
