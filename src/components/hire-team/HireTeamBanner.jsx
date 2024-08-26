import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const HireTeamBanner = () => {
  const talentList = [
    { name: "Someone 1", avatar: assetsObj.avatar1 },
    { name: "Someone 2", avatar: assetsObj.avatar2 },
    { name: "Someone 3", avatar: assetsObj.avatar3 },
  ];
  return (
    <>
      <section className="hire_team_banner d-flex align-items-center justify-content-center">
        <Container fluid="md" className="h-100">
          <Row className="align-items-center h-100">
            <Col md={6}>
              <h2>
                Find <span className="gradient_heading">remote</span> talent
              </h2>
              <h2 className="mb-4">
                that you can <span className="gradient_heading">trust</span>
              </h2>
              <Stack
                direction="horizontal"
                className="align-items-center mb-3"
                gap={2}
              >
                <img
                  src={assetsObj.checkedIcon}
                  width={18}
                  height={18}
                  alt="checked icon"
                />
                <p className="subtitle1 mb-0">50,000+ vetted engineers</p>
              </Stack>
              <Stack
                direction="horizontal"
                className="align-items-center mb-3"
                gap={2}
              >
                <img
                  src={assetsObj.checkedIcon}
                  width={18}
                  height={18}
                  alt="checked icon"
                />
                <p className="subtitle1 mb-0">48-hour matching</p>
              </Stack>
              <Stack
                direction="horizontal"
                className="align-items-center mb-3"
                gap={2}
              >
                <img
                  src={assetsObj.checkedIcon}
                  width={18}
                  height={18}
                  alt="checked icon"
                />
                <p className="subtitle1 mb-0">1.75 interview-to-hire ratio</p>
              </Stack>

              <Button>matched with top engineers</Button>
            </Col>
            <Col
              md={6}
              className="position-relative h-100 d-flex align-items-end justify-content-end flex-column "
            >
              <img
                src={assetsObj.hireTeamBannerImage}
                className="banner_image"
                alt="hire team banner"
              />
              <div>
                <div className="avatar-group mb-3">
                  {map(talentList, (item, i) => (
                    <div className="avatar" key={i}>
                      <span className="avatar-name">{item.name}</span>
                      <img src={item.avatar} alt="Image" />
                    </div>
                  ))}
                  <div className="avatar">
                    <img src={assetsObj.talentIcon} alt="Image" />
                  </div>
                </div>
                <h4 className="secondary_font text_success">80K talents</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HireTeamBanner;
