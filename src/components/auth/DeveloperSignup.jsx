import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import "../../styles/hireteam.css";
import CMButton from "../common/CMButton";

const DeveloperSignup = () => {
  return (
    <>
      <section className="developer_signup_section">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col md={6}>
              <div className="py-5">
                <img
                  src={assetsObj.logo}
                  alt="logo"
                  className="mb-5 logo_img"
                />
                <Row>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Full Name</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " type="email" />
                      <span>Email</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " type="password" />
                      <span>Password</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Phone Number</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Current Job Role</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Current Location</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Years of work experience</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Current annual salary</span>
                    </label>
                  </Col>
                </Row>

                <div className="text-center">
                  <CMButton
                    variant="contained"
                    color="primary"
                    style={{ width: "80%" }}
                  >
                    Register
                  </CMButton>
                </div>
                <p className="body2 text_dark_light my-5 text-center">
                  By opting to join, you are consenting to the ZIXISOFT{" "}
                  <strong>Terms of Service</strong> and acknowledging your
                  willingness to receive periodic emails from us
                </p>
              </div>
            </Col>
            <Col md={6} className="pe-0">
              <div className="right_block pe-0 h-100 ">
                <div className="pe-1">
                  <h4 className="text-light mb-3">Start Your Journey Today</h4>
                  <p className="text-light body1 fw-normal mb-3">
                    Join India's top talent network and secure rewarding,
                    long-term job opportunities
                  </p>
                  <p className="text-light body1 fw-normal mb-5">
                    Already have an account?{" "}
                    <strong className="text-decoration-underline">Login</strong>
                  </p>
                </div>
                <div className="text-end">
                  <img
                    src={assetsObj.developerBG}
                    alt="Login image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DeveloperSignup;
