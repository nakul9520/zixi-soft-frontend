import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import { Icon } from "@iconify/react";
import Iconify from "../common/iconify";
import Form from "react-bootstrap/Form";
import CMButton from "../common/CMButton";

const ContactUs = () => {
  return (
    <>
      <section className="contactus_section">
        <Container>
          <div className="common_heading mb-4 text-center">
            <h3 className="mb-3">We’re Excited to Hear From You</h3>
          </div>
          <Row className="">
            <Col xs={5}>
              <div className="cantact_points_wrap">
                <div className="cantact_point">
                  <span>01</span>
                  <div className="cantact_point_info mb-4   ">
                    <h6>Provide Your Details</h6>
                    <p className="body1">
                      Receive Customized Solutions, Recommendations, and
                      Estimates. Guaranteed Confidentiality and Same-Day
                      Response!"**
                    </p>
                  </div>
                </div>
                <div className="cantact_point">
                  <span>02</span>
                  <div className="cantact_point_info">
                    <h6>Next Steps?</h6>
                    <p className="body1">
                      Our solution specialists will schedule a secure online
                      meeting to provide answers and clarity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="consultant_info d-flex align-item-center gap-3 mt-5">
                <div className="consultant_img">
                  <img src={assetsObj.avatar2} alt="" className="img-fluid" />
                </div>
                <div>
                  <h5>Priti S</h5>
                  <p>Technology Consultant</p>
                  <PrimaryButton
                    btnLabel="Schedule A Call"
                    startIcon={<Iconify icon="mingcute:phone-call-fill" />}
                  />
                </div>
              </div>
            </Col>
            <Col xs={7}>
              <div className="consultant_contact_form">
                <div className="card">
                  <div className="card-body">
                    <Form>
                      <Row>
                        <Col xs={6} className="mb-3">
                          <Form.Label className="fw-bold">Full Name</Form.Label>
                          <Form.Control type="text" />
                        </Col>{" "}
                        <Col xs={6} className="mb-3">
                          <Form.Label className="fw-bold">
                            Email Address
                          </Form.Label>
                          <Form.Control type="email" />
                        </Col>{" "}
                        <Col xs={6} className="mb-3">
                          <Form.Label className="fw-bold">Company</Form.Label>
                          <Form.Control type="text" />
                        </Col>{" "}
                        <Col xs={6} className="mb-3">
                          <Form.Label className="fw-bold">
                            Phone Number
                          </Form.Label>
                          <Form.Control type="phone" />
                        </Col>{" "}
                        <Col xs={12} className="mb-3">
                          <Form.Label className="fw-bold">
                            Brief About the Project
                          </Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Col>
                        <Col xs={12} className="text-right">
                          <CMButton>Submit</CMButton>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
