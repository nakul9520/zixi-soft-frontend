import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import PrimaryButton from "../common/PrimaryButton";

const About = () => {
  return (
    <>
      <section className="about_section">
        <div className="about_bg_img position-absolute">
          <img
            src={assetsObj.logo_first_letter}
            className="img-fluid"
            alt="logo_first_letter"
          />
        </div>
        <Container fluid>
          <Row>
            <Col xs={4}>
              <div>
                <h3>Why companies choose Sourcebae</h3>
              </div>
            </Col>
            <Col xs={{ span: 6, offset: 2 }}>
              <p className="subtitle1">
                SourceBae will help you find the best tech experts; Our AI tools
                ensure candidate's skills and experience to build a professional
                team for you. We have advanced technology and a network to make
                your hiring process streamlined.
              </p>
              <div className="about_btn">
                <PrimaryButton
                  btnLabel="Learn more about"
                  endIcon={<i className="bi bi-arrow-right"></i>}
                />
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={4}>
              <div className="about_statics text-center">
                <h3 className="fw-bold">250+</h3>
                <p>Customer Service</p>
              </div>
            </Col>
          </Row> */}
          <Stack
            direction="horizontal"
            gap={3}
            className="about_statics_wrap justify-content-between pt-5"
          >
            <div className="about_statics text-center">
              <h3 className="fw-bold">250+</h3>
              <p>Customer Service</p>
            </div>{" "}
            <div className="about_statics text-center">
              <h3 className="fw-bold">250+</h3>
              <p>Customer Service</p>
            </div>{" "}
            <div className="about_statics text-center">
              <h3 className="fw-bold">250+</h3>
              <p>Customer Service</p>
            </div>
            <div className="about_statics text-center">
              <h3 className="fw-bold">250+</h3>
              <p>Customer Service</p>
            </div>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default About;
