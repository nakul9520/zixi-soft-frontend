import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ZixiSoftRightChoice = () => {
  return (
    <>
      <section className="zixiSoft_right_choice_section">
        <Container fluid="lg">
          <h3 className="mb-5">What Makes Zixisoft the Right Choice</h3>
          <div className="zixiSoft_right_choice_card_wrap">
            <Row>
              <Col xs={12} lg={6}>
                {" "}
                {/* First card */}
                <div
                  className="choice_card first_choice_card position-relative"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="choice_card_content_wrap">
                    <h5 className="choice_card_points">01</h5>
                    <div className="choice_card_desc">
                      <h5>Fast Onboarding-To-Production</h5>
                      <p>
                        Experience a smooth and swift transition from onboarding
                        to full-scale production. Our streamlined processes
                        ensure that new hires are quickly integrated into your
                        projects, minimizing downtime and maximizing
                        productivity right from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                {/* Second card */}
                <div
                  className="choice_card second_choice_card position-relative"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <div className="choice_card_content_wrap ms-auto">
                    <h5 className="choice_card_points">02</h5>
                    <div className="choice_card_desc">
                      <h5>Fast Onboarding-To-Production</h5>
                      <p>
                        Experience a smooth and swift transition from onboarding
                        to full-scale production. Our streamlined processes
                        ensure that new hires are quickly integrated into your
                        projects, minimizing downtime and maximizing
                        productivity right from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div
              className="zixi_choice_img"
              data-aos="zoom-in-up"
              data-aos-delay="2000"
            >
              <img
                src={assetsObj.choiceMidImg}
                alt="choiceMidImg"
                className="img-fluid"
              />
            </div>
            <Row>
              <Col xs={12} lg={6}>
                {/* Third card */}
                <div
                  className="choice_card third_choice_card position-relative"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <div className="choice_card_content_wrap">
                    <h5 className="choice_card_points">03</h5>
                    <div className="choice_card_desc">
                      <h5>Fast Onboarding-To-Production</h5>
                      <p>
                        Experience a smooth and swift transition from onboarding
                        to full-scale production. Our streamlined processes
                        ensure that new hires are quickly integrated into your
                        projects, minimizing downtime and maximizing
                        productivity right from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                {/* Four card */}
                <div
                  className="choice_card fourth_choice_card position-relative"
                  data-aos="fade-left"
                  data-aos-delay="1500"
                >
                  <div className="choice_card_content_wrap ms-auto">
                    <h5 className="choice_card_points">04</h5>
                    <div className="choice_card_desc">
                      <h5>Fast Onboarding-To-Production</h5>
                      <p>
                        Experience a smooth and swift transition from onboarding
                        to full-scale production. Our streamlined processes
                        ensure that new hires are quickly integrated into your
                        projects, minimizing downtime and maximizing
                        productivity right from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ZixiSoftRightChoice;
