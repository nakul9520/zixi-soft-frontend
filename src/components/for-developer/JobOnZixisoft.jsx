import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const JobOnZixisoft = () => {
  return (
    <>
      <section
        className="Jobon_zixi_soft_section py-5 my-3"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8)),url(${assetsObj.techImage})`,
        }}
      >
        <Container>
          <div className="common_heading text-center">
            <h3 className="text-white">Job On Zixisoft</h3>
          </div>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={5}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobOnZixisoft;
