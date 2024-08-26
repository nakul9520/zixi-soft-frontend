import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrimaryButton from "../PrimaryButton";
import { assetsObj } from "@/utils/Images";

const ClientServe = () => {
  return (
    <>
      <section className="client_serve_section py-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="common_heading text-center">
                <h3>We Serve our clients in 3 ways</h3>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={6}>
              <div className="client_serve_points">
                <h6>Project based work</h6>
                <ul>
                  <li>Early stage startups</li>
                  <li>MVPs</li>
                  <li>Finish a feature</li>
                  <li>Design work</li>
                  <li>Prototypes / Proof of concept</li>
                </ul>
                <div className="client_points_btn">
                  <PrimaryButton btnLabel="Scope your project" />
                </div>
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col xs={5}>
              <div className="client_serve_img">
                <img
                  src={assetsObj.client_img1}
                  className="img-fluid"
                  alt="client serve image"
                />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={5}>
              <div className="client_serve_img">
                <img
                  src={assetsObj.client_img1}
                  className="img-fluid"
                  alt="client serve image"
                />
              </div>
            </Col>
            <Col xs={2}></Col>
            <Col xs={{ span: 5 }}>
              <div className="client_serve_points">
                <h6>Dedicated team</h6>
                <ul>
                  <li>Funded startups</li>
                  <li>Enterprise</li>
                  <li>Working on a live product</li>
                  <li>Minimal/no in-house team</li>
                  <li>No in-house hiring infrastructure</li>
                </ul>
                <div className="client_points_btn">
                  <PrimaryButton btnLabel="Hire teams" />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={6}>
              <div className="client_serve_points">
                <h6>Staff Augmentation</h6>
                <ul>
                  <li>Funded startups</li>
                  <li>Enterprise</li>
                  <li>Need faster output</li>
                  <li>In-house team needs help</li>
                  <li>Need to scale quickly</li>
                </ul>
                <div className="client_points_btn">
                  <PrimaryButton btnLabel="Hire resources" />
                </div>
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col xs={5}>
              <div className="client_serve_img">
                <img
                  src={assetsObj.client_img1}
                  className="img-fluid"
                  alt="client serve image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientServe;
