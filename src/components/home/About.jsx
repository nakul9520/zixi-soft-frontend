import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import PrimaryButton from "../common/PrimaryButton";

const About = () => {
  return (
    <>
      <section className="about_section py-5">
        <div className="about_bg_img position-absolute">
          <img
            src={assetsObj.logo_first_letter}
            className="img-fluid"
            alt="logo_first_letter"
          />
        </div>
        <Container fluid="md">
          <Row>
            <Col xs={12} sm={4} data-aos="fade-up" data-aos-duration="3000">
              <div>
                <h3>Why companies choose Sourcebae</h3>
              </div>
            </Col>
            <Col
              xs={12}
              sm={{ span: 7, offset: 1 }}
              md={{ span: 6, offset: 2 }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p className="subtitle1">
                SourceBae will help you find the best tech experts; Our AI tools
                ensure candidate's skills and experience to build a professional
                team for you. We have advanced technology and a network to make
                your hiring process streamlined.
              </p>
              <div className="about_btn">
                <PrimaryButton
                  btnLabel="Learn more about"
                  endIcon={<i class="bi bi-arrow-right"></i>}
                />
              </div>
            </Col>

            <Col xs={12}>
              <Stack
                direction="horizontal"
                gap={3}
                className="about_statics_wrap justify-content-between pt-5"
              >
                <div
                  className="about_statics text-center"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div>
                    <h3 className="fw-bold">150+</h3>
                    <p>Clients Trust Us Worldwide</p>
                  </div>
                </div>{" "}
                <div
                  className="about_statics text-center"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <h3 className="fw-bold">3000+</h3>
                  <p>Tech Expert Community</p>
                </div>{" "}
                <div
                  className="about_statics text-center"
                  data-aos="fade-left"
                  data-aos-delay="900"
                >
                  <h3 className="fw-bold">8+ Years</h3>
                  <p>Expertise</p>
                </div>
                <div
                  className="about_statics text-center"
                  data-aos="fade-left"
                  data-aos-delay="1300"
                >
                  <h3 className="fw-bold">5+</h3>
                  <p>Offices Across the Globe</p>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
