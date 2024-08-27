import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer = () => {
  const expertiseData = [
    "Hire Web App Developers",
    "Hire Java Developers",
    "Hire PHP Developers",
    "Hire .Net Developers",
    "Hire NodeJs Developers",
    "Hire Software Developers",
  ];
  const expertiseData1 = [
    "Hire Mobile App Developers",
    "Hire Flutter Developers",
    "Hire Python Developers",
    "Hire Ionic Developers",
    "Hire React Developers",
    "Hire Dedicated Developers",
  ];
  return (
    <>
      <div className="footer_section">
        <div className="footer_wrap">
          <Container>
            <Row>
              <Col xs={12} className="border-bottom">
                <Stack direction="horizontal" className="align-items-start">
                  <div className="expertise_wrap pt-5">
                    <h5>Expertise</h5>
                    <Stack
                      direction="horizontal"
                      className="flex-wrap border-bottom py-4"
                      gap={3}
                    >
                      {map(expertiseData, (item, i) => (
                        <React.Fragment key={i}>
                          <p>{item}</p>
                          <div className="vr" />
                        </React.Fragment>
                      ))}
                    </Stack>
                    <Stack
                      direction="horizontal"
                      className="flex-wrap py-4"
                      gap={3}
                    >
                      {map(expertiseData1, (item, i) => (
                        <React.Fragment key={i}>
                          <p>{item}</p>
                          <div className="vr" />
                        </React.Fragment>
                      ))}
                    </Stack>
    
                  </div>
                  <div className="vr" />
                  <div className="about_wrap border-bottom pt-5">
                    <h5 className="ps-4">About</h5>
                    <p className="ps-4">
                      We are an IT company offering a suite of web & mobile
                      application development services for diverse industry
                      verticals. Our breakthrough solutions, developed with the
                      help of cutting-edge AI technologies, empower businesses
                      to unlock new possibilities and gain a competitive edge.
                    </p>
                    <Stack
                      direction="horizontal"
                      className="footer_social_icon_wrap flex-wrap py-4 border-top ps-4"
                      gap={3}
                    >
                      <div className="footer_social_icon">
                        <img
                          src={assetsObj.facebookIcon}
                          className="img-fluid"
                          alt="facebookIcon"
                        />
                      </div>
                      <div className="footer_social_icon">
                        <img
                          src={assetsObj.instagramIcon}
                          alt="instagramIcon"
                          className="img-fluid"
                        />
                      </div>
                      <div className="footer_social_icon">
                        <img
                          src={assetsObj.youtubeIcon}
                          alt="youtubeIcon"
                          className="img-fluid"
                        />
                      </div>
                      <div className="footer_social_icon">
                        <img
                          src={assetsObj.linkedinIcon}
                          alt="linkedinIconIcon"
                          className="img-fluid"
                        />
                      </div>
                    </Stack>
                  </div>
                </Stack>
              </Col>
              <Col xs={12} className="py-4 border-bottom">
                <div className="footer_meetup">
                  <h4>Let’s meetup</h4>
                  <Stack direction="horizontal" className="flex-wrap" gap={3}>
                    <div>
                      <span className="me-3">
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                      <span>
                        It is a long established fact that a reader will be
                        distracted by the readable layout.
                      </span>
                    </div>{" "}
                    <div className="vr" />
                    <div>
                      <span className="me-3">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <span>contact@zixisoft.com</span>
                    </div>
                    <div className="vr" />
                    <div>
                      <span className="me-3">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <span>+91 0987654321</span>
                    </div>
                  </Stack>
                </div>
              </Col>
              <Col xs={12} className="py-4">
                <Stack
                  direction="horizontal"
                  className="flex-wrap footer_menus"
                  gap={3}
                >
                  <p>Clients</p>
                  <div className="vr" />
                  <p>blog</p>
                  <div className="vr" />
                  <p>Clients</p>
                  <div className="vr" />
                  <p>Contact</p>
                  <div className="vr" />
                  <p>Case Studies</p>
                  <div className="vr" />
                  <p>Privacy Policy</p>
                  <div className="vr" />
                  <p>faq</p>
                </Stack>
              </Col>
            </Row>
          </Container>
          <div className="copyright_part">
            <p className="mb-0">
              Copyright © 2024 by ZIXISOFT. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
