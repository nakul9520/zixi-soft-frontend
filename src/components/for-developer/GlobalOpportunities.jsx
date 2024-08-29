import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GlobalOpportunities = () => {
  return (
    <>
      <section className="global_opportunity_section py-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} md={6}>
              <h2>Global Opportunities</h2>
              <p>
                Work on cutting-edge projects that push the boundaries of
                technology and innovation.
              </p>
            </Col>
            <Col xs={12} md={6} lg={{ span: 5, offset: 1 }}>
              <video
                className="rounded-4"
                controls
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                width="100%"
              ></video>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GlobalOpportunities;
