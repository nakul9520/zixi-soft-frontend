import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const JoinUsSection = () => {
  return (
    <>
      <section className="joinus_section">
        <Container>
          <div className="common_heading mb-4 text-center">
            <h3 className="mb-3">
              Explore Your New Opportunities with Zixisoft
            </h3>
            <p className="body2">
              Grow professionally by tackling global projects, with the added
              benefit of remote work
            </p>
          </div>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} sm={6}>
              <div className="opportunities_points_wrap">
                <div className="opportunities_point">
                  <div className="opportunities_point_number">
                    <span>01</span>
                  </div>
                  <p className="body1">
                    Create your profile and detail your qualifications and
                    skills.
                  </p>
                </div>{" "}
                <div className="opportunities_point">
                  <div className="opportunities_point_number">
                    <span>02</span>
                  </div>
                  <p className="body1">
                    Increase your visibility to recruiters and receive multiple
                    job offers.
                  </p>
                </div>
                <div className="opportunities_point">
                  <div className="opportunities_point_number">
                    <span>03</span>
                  </div>
                  <p className="body1">
                    Start your dream position and achieve career growth.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="joinus_right position-relative">
                <div className="joinus_img_wrap position-relative z-2">
                  <img
                    src={assetsObj.workingEmpImg}
                    alt="language chart"
                    className="img-fluid w-100"
                  />
                </div>
                <img
                  src={assetsObj.ellipseBluepink}
                  alt="ellipseBluepink"
                  className="img-fluid ellipse_purle"
                />
                <img
                  src={assetsObj.ellipseGreen}
                  alt="ellipseGreen"
                  className="img-fluid ellipse_green"
                />
                <img
                  src={assetsObj.rectangleYellowLayer}
                  alt="rectangleYellowLayer"
                  className="img-fluid rectangle_yellow_layer"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JoinUsSection;
