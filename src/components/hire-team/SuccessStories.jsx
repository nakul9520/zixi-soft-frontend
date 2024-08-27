import { assetsObj } from "@/utils/Images";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const SuccessStories = () => {
  return (
    <>
      <section className="success_stories_section">
        <Container fluid="lg">
          <h3 className="text-center">
            Why Employers Rely on Us—Read Their Success Stories!
          </h3>
          <p className="body1 text-center mb-5">
            Discover why leading employers trust us for their hiring needs. Our
            success stories showcase how we deliver exceptional talent and
            results every time.
          </p>
          <Row>
            <Col>
              <Card className="guarantee_card">
                <Card.Body>
                  <div className="d-flex align-items-center gap-2">
                    <div className="img_wrapper">
                      <img
                        src={assetsObj.trailIcon}
                        alt="icons"
                        className="w-100 h-100"
                      />
                    </div>
                    <div>
                      <h6 className="text-light fw-normal secondary_font">
                        1-month trial
                      </h6>
                      <p className="body1 mb-0">
                        HR Manager at TechMinds Solutions
                      </p>
                    </div>
                  </div>
                  <p className="body1 mb-0">
                    HR Manager at TechMinds Solutions
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

export default SuccessStories;
