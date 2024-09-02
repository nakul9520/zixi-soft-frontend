import { assetsObj } from "@/utils/Images";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CMButton from "../common/CMButton";
import ScheduleCallModel from "./hire-team-modal/ScheduleCallModel";

const ScheduleCall = () => {
  const [openScheduleCallModal, setOpenScheduleCallModal] = useState(false);

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
                <div className="d-flex align-items-start justify-content-center  h-100 flex-column p-lg-5 p-sm-2 p-3 gap-3">
                  <h3 className="text-light">
                    Ready to hire talent smarter and more efficiently with
                    Zixisoft?
                  </h3>
                  <CMButton
                    className="rounded-5"
                    onClick={() => setOpenScheduleCallModal(true)}
                  >
                    Schedule Call
                  </CMButton>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <img
                  src={assetsObj.scheduleCallImage}
                  alt="vector call image"
                  className="w-75 w-md-100 h-100 mx-auto"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ScheduleCallModel
        open={openScheduleCallModal}
        handleClose={() => setOpenScheduleCallModal(false)}
      />
    </>
  );
};

export default ScheduleCall;
