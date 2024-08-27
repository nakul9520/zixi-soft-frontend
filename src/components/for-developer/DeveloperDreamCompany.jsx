import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import OwlCarousel from "react-owl-carousel";

const dreamCompanyLogoData = [
  { logo: assetsObj.paytmLogo },
  { logo: assetsObj.dunzoLogo },
  { logo: assetsObj.spotifyLogo },
  { logo: assetsObj.airbnbLogo },
  { logo: assetsObj.amazonLogo },
  { logo: assetsObj.googleLogo },
];
const DeveloperDreamCompany = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    nav: false,
    dots: true,
    loop: false,
  };
  return (
    <>
      <section className="developer_dream_company_section py-5">
        <Container>
          <div className="common_heading text-center mb-4">
            <h3>Your Dream Companies Are Ready to Work with You!</h3>
          </div>
          <Row>
            <Col xs={12}>
              <OwlCarousel
                className="owl-theme section developer_dream_company_slider"
                loop
                margin={30}
                autoplay
                {...options}
              >
                {map(dreamCompanyLogoData, (item, i) => (
                  <div className="barnd_logo_card">
                    <div className="brand_logo" key={i}>
                      <img src={item.logo} className="img-fluid" alt="" />
                    </div>
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

export default DeveloperDreamCompany;
