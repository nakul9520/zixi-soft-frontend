import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Techstack = () => {
  // const data = [
  //   { title: "jQuery", icon: assetsObj.jquery_icon },
  //   { title: "Mongodb", icon: assetsObj.mongodb_icon },
  //   { title: "Java", icon: assetsObj.java_icon },
  //   { title: "Android", icon: assetsObj.android_icon },
  // ];
  const dreamCompanyLogoData = [
    { logo: assetsObj.paytmLogo },
    { logo: assetsObj.dunzoLogo },
    { logo: assetsObj.spotifyLogo },
    { logo: assetsObj.airbnbLogo },
    { logo: assetsObj.amazonLogo },
    { logo: assetsObj.googleLogo },
  ];
  return (
    <>
      <section className="tech_stack_section py-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12}>
              <div className="text-center">
                <h3>Top Companies Trust Our Expert Developers</h3>
                {/* <p className="subtitle1">
                  Earn up to 80 dollars an hour with Gaper remote jobs
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="tech_stack_cards_wrap mt-4">
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
        </div>
        <div className="tech_stack_cards_wrap mt-4">
          <Marquee
            speed="100"
            autoFill={true}
            direction="right"
            pauseOnHover={true}
            fade={true}
            style={{}}
          >
            {map(dreamCompanyLogoData, (item, i) => (
              <div
                className="barnd_logo_card"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="brand_logo" key={i}>
                  <img src={item.logo} className="img-fluid" alt="" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Techstack;
