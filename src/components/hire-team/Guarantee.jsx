import { assetsObj } from "@/utils/Images";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Guarantee = () => {
  return (
    <>
      <section className="guarantee_section">
        <Container fluid="lg">
          <h2 className="text-center">The Zixisoft Guarantee</h2>
          <h5 className="text-center mb-5">
            Outsourcing made safe and secure.
          </h5>
          <Row>
            <Col sm={6} md={4} className="card_wrapper">
              <Card
                className="guarantee_card mb-4"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <div className="top_wrapper">
                  <img src={assetsObj.trailIcon} alt="icons" />
                  <h4 className="text-light fw-normal secondary_font">
                    1-month trial
                  </h4>
                </div>
                <Card.Body>
                  <p className="subtitle1 mb-0">
                    Terminate your engagement anytime within the first month.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              sm={6}
              md={4}
              className="card_wrapper"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Card className="guarantee_card mb-4">
                <div className="top_wrapper">
                  <img src={assetsObj.moneyBack} alt="icons" />
                  <h4 className="text-light fw-normal secondary_font">
                    Money-back
                  </h4>
                </div>
                <Card.Body>
                  <p className="subtitle1 mb-0">
                    Enjoy a risk-free experience with our satisfaction-based
                    refund policy.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="card_wrapper">
              <Card
                className="guarantee_card mb-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="top_wrapper">
                  <img src={assetsObj.freeReplacement} alt="icons" />
                  <h4 className="text-light fw-normal secondary_font">
                    Free replacements
                  </h4>
                </div>
                <Card.Body>
                  <p className="subtitle1 mb-0">
                    If you’re not satisfied, replace a developer within 2 weeks
                    at no extra cost.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Guarantee;
