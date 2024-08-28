import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MatchingProcess = () => {
  return (
    <>
      <section className="matching_process_section pt-4 pb-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={6}>
              <div className="">
                <h3>Matching Process</h3>
                <p>Ensure you onboard the right talent every time.</p>
              </div>
              <div className="matching_process_points">
                <div className="day_box_design position-relative mb-2">
                  <img
                    src={assetsObj.dayLayerActive}
                    alt="dayLayerActive"
                    className="img-fluid"
                  />
                  <div className="day_box_point_content">
                    <h5 className="gradient_heading1 mb-0">Day 01</h5>
                    <p className="mb-0 fw-bold">Share your requirements</p>
                  </div>
                </div>
                <div className="day_box_design position-relative mb-2">
                  <img
                    src={assetsObj.dayLayerDeActive}
                    alt="dayLayerActive"
                    className="img-fluid"
                  />
                  <div className="day_box_point_content">
                    <h5 className="gradient_heading1 mb-0">Day 02</h5>
                    <p className="mb-0 fw-bold">Share your requirements</p>
                  </div>
                </div>{" "}
                <div className="day_box_design position-relative mb-2">
                  <img
                    src={assetsObj.dayLayerDeActive}
                    alt="dayLayerActive"
                    className="img-fluid"
                  />
                  <div className="day_box_point_content">
                    <h5 className="gradient_heading1 mb-0">Day 02</h5>
                    <p className="mb-0 fw-bold">Share your requirements</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }}>
              <div class="card border-0 shadow rounded-4">
                <div class="card-body p-4">
                  <div className="top_clip">
                    <img
                      src={assetsObj.clipIcon1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h5 class="card-title">
                    Launch Zixisoft’s Personalized Matching Process
                  </h5>
                  <p class="card-text">
                    Schedule a quick call with one of our Matching Experts. They
                    will create a tailored candidate list and conduct
                    pre-interviews to ensure every candidate perfectly matches
                    your needs.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MatchingProcess;
