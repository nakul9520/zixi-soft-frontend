import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import Marquee from "react-fast-marquee";

const dreamCompanyLogoData = [
  { logo: assetsObj.paytmLogo },
  { logo: assetsObj.dunzoLogo },
  { logo: assetsObj.spotifyLogo },
  { logo: assetsObj.airbnbLogo },
  { logo: assetsObj.amazonLogo },
  { logo: assetsObj.googleLogo },
];
const DeveloperDreamCompany = () => {
  return (
    <>
      <section className="developer_dream_company_section py-5">
        <Container fluid>
          <div className="common_heading text-center mb-4">
            <h3>Your Dream Companies Are Ready to Work with You!</h3>
          </div>
          <Row>
            <Col xs={12}>
              <Marquee
                speed="100"
                autoFill={true}
                direction="left"
                pauseOnHover={true}
                fade={true}
                style={{}}
              >
                {map(dreamCompanyLogoData, (item, i) => (
                  <div
                    className="barnd_logo_card"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="brand_logo" key={i}>
                      <img src={item.logo} className="img-fluid" alt="" />
                    </div>
                  </div>
                ))}
              </Marquee>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DeveloperDreamCompany;
