import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

const HiringExpert = () => {
  const hiringExpertContent = [
    {
      icon: assetsObj.agreementIcon,
      title: "Contract",
      desc: "Hire a full-time contract software programmer who seamlessly integrates with your team",
      background_color: `linear-gradient(180deg, #ece2fa 0%, #f9f5ff 100%)`,
      icon_bg_color: "#986EEB",
    },
    {
      icon: assetsObj.verifiedUserIcon,
      title: "C2H Model",
      desc: "Not impressed with your developer’s performance? Easily convert their role to a permanent position and keep the expertise in-house.",
      background_color: `linear-gradient(180deg, #FFE3EF 0%, #FFF7FA 100%)`,
      icon_bg_color: "#FD6FAF",
    },
    {
      icon: assetsObj.locationIcon,
      title: "On-Site",
      desc: "Delighted with your developer’s results? Transition them with ease to your permanent payroll.",
      background_color: `linear-gradient(180deg, #FFECE9 0%, #FFF6F4 100%)`,
      icon_bg_color: "#FD9770",
    },
    {
      icon: assetsObj.internetGlobeIcon,
      title: "Remote",
      desc: "Hire full-time remote software engineers who seamlessly integratewith your team from anywhere in the world.",
      background_color: `linear-gradient(180deg, #fff1bf 0%, #fff8e1 100%)`,
      icon_bg_color: "#120A2C",
    },
  ];
  return (
    <>
      <section className="hire_expert_section py-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12}>
              <div className="text-center mb-5">
                <h3>Expert Hiring for All Your Tech Needs</h3>
                <p className="subtitle1">
                  Outsource your entire recruitment process to our experts. We
                  ensure you hire the right software developers perfectly
                  tailored to your business needs, saving you time and resources
                  while securing top talent.
                </p>
              </div>
            </Col>
          </Row>
          <div className="position-relative">
            <img
              src={assetsObj.rectangleBlueLayer}
              alt=""
              className="img-fluid expert_hire_blue_layer"
            />
            <img
              src={assetsObj.rectanglePurpleLayer}
              alt=""
              className="img-fluid expert_hire_purple_layer"
            />
            <img
              src={assetsObj.rectangleYellowLayer}
              alt=""
              className="img-fluid expert_hire_yellow_layer"
            />
            <Row className="">
              {map(hiringExpertContent, (item, i) => (
                <Col xs={12} sm={6} lg={3} key={i}>
                  <Card
                    className="hire_card mb-5 border-0 rounded-4"
                    style={{ background: item.background_color }}
                  >
                    <Card.Body className="px-4">
                      <div
                        className="img_wrapper mb-3"
                        style={{ background: item.icon_bg_color }}
                      >
                        <img
                          src={item.icon}
                          alt="verifiedUserIcon"
                          className="img-fluid"
                        />
                      </div>
                      <h4 className="mb-0 secondary_font">{item.title} </h4>
                      <p>{item.desc}</p>
                      <div className="hire_card_btn">
                        <a href="#" className="me-2">
                          Read more
                        </a>
                        <i class="bi bi-arrow-right"></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HiringExpert;
