import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

const Techstack = () => {
  const optionsSlider1 = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const optionsSlider2 = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    rtl: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

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
      <section className="tech_stack_section py-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12}>
              <div className="text-center">
                <h3>Expert Hiring for All Your Tech Needs</h3>
                <p className="subtitle1">
                  Earn up to 80 dollars an hour with Gaper remote jobs
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="tech_stack_cards_wrap mt-4">
          <OwlCarousel
            className="owl-theme tech_stack_barand_logo_slider1"
            loop
            // margin={30}
            autoplay
            {...optionsSlider1}
          >
            {/* {map(data, (item, i) => (
              <div className="tech_stack_card" key={i}>
                <div className="tech_desc">
                  <h6 className="secondary_font">{item.title} </h6>
                  <span>10 month engagement</span>
                </div>
                <div className="tech_stack_img">
                  <img src={item.icon} className="img-fluid" alt="" />
                </div>
              </div>
            ))} */}
            {map(dreamCompanyLogoData, (item, i) => (
              <div className="barnd_logo_card">
                <div className="brand_logo" key={i}>
                  <img src={item.logo} className="img-fluid" alt="" />
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        <div className="tech_stack_cards_wrap mt-4">
          <OwlCarousel
            className="owl-theme section tech_stack_barand_logo_slider2"
            loop
            margin={30}
            autoplay
            rtl
            {...optionsSlider2}
          >
            {map(dreamCompanyLogoData, (item, i) => (
              <div className="barnd_logo_card">
                <div className="brand_logo" key={i}>
                  <img src={item.logo} className="img-fluid" alt="" />
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Techstack;
