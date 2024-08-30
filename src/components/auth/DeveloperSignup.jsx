import { assetsObj } from "@/utils/Images";
import React from "react";
import { Form, Col, Container, Row, Stack } from "react-bootstrap";

import "../../styles/hireteam.css";
import CMButton from "../common/CMButton";
import { useNavigate } from "react-router-dom";
import Iconify from "../common/iconify";

const DeveloperSignup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

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
                    <label class="pure-material-textfield-outlined icon-textfield end-icon mb-3">
                      <input
                        placeholder=" "
                        type={showPassword ? "text" : "password"}
                      />
                      <span>Password</span>
                      <div className="icon-wrapper ">
                        <Iconify
                          onClick={() => setShowPassword(!showPassword)}
                          icon={
                            showPassword ? "ion:eye" : "heroicons-solid:eye-off"
                          }
                        />
                      </div>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined start-icon mb-3">
                      <input placeholder=" " />
                      <span>Phone Number</span>
                      <div className="icon-wrapper">+91</div>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Current Job Role</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Current Location</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Years of work experience</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Current annual salary</span>
                    </label>
                  </Col>
                  <Col xs={12}>
                    <div className="file_uploader">
                      <label
                        class="pure-material-textfield-outlined  mb-3"
                        htmlFor="file-input"
                      >
                        <div className="virtual_input">
                          <div className="d-flex align-items-center gap-3">
                            <Iconify icon="bi:upload" />
                            <p className="body1 mb-0 text_label">
                              Upload Resume
                            </p>
                          </div>
                          <p className="body1 fw-normal mb-0 info_label">
                            PDF, DOCX | MAX: 2 MB
                          </p>
                        </div>
                        <input id={`file-input`} accept="image/*" type="file" />
                        <span style={{ fontSize: "16px" }}>
                          Upload Resume{" "}
                          <span
                            style={{
                              fontSize: "10px",
                              lineHeight: 1.8,
                              marginLeft: "5px",
                            }}
                          >
                            (You can edit your profile later)
                          </span>
                        </span>
                      </label>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <h6 className="text_dark_light mb-3">Job Preference</h6>
                    <div
                      key={`default-radio`}
                      className="d-flex align-items-center gap-3 "
                    >
                      <Form.Check
                        type="radio"
                        label="Onsite"
                        name="radioGroup"
                        id="option1"
                      />
                      <Form.Check
                        type="radio"
                        label="Remote"
                        name="radioGroup"
                        id="option2"
                      />
                      <Form.Check
                        type="radio"
                        label="Hybrid"
                        name="radioGroup"
                        id="option2"
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Preferred City </span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <h6 className="text_dark_light mb-3">
                      Do You Have Any Notice Period
                    </h6>
                    <div
                      key={`default-radio`}
                      className="d-flex align-items-center gap-3 "
                    >
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="radioGroup"
                        id="option1"
                      />
                      <Form.Check
                        type="radio"
                        label="Immediate Joiner"
                        name="radioGroup"
                        id="option2"
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <span>Days of Notice Period</span>
                    </label>
                  </Col>
                  <Col xs={12} className="text-center mt-4">
                    <CMButton
                      variant="contained"
                      color="primary"
                      style={{ width: "80%" }}
                    >
                      Register
                    </CMButton>
                  </Col>
                </Row>

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
                  <h3 className="text-light mb-3">Start Your Journey Today</h3>
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
