import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ApplyForJob = () => {
  return (
    <>
      <section className="apply_for_job_section pt-4 pb-5">
        <Container>
          <div className="common_heading text-center">
            <h3>How to Apply for Amazing Dream Jobs?</h3>
          </div>
          <Row>
            <Col xs={12}>
              <div className="apply_job_process_cards_wrap d-flex flex-wrap">
                <div className="apply_job_process_card">
                  <div className="apply_job_process_card_content">
                    <h5 className="fw-bold">01</h5>
                    <div>
                      <h6>Register for free</h6>
                      <p>
                        Create a profile and showcase your skills to connect
                        with top remote opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="skyblue_black_shade apply_job_icon_design">
                    <img
                      src={assetsObj.learning_system_icon}
                      alt="img-fluid"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="apply_job_process_card">
                  <div className="apply_job_process_card_content">
                    <h5 className="fw-bold">02</h5>
                    <div>
                      <h6>Find matching opportunities</h6>
                      <p>
                        Browse through open jobs to find the ones that best
                        match your skills and career goals.
                      </p>
                    </div>
                  </div>
                  <div className="orange_black_shade apply_job_icon_design">
                    <img
                      src={assetsObj.globe_person_icon}
                      alt="img-fluid"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="apply_job_process_card">
                  <div className="apply_job_process_card_content">
                    <h5 className="fw-bold">03</h5>
                    <div>
                      <h6>Clear assessments</h6>
                      <p>
                        Successfully pass technical, communication, and other
                        relevant assessments.
                      </p>
                    </div>
                  </div>
                  <div className="yellow_black_shade apply_job_icon_design">
                    <img
                      src={assetsObj.online_examination_icon}
                      alt="img-fluid"
                      className="img-fluid"
                    />
                  </div>
                </div>{" "}
                <div className="apply_job_process_card">
                  <div className="apply_job_process_card_content">
                    <h5 className="fw-bold">04</h5>
                    <div>
                      <h6>Matchmaking with Opportunities</h6>
                      <p>
                        If shortlisted, our team will guide you through
                        preparing for your interview with the client company.
                      </p>
                    </div>
                  </div>
                  <div className="blue_black_shade apply_job_icon_design">
                    <img
                      src={assetsObj.handshake_icon}
                      alt="img-fluid"
                      className="img-fluid"
                    />
                  </div>
                </div>{" "}
                <div className="apply_job_process_card">
                  <div className="apply_job_process_card_content">
                    <h5 className="fw-bold">05</h5>
                    <div>
                      <h6>Accelerate your career</h6>
                      <p>
                        Crack the interview, and our Talent Success Coaches will
                        support you throughout your engagement.
                      </p>
                    </div>
                  </div>
                  <div className="darkBlue_black_shade apply_job_icon_design">
                    <img
                      src={assetsObj.analytics_growth_icon}
                      alt="img-fluid"
                      className="img-fluid"
                    />
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

export default ApplyForJob;
