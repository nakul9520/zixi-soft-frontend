import { assetsObj } from "@/utils/Images";
import React from "react";
import { Form, Col, Container, Row, Stack } from "react-bootstrap";

import "../../styles/hireteam.css";
import CMButton from "../common/CMButton";
import { useNavigate } from "react-router-dom";

const AgencySignup = () => {
  const navigate = useNavigate();
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
                  className="mb-5 logo_img cursor-pointer"
                  onClick={() => navigate("/")}
                />
                <Row>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Full Name</span>
                    </label>
                  </Col>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Company Name</span>
                    </label>
                  </Col>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder="" />
                      <span>Website URL</span>
                    </label>
                  </Col>{" "}
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder="" />
                      <span>Address</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " type="email" />
                      <span>Work Email</span>
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
                      <input placeholder=" " type="password" />
                      <span>Password</span>
                    </label>
                  </Col>{" "}
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " type="password" />
                      <span>Confirm Password</span>
                    </label>
                  </Col>
                  <Col xs={12} className="text-center mt-4">
                    <CMButton variant="contained" color="primary">
                      Create Employer Account
                    </CMButton>
                  </Col>
                </Row>

                <h6 className="text_dark_light my-5 text-center fw-medium">
                  Already have an account? {""}
                  <strong
                    className="text-decoration-underline secondary_font"
                    style={{ fontWeight: 800 }}
                  >
                    Login
                  </strong>
                </h6>
                <p className="body2 text_dark_light my-5 text-center">
                  By Completing the Sign up form, you’re agreeing to ZIXISOFT{" "}
                  {""}
                  <strong className="text-decoration-underline secondary_font text_primary">
                    Terms & Conditionṅ
                  </strong>
                </p>
              </div>
            </Col>
            <Col md={6} className="pe-0">
              <div className="right_block pe-0 h-100 ">
                <div className="pe-1">
                  <h3 className="main_heading text-white mb-4">
                    Welcome to <span className="text_primary">Z</span><span>IXISOFT</span>{" "}
                  </h3>
                  <p className="text-light body1 fw-normal mb-3">
                    Post a job and find your next hire.
                  </p>
                </div>
                <div className="text-end">
                  <img
                    src={assetsObj.agencySignupImg}
                    alt="Login image"
                    className="w-100"
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

export default AgencySignup;
