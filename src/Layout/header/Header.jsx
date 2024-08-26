import { assetsObj } from "@/utils/images";
import { map } from "lodash";
import { Button, Container, Stack } from "react-bootstrap";
import { navLinks } from "./LinkConfig";
import { useNavigate } from "react-router-dom";
import CMButton from "@/components/common/CMButton";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="fixed-top header_section">
        <Container fluid>
          <Stack
            gap={3}
            direction="horizontal"
            className="align-items-center justify-content-center"
          >
            <div className="logo_wrapper">
              <img
                src={assetsObj.logo}
                alt="brand-logo"
                className="img-fluid w-100 h-100 object-fit-contain"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="header_right ms-auto">
              <Stack
                gap={3}
                direction="horizontal"
                className="align-items-center"
              >
                <ul className="header_menus">
                  {map(navLinks, (item, i) => (
                    <li className="body1" key={i}>
                      {item.label}
                    </li>
                  ))}
                </ul>
                <div>
                  <CMButton variant="gradient" color="primary" onClick={() => navigate("/hire-team")}>
                    Hire Your Team
                  </CMButton>
                </div>
              </Stack>
            </div>
          </Stack>
        </Container>
      </header>
    </>
  );
};

export default Header;
