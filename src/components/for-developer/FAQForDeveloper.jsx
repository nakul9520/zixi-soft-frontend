import { assetsObj } from "@/utils/Images";
import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

const FAQForDeveloper = () => {
  return (
    <>
      <section className="faq_for_developer_section py-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={1}></Col>
            <Col xs={11}>
              <Row>
                <Card className="position-relative">
                  <div
                    className="hire_faq_card px-3 py-5 rounded-4"
                    style={{
                      backgroundImage: `URL(${assetsObj.scheduleCallBG})`,
                    }}
                  >
                    <h5 className="primary-font text-white">Trusted</h5>
                    <h5 className="primary-font text-danger">
                      Product Development
                    </h5>
                    <h5 className="primary-font text-white">
                      Company. Since 2002.
                    </h5>
                    <p className="text-white body2">
                      Classic Informatics teams up with Startups, SMEs &
                      Enterprises to build and deliver user-centric products and
                      solutions.
                    </p>
                    <p className="text-white body2">
                      We do it by infusing our technical expertise with design
                      thinking, enabling businesses to transform the way they
                      work.
                    </p>
                  </div>
                  <Col xs={{ span: 11, offset: 1 }}>
                    <Card.Body>
                      <div className="faq_wrap">
                        <p className="text-uppercase text-danger fw-semibold">
                          FREQUENTLY ASKED QUESTIONS
                        </p>
                        <h5>Find Answers To Your Common Concerns</h5>

                        <div className="faq_accordian">
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                Why should I consider joining ZIXISOFT?
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                What qualities does ZIXISOFT seek in developers?
                              </Accordion.Header>
                              <Accordion.Body>
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                Why should I consider joining ZIXISOFT?
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                What qualities does ZIXISOFT seek in developers?
                              </Accordion.Header>
                              <Accordion.Body>
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                Why should I consider joining ZIXISOFT?
                              </Accordion.Header>
                              <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                What qualities does ZIXISOFT seek in developers?
                              </Accordion.Header>
                              <Accordion.Body>
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQForDeveloper;
