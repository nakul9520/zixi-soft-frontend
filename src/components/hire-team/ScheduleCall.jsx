import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CMButton from "../common/CMButton";

const ScheduleCall = () => {
  return (
    <>
      <section className="schedule_call_section">
        <Container fluid>
          <div
            className="content_wrapper"
            style={{ backgroundImage: `url(${assetsObj.scheduleCallBG})` }}
          >
            <Row>
              <Col md={7}>
                <div className="d-flex align-items-start justify-content-center h-100 flex-column p-5 gap-3">
                  <h3 className="text-light">
                    Ready to hire talent smarter and more efficiently with
                    Zixisoft?
                  </h3>
                  <CMButton className="rounded-5">Schedule Call</CMButton>
                </div>
              </Col>
              <Col md={4}>
                <img
                  src={assetsObj.scheduleCallImage}
                  alt="vector call image"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ScheduleCall;
