import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Row,
  Stack,
} from "react-bootstrap";
import CMButton from "../common/CMButton";

const HiringModels = () => {
  const hiringModelContent = [
    {
      title: "Hourly",
      avatar: assetsObj.hiringModelIcon1,
      duration: "Hourly Basis",
      communication: "Slack, Skype, Phone, Chat, Email, etc.",
      hiring_period: "24 Hours (minimum)",
      project_trackers: "Jira, Daily Reports, Basecamp, etc.",
      background_color: `linear-gradient(180deg, #ece2fa 0%, #f9f5ff 100%)`,
      icon_bg_color: "#986EEB",
    },
    {
      title: "Offshore Dev Center",
      avatar: assetsObj.hiringModelIcon2,
      duration: "Hourly Basis",
      communication: "Slack, Skype, Phone, Chat, Email, etc.",
      hiring_period: "24 Hours (minimum)",
      project_trackers: "Jira, Daily Reports, Basecamp, etc.",
      background_color: `linear-gradient(180deg, #FFE3EF 0%, #FFF7FA 100%)`,
      icon_bg_color: "#FD6FAF",
    },
    {
      title: "Full Time",
      avatar: assetsObj.hiringModelIcon3,
      duration: "160 Hours/Month",
      communication: "Slack, Skype, Phone, Chat, Email, etc.",
      hiring_period: "24 Hours (minimum)",
      project_trackers: "Jira, Daily Reports, Basecamp, etc.",
      background_color: `linear-gradient(180deg, #FFECE9 0%, #FFF6F4 100%)`,
      icon_bg_color: "#FD9770",
    },
    {
      title: "Dedicated Team",
      avatar: assetsObj.hiringModelIcon4,
      duration: "1 (PM), 1 (QA), 4 (Developers)",
      communication: "Slack, Skype, Phone, Chat, Email, etc.",
      hiring_period: "24 Hours (minimum)",
      project_trackers: "Jira, Daily Reports, Basecamp, etc.",
      background_color: `linear-gradient(180deg, #fff1bf 0%, #fff8e1 100%)`,
      icon_bg_color: "#120A2C",
    },
  ];

  return (
    <>
      <section className="hiring_model_section">
        <Container fluid="md">
          <Stack
            direction="horizontal"
            gap={3}
            className="align-items-center justify-content-between mb-5"
          >
            <h3>Our Hiring Model</h3>
            <CMButton endicon={<i className="bi bi-arrow-right"></i>}>
              Hire Developer
            </CMButton>
          </Stack>
          <Row>
            {map(hiringModelContent, (item, i) => (
              <Col md={6} key={i}>
                <Card
                  className="model_card mb-5"
                  style={{ background: item.background_color }}
                >
                  <Card.Body className="px-4">
                    <Stack direction="horizontal" gap={4}>
                      <div
                        className="img_wrapper"
                        style={{ background: item.icon_bg_color }}
                      >
                        <img
                          src={item.avatar}
                          className="model_avatar img-fluid"
                          alt=""
                        />
                      </div>
                      <h4 className="mb-0 secondary_font">{item.title}</h4>
                    </Stack>
                  </Card.Body>
                  <div className="w-100 custom_divider"></div>
                  <Card.Body className="px-4">
                    <div className="model_desc">
                      <p className="subtitle1 mb-1 secondary_font">
                        Duration : {item.duration}
                      </p>
                      <p className="subtitle1 mb-1 secondary_font">
                        Team Members : {item.communication}
                      </p>
                      <p className="subtitle1 mb-1 secondary_font">
                        Hiring Period : {item.hiring_period}
                      </p>
                      <p className="subtitle1 mb-1 secondary_font">
                        Project Trackers : {item.project_trackers}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HiringModels;
