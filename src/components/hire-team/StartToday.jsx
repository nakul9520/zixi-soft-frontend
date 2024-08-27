import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CMButton from "../common/CMButton";

const StartToday = () => {
  return (
    <>
      <section className="start_today">
        <Container fluid>
          <div
            className="content_wrapper"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(123, 86, 157, 0.8) 0%, rgba(52, 100, 152, 0.8) 100%),url(${assetsObj.StartTodayBG})`,
            }}
          >
            <Row>
              <Col md={12}>
                <div className="text-center p-3 p-md-5 gap-3">
                  <h3 className="text-light mb-5">
                    Start Hiring Software Developers Today
                  </h3>
                  <CMButton className="rounded-5">Hire Your Team</CMButton>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartToday;
