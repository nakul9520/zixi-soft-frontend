import CMButton from "@/components/common/CMButton";
import { assetsObj } from "@/utils/images";
import { map } from "lodash";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./LinkConfig";
import { useEffect, useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <Navbar
        // fixed="top"
        expand="lg"
        className={`fixed-top header_section ${navbar ? "navbar_active" : ""} ${isVisible ? "visible" : "invisible"}`}
      >
        <Container fluid className="gap-2">
          <Navbar.Brand href="#">
            <div className="logo_wrapper">
              <img
                src={assetsObj.logo}
                alt="brand-logo"
                className="img-fluid w-100 h-100 object-fit-contain"
                onClick={() => navigate("/")}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />
          <CMButton
            className="d-block d-lg-none"
            onClick={() => navigate("/hire-team")}
          >
            Hire Your Team
          </CMButton>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
            >
              {map(navLinks, (item, i) => (
                <Nav.Link href={item.path} className="body1" key={i}>
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <CMButton
            className="d-none d-lg-block"
            onClick={() => navigate("/hire-team")}
          >
            Hire Your Team
          </CMButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
