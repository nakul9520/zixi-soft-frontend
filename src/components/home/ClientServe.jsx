import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import PrimaryButton from "../common/PrimaryButton";
import CMButton from "../common/CMButton";

const ClientServe = () => {
  return (
    <>
      <section className="client_serve_section py-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="common_heading text-center mb-5">
                <h3>We Serve our clients in 3 ways</h3>
              </div>
            </Col>
          </Row>
          <div className="clent_serve_content_wrap">
            <Row>
              <Col xs={12} sm={6} lg={{ span: 5, offset: 1 }} className="mb-5">
                <div
                  className="client_serve_points"
                  data-aos="fade-right"
                  data-aos-delay="50"
                >
                  <h6>Project based work</h6>
                  <ul>
                    <li>Early stage startups</li>
                    <li>MVPs</li>
                    <li>Finish a feature</li>
                    <li>Design work</li>
                    <li>Prototypes / Proof of concept</li>
                  </ul>
                  <div className="client_points_btn">
                    <CMButton variant="outlined" className="rounded-5">
                      Scope your project
                    </CMButton>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={5} className="mb-5">
                <div
                  className="client_serve_img_wrap position-relative"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <img
                    src={assetsObj.client_img1}
                    className="img-fluid client_serve_img position-relative z-2 rounded-4"
                    alt="client serve image"
                  />
                  <div>
                    <img
                      src={assetsObj.ellipseBluePinkSmall}
                      alt="ellipseBluePinkSmall"
                      className="img-fluid ellipse_blue_pink_small bounceRightLeft_animate"
                    />
                  </div>
                  <div>
                    <img
                      src={assetsObj.ellipseGreen}
                      alt="ellipseGreen"
                      className="img-fluid first_ellipse_green bounceTopBottom_animate"
                    />
                  </div>
                  <div>
                    <img
                      src={assetsObj.ellipseYellow}
                      alt="ellipseYellow"
                      className="img-fluid ellipse_yellow bounceTopBottom_animate"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} lg={{ span: 5, offset: 1 }} className="mb-5">
                <div
                  className="client_serve_img_wrap position-relative"
                  data-aos="fade-right"
                  data-aos-delay="50"
                >
                  <img
                    src={assetsObj.client_img1}
                    className="img-fluid client_serve_img position-relative z-2 rounded-4"
                    alt="client serve image"
                  />
                  <div>
                    <img
                      src={assetsObj.ellipseBluepink}
                      alt="ellipseBluepink"
                      className="img-fluid ellipse_blue_pink bounceRightLeft_animate"
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={assetsObj.ellipseYellowSmall}
                      alt="ellipseYellowSmall"
                      className="img-fluid ellipse_yellow_small bounceRightLeft_animate"
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={5} className="mb-5">
                <div
                  className="client_serve_points"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <h6>Dedicated team</h6>
                  <ul>
                    <li>Funded startups</li>
                    <li>Enterprise</li>
                    <li>Working on a live product</li>
                    <li>Minimal/no in-house team</li>
                    <li>No in-house hiring infrastructure</li>
                  </ul>
                  <div className="client_points_btn">
                    <CMButton variant="outlined" className="rounded-5">
                      Hire teams
                    </CMButton>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} lg={{ span: 5, offset: 1 }} className="mb-5">
                <div
                  className="client_serve_points"
                  data-aos="fade-right"
                  data-aos-delay="50"
                >
                  <h6>Staff Augmentation</h6>
                  <ul>
                    <li>Funded startups</li>
                    <li>Enterprise</li>
                    <li>Need faster output</li>
                    <li>In-house team needs help</li>
                    <li>Need to scale quickly</li>
                  </ul>
                  <div className="client_points_btn">
                    <CMButton variant="outlined" className="rounded-5">
                      Hire resources
                    </CMButton>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={5} className="mb-5">
                <div
                  className="client_serve_img_wrap position-relative"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  <img
                    src={assetsObj.client_img1}
                    className="img-fluid client_serve_img position-relative z-2 rounded-4"
                    alt="client serve image"
                  />
                  <div>
                    <img
                      src={assetsObj.ellipseGreen}
                      alt="ellipseGreen"
                      className="img-fluid second_ellipse_green bounceTopBottom_animate"
                    />
                  </div>
                  <div>
                    <img
                      src={assetsObj.ellipseSkyblue}
                      alt="ellipseSkyblue"
                      className="img-fluid ellipse_skyblue bounceRightLeft_animate"
                    />
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

export default ClientServe;
