import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HireDevelopers = () => {
  return (
    <>
      <section className="hire_developer_section pt-4 pb-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="common_heading text-center">
                <h3>Hire Developers From Us</h3>
                <p>
                  If not satisfied, choose another resource that meets your
                  needs.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col xs={7}>
              <Row>
                <Col xs={6}>
                  <div className="hire_dev_content_wrap">
                    <div className="hire_dev_card_img">
                      <img
                        src={assetsObj.share_social_icon}
                        alt="share_social_icon"
                        className="img-fluid"
                      />
                    </div>
                    <h5>Share Requirements</h5>
                    <p className="body1 fw-bolder">
                      Share your ideas, requirements, and vision. Your
                      information is kept confidential.
                    </p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="hire_dev_content_wrap">
                    <div className="hire_dev_card_img">
                      <img
                        src={assetsObj.profile_group_icon}
                        alt="profile_group_icon"
                        className="img-fluid"
                      />
                    </div>
                    <h5>Candidate Shortlisting</h5>
                    <p className="body1 fw-bolder">
                      We provide a list of eligible candidates that best match
                      your requirements. Choose the ones you think are suitable
                      for your project.
                    </p>
                  </div>
                </Col>{" "}
                <Col xs={6}>
                  <div className="hire_dev_content_wrap">
                    <div className="hire_dev_card_img">
                      <img
                        src={assetsObj.employment_meeting_icon}
                        alt="employment_meeting_icon"
                        className="img-fluid"
                      />
                    </div>
                    <h5>Take Interviews</h5>
                    <p className="body1 fw-bolder">
                      Conduct interviews of selected candidates to ensure their
                      skills and experience align with your project
                      requirements.
                    </p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="hire_dev_content_wrap">
                    <div className="hire_dev_card_img">
                      <img
                        src={assetsObj.handshake_agreement_icon}
                        alt="handshake_agreement_icon"
                        className="img-fluid"
                      />
                    </div>
                    <h5>Onboarding</h5>
                    <p className="body1 fw-bolder">
                      After selection, onboard the developer and assign tasks to
                      witness impressive results.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={5}>
              <div className="hire_dev_right">
                <div className="hire_dev_img_wrap position-relative z-3">
                  <img
                    src={assetsObj.hireDevImg1}
                    alt="hire-dev-img-1"
                    className="hire_dev_img1 img-fluid"
                  />
                  <img
                    src={assetsObj.hireDevImg2}
                    alt="hire-dev-img-2"
                    className="hire_dev_img2 img-fluid"
                  />
                </div>
                <img
                  src={assetsObj.yellowBorderGradient}
                  alt="yellowBorderGradient"
                  className="img-fluid yellow_border_gradient"
                />
                <img
                  src={assetsObj.blueBorderGradient}
                  alt="blueBorderGradient"
                  className="img-fluid blue_border_gradient"
                />
                <img
                  src={assetsObj.purpleBorderGradient}
                  alt="purpleBorderGradient"
                  className="img-fluid purple_border_gradient"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HireDevelopers;
