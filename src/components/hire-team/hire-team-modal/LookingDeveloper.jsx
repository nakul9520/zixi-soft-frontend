import React from "react";
import CMDialoge from "../../common/CMDialoge";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import CMButton from "@/components/common/CMButton";

const LookingDeveloper = (props) => {
  const { open, handleClose } = props;
  return (
    <>
      <CMDialoge
        open={open}
        handleClose={handleClose}
        modal-dialog-scrollable
        // dialogeTitle="sd"
        // closeIcon={<i class="bi bi-x-circle"></i>}
        size="xl"
      >
        <Modal.Body>
          <Container>
            <div className="text-center">
              <h4>
                Looking for vetted developer / offshore development center?
              </h4>
              <p>
                Connect with ZIXISOFT experts to hire remote developer on
                contractual basis.
              </p>
            </div>
            <Row>
              <Col
                xs={12}
                lg={6}
                className="border-end border-xs-end-0 pe-lg-3 pe-xl-5"
              >
                <div className="text-center">
                  <div className="text-center">
                    <img
                      src={assetsObj.logo}
                      alt="logo"
                      className="img-fluid mb-3 w-25"
                    />
                  </div>
                  <img
                    src={assetsObj.bookConsultantClip}
                    alt="clip-art"
                    className="img-fluid w-75"
                  />
                  <CMButton className="rounded-5 my-3">
                    Book Consultation
                  </CMButton>
                  <div className="brand_pramotion">
                    <Row>
                      <Col sm={6}>
                        <div className="brand_promotion_wrap">
                          <img
                            src={assetsObj.googleMiniIcon}
                            alt="google-logo"
                            className="img-fluid"
                          />
                          <p className="mb-0">
                            <img
                              src={assetsObj.ratingFiveStar}
                              alt="five-star-rating"
                              className="img-fluid"
                            />
                            (4.9)
                          </p>
                        </div>
                      </Col>{" "}
                      <Col sm={6}>
                        <div className="brand_promotion_wrap">
                          <img
                            src={assetsObj.clutchLogo}
                            alt="google-logo"
                            className="img-fluid"
                          />
                          <p className="mb-0">
                            <img
                              src={assetsObj.ratingFiveStar}
                              alt="five-star-rating"
                              className="img-fluid"
                            />
                            (4.9)
                          </p>
                        </div>
                      </Col>{" "}
                      <Col sm={6}>
                        <div className="brand_promotion_wrap">
                          <img
                            src={assetsObj.vectorLogo}
                            alt="google-logo"
                            className="img-fluid"
                          />
                          <p className="mb-0">
                            <img
                              src={assetsObj.ratingFiveStar}
                              alt="five-star-rating"
                              className="img-fluid"
                            />
                            (4.9)
                          </p>
                        </div>
                      </Col>{" "}
                      <Col sm={6}>
                        <div className="brand_promotion_wrap">
                          <img
                            src={assetsObj.hundredPlusLogo}
                            alt="google-logo"
                            className="img-fluid"
                          />
                          <p className="mb-0">
                            <img
                              src={assetsObj.ratingFiveStar}
                              alt="five-star-rating"
                              className="img-fluid"
                            />
                            (4.9)
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col xs={12} lg={6}>
                <Row>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Full Name</span>
                    </label>
                  </Col>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " type="email" />
                      <span>Business Email</span>
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
                      <span>Country</span>
                    </label>
                  </Col>
                  <Col sm={6}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <input placeholder=" " />
                      <span>Phone Number</span>
                    </label>
                  </Col>
                  <Col sm={12}>
                    <label class="pure-material-textfield-outlined mb-3">
                      <textarea placeholder=" " as="textarea" />
                      <span>Write message</span>
                    </label>
                  </Col>
                  <Col sm={12}>
                    <p className="text_dark_light mb-3">
                      How did you hear about us?
                    </p>
                    <div
                      key={`default-radio`}
                      className="d-flex align-items-center gap-3 flex-wrap"
                    >
                      <Form.Check
                        type="radio"
                        label="Google"
                        name="radioGroup"
                        id="option1"
                      />
                      <Form.Check
                        type="radio"
                        label="Social Media"
                        name="radioGroup"
                        id="option2"
                      />
                      <Form.Check
                        type="radio"
                        label="Friend Suggested"
                        name="radioGroup"
                        id="option2"
                      />{" "}
                      <Form.Check
                        type="radio"
                        label="Others"
                        name="radioGroup"
                        id="option2"
                      />
                    </div>
                  </Col>

                  <Col sm={6}>
                    {" "}
                    <CMButton
                      className="rounded-5 mt-3"
                      endicon={<i class="bi bi-arrow-right"></i>}
                    >
                      Talk to a friend
                    </CMButton>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </CMDialoge>
    </>
  );
};

export default LookingDeveloper;
