import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import PrimaryButton from "../common/PrimaryButton";

const Banner = () => {
  return (
    <>
      <section
        className="banner_section d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${assetsObj.banner_bg_image})` }}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} xs={12}>
              <div className="banner_content_wrap">
                <h1 className="main_heading">
                  Unlock global tech talent with <span>Z</span>{" "}
                  <span>IXISOFT</span>{" "}
                </h1>
                <h3 className="sub_heading">staffing or project-based</h3>
                <p className="para">
                  We're a headhunter agency for finding top overseas tech talent
                  for your company, with the option of handling payroll and HR
                  for optimal experience and maximum retention.
                </p>
                <div className="banner_btn">
                  <PrimaryButton
                    btnLabel="hire now"
                    endIcon={<i className="bi bi-arrow-right"></i>}
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <img src={assetsObj.banner_image} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
