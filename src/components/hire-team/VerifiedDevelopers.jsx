import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import CMButton from "../common/CMButton";

const VerifiedDevelopers = () => {
  const options = {
    stagePadding: 80,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
        stagePadding: 50,
      },
      992: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
    nav: true,
    dots: false,
    navText: [
      "<i className='bi bi-arrow-left'></i>",
      "<i className='bi bi-arrow-right'></i>",
    ],
  };

  const data = [
    {
      id: 1,
      name: "Adem Recher",
      avatar: assetsObj.avatar1,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
    {
      id: 2,
      name: "Adem Recher",
      avatar: assetsObj.avatar3,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
    {
      id: 3,
      name: "Adem Recher",
      avatar: assetsObj.avatar3,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
    {
      id: 4,
      name: "Adem Recher",
      avatar: assetsObj.avatar4,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
    {
      id: 5,
      name: "Adem Recher",
      avatar: assetsObj.avatar3,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
    {
      id: 6,
      name: "Adem Recher",
      avatar: assetsObj.avatar3,
      experience: "7 Year",
      designation: "Paython Developer",
      desc: "Adem is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management.",
      skills: [
        "Computer Science",
        "Data Engineer",
        "Planning",
        "Decision Making",
        "React Js",
        "Frontend",
        "Cloud",
      ],
      availability: "Full-time",
    },
  ];

  const listItems = [
    { title: "Top Talent, Zero Hassle" },
    { title: "Fast, Reliable, and Proven" },
    { title: "Experience Quality and Efficiency!" },
    { title: "Expert Developers at Your Fingertips" },
    { title: "Seamless Hiring, Exceptional Talent" },
    { title: "Get Ahead with Our Pre-Screened Developers" },
  ];

  return (
    <>
      <section
        className="verified_developer_section overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(37, 38, 56, 0.9), rgba(37, 38, 56, 0.9)),url(${assetsObj.developerBG})`,
        }}
      >
        <h3 className="text-light px-4 mb-5">Verified Developers</h3>
        <Row>
          <Col lg={4} xl={3} className="mb-4 mb-lg-0">
            <div className="px-4">
              <p className="text-light fw-normal mb-4">
                All our developers are carefully checked for their skills and
                experience to ensure high-quality work.
              </p>
              <ul>
                {map(listItems, (item, i) => (
                  <li className="text-light mb-3 subtitle1" key={i}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={8} xl={9} className="position-relative">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={30}
              autoPlay={true}
              {...options}
            >
              {map(data, (item, i) => (
                <Card key={i} className="developer_card">
                  <div className="top_block">
                    <div className="expe_label secondary_font">
                      Experience : {item.experience}
                    </div>
                  </div>
                  <Card.Body className="position-relative">
                    <div className="img_wrapper">
                      <img src={item.avatar} alt="avatar" />
                    </div>
                    <div className="mb-5">
                      <div className="ms-auto designation_label secondary_font">
                        {item.designation}
                      </div>
                    </div>
                    <h3 className="mb-2 secondary_font fw-bolder">
                      {item.name}
                    </h3>
                    <p className="text_dark_light mb-3">{item.desc}</p>
                    <Stack
                      direction="horizontal"
                      className="align-items-center flex-wrap mb-4"
                      gap={2}
                    >
                      {map(item.skills, (sub_item, index) => (
                        <div key={index} className="skill_wrapper">
                          {sub_item}
                        </div>
                      ))}
                    </Stack>
                    <div className="text-end">
                      <CMButton
                        variant="soft"
                        color="orange"
                        className="rounded-5"
                      >
                        Availability : {item.availability}
                      </CMButton>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </OwlCarousel>
            <h5 className="text-light secondary_font profile_btn">
              View Profile
            </h5>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default VerifiedDevelopers;
