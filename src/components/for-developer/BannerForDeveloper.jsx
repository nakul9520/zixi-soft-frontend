import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CMButton from "../common/CMButton";

const BannerForDeveloper = () => {
  return (
    <>
      <section
        className="hire_team_banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${assetsObj.forDevBg})` }}
      >
        <Container fluid="md" className="h-100">
          <Row className="align-items-center h-100">
            <Col md={6}>
              <div className="for_dev_banner_content">
                <span>{`<FOR DEVELOPERS/>`} </span>
                <h2>Work with Top </h2>
                <h2 className="gradient_heading">Global Clients</h2>
                <p>
                  Collaborate on exciting projects that challenge and expand
                  your skills.
                </p>
                <div className="for_dev_email_input">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter your Email"
                    />
                    <CMButton variant="outline-secondary" className="rounded-1">
                      Apply Today
                    </CMButton>
                  </InputGroup>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="position-relative h-100 d-flex align-items-end justify-content-md-end flex-column "
            >
              <img
                src={assetsObj.girlWithLaptop}
                className="img-fluid for_dev_banner_img"
                alt="hire team banner"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BannerForDeveloper;
