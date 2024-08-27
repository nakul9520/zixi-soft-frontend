import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MatchingProcess = () => {
  return (
    <>
      <section className="matching_process_section pt-4 pb-5">
        <Container>
          <Row>
            <Col xs={6}>
              <div className="">
                <h3>Matching Process</h3>
                <p>Ensure you onboard the right talent every time.</p>
              </div>
              <div className="matching_process_points">
                <div className="day_box_design">
                  <h5 className="gradient_heading1 mb-0">Day 01</h5>
                  <p className="mb-0 fw-bold">Share your requirements</p>
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
