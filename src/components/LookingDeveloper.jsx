import React from "react";
import CMDialoge from "./common/CMDialoge";
import { Col, Modal, Row } from "react-bootstrap";

const LookingDeveloper = () => {
  return (
    <>
      <CMDialoge open={true} handleClose>
        <h4>Looking for vetted developer / offshore development center?</h4>
        <h4>
          Connect with ZIXISOFT experts to hire remote developer on contractual
          basis.
        </h4>
        <Modal.Body>
          <Row>
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Modal.Body>
      </CMDialoge>
    </>
  );
};

export default LookingDeveloper;
