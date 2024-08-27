import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import { map } from "lodash";

const DiscoverOpportunities = () => {
  const talentList = [
    { name: "Someone 1", avatar: assetsObj.avatar1 },
    { name: "Someone 2", avatar: assetsObj.avatar2 },
    { name: "Someone 3", avatar: assetsObj.avatar3 },
  ];
  return (
    <>
      <section className="discover_opportunity_section py-5">
        <Container>
          <div className="common_heading text-center">
            <h3>Discover Multiple Career Opportunities</h3>
          </div>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={5}>
              <div className="">
                <p>
                  Discover various job roles at ZIXISOFT. Whether you're skilled
                  in software development or project management, find positions
                  that align with your expertise and career ambitions.
                </p>
                <PrimaryButton
                  btnLabel="Register With Us Today"
                  endIcon={<i className="bi bi-arrow-right"></i>}
                />
              </div>
              <div className="join_dev_part">
                <h4>3000+</h4>
                <p className="body2">
                  Developers have already joined Sourcebae
                </p>
                <div className="avatar-group mb-3">
                  {map(talentList, (item, i) => (
                    <div className="avatar" key={i}>
                      <span className="avatar-name">{item.name}</span>
                      <img src={item.avatar} alt="Image" />
                    </div>
                  ))}
                  <div className="avatar">
                    {/* <img src={assetsObj.talentIcon} alt="Image" /> */}
                    <i className="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={7}>
              <img
                src={assetsObj.muiltipleOpoortunitiesImg}
                alt="language chart"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DiscoverOpportunities;
