import { assetsObj } from "@/utils/Images";
import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import Iconify from "../common/iconify";
import CMButton from "../common/CMButton";
import OwlCarousel from "react-owl-carousel";
import { map } from "lodash";

const JobOnZixisoft = () => {
  const developerTypeCardData = [
    { title: "Dotnet Developer", logo: assetsObj.navsoftLogo },
    { title: "Scala Developer", logo: assetsObj.fiservLogo },
    { title: "Full-Stack", logo: assetsObj.pubmaticLogo },
    { title: "Typescript Developer", logo: assetsObj.cgiLogo },
    { title: "Scala Developer", logo: assetsObj.fiservLogo },
    { title: "Full-Stack", logo: assetsObj.pubmaticLogo },
  ];
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
    nav: false,
    dots: true,
    autoplay: false,
  };
  return (
    <>
      <section
        className="Jobon_zixi_soft_section my-3"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8)),url(${assetsObj.techImage})`,
        }}
      >
        <Container>
          <div className="common_heading text-center">
            <h3 className="text-white">Job On Zixisoft</h3>
          </div>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12}>
              <OwlCarousel
                className="owl-theme developer_type_slider"
                loop
                margin={30}
                autoplay
                {...options}
              >
                {map(developerTypeCardData, (item, i) => (
                  <div className="developer_type_card_wrap" key={i}>
                    <Card>
                      <Card.Body className="developer_type_card_content">
                        <div className="developer_type_card_logo">
                          <img
                            src={item.logo}
                            alt="brand-logo"
                            className="img-fluid rounded-3 shadow"
                          />
                        </div>
                        <h5 className="text-center">{item.title}</h5>
                        <Stack
                          direction="horizontal"
                          gap={2}
                          className="my-4 justify-content-center"
                        >
                          <CMButton
                            variant="soft"
                            color="success"
                            className="rounded-2"
                          >
                            Exp. 3 years
                          </CMButton>
                          <CMButton
                            variant="soft"
                            color="orange"
                            className="rounded-2"
                          >
                            onSite
                          </CMButton>{" "}
                          <CMButton
                            variant="soft"
                            color="orange"
                            className="rounded-2"
                          >
                            Pune
                          </CMButton>
                        </Stack>
                        <Card.Text>
                          {" "}
                          <span className="d-block">
                            <Iconify icon="material-symbols-light:double-arrow" />
                          </span>
                          years of experience working with . NET or relevant
                          experiences
                        </Card.Text>
                        <Card.Text>
                          {" "}
                          <span className="d-block">
                            <Iconify icon="material-symbols-light:double-arrow" />
                          </span>
                          Experience developing web-based applications in C#,NET
                          along with MVC / Core, NET along with MVC / Core,MVC
                          applications{" "}
                        </Card.Text>
                        <div className="text-center">
                          <Card.Link href="#" className="fw-bold">
                            See more...
                          </Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobOnZixisoft;
