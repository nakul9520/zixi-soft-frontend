import CMButton from "@/components/common/CMButton";
import { assetsObj } from "@/utils/images";
import { map } from "lodash";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./LinkConfig";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar fixed="top" expand="lg" className="header_section">
        <Container fluid className="gap-3">
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
