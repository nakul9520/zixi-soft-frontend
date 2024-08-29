import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CMButton from "../common/CMButton";

const ApplyNowBanner = () => {
  return (
    <>
      <section className="apply_now_banner">
        <Container fluid>
          <div
            className="content_wrapper"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(4, 43, 62, 0.8) 0%, rgba(0, 53, 52, 0.8) 100%),url(${assetsObj.StartTodayBG})`,
            }}
          >
            <Row>
              <Col md={12}>
                <div className="text-center p-3 p-md-5 gap-3">
                  <h3 className="text-light mb-5">
                    Apply today and get matched with your dream job
                  </h3>
                  <CMButton className="rounded-5">Apply Now</CMButton>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ApplyNowBanner;
