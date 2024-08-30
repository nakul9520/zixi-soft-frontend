import React from "react";
import CMDialoge from "../../common/CMDialoge";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import CMButton from "@/components/common/CMButton";

const ScheduleCallModel = (props) => {
  const { open, handleClose } = props;
  return (
    <>
      <CMDialoge
        open={open}
        handleClose={handleClose}
        modal-dialog-scrollable
        size="lg"
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12}>
                <Card className="rounded-4 mb-3 shedule_call_model_card">
                  <CardBody>
                    <Stack direction="horizontal" gap={3} className="">
                      <div className="shedule_call_model_card_content">
                        <img
                          src={assetsObj.scheduleCallModelImg1}
                          alt="logo"
                          className="img-fluid mb-3"
                        />
                        <p className="body1">
                          If you have questions, talk to an expert in the next
                          30 minutes or as per your preference.
                        </p>
                      </div>
                      <CMButton className="rounded-5">Schedule a call</CMButton>
                    </Stack>
                  </CardBody>
                </Card>
              </Col>{" "}
              <Col xs={12}>
                <Card className="rounded-4 mb-3 shedule_call_model_card">
                  <CardBody>
                    <Stack direction="horizontal" gap={3} className="">
                      <div className="shedule_call_model_card_content">
                        <img
                          src={assetsObj.scheduleCallModelImg2}
                          alt="logo"
                          className="img-fluid mb-3"
                        />
                        <p className="body1">
                          If you want to know how this works, allow us to give
                          you a demo of the entire process.
                        </p>
                      </div>
                      <CMButton className="rounded-5">Request a demo</CMButton>
                    </Stack>
                  </CardBody>
                </Card>
              </Col>{" "}
              <Col xs={12}>
                <Card className="rounded-4 mb-3 shedule_call_model_card">
                  <CardBody>
                    <Stack direction="horizontal" gap={3} className="">
                      <div className="shedule_call_model_card_content">
                        <img
                          src={assetsObj.scheduleCallModelImg3}
                          alt="logo"
                          className="img-fluid mb-3"
                        />
                        <p className="body1">
                          If you have clarity and want to start receiving talent
                          profiles for the interview, raise a hiring request.
                        </p>
                      </div>
                      <CMButton className="rounded-5">Sign - Up</CMButton>
                    </Stack>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </CMDialoge>
    </>
  );
};

export default ScheduleCallModel;
