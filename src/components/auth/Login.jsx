import { assetsObj } from "@/utils/Images";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import "../../styles/hireteam.css";
import CMButton from "../common/CMButton";
import Iconify from "../common/iconify";

const Login = () => {
  return (
    <>
      <section className="login_section">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div>
                <img
                  src={assetsObj.loginBG}
                  alt="Login image"
                  className="img-fluid rounded-5"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center justify-content-center flex-column h-100 px-4">
                <img
                  src={assetsObj.logo}
                  alt="logo"
                  className="mb-5 logo_img"
                />
                <h4 className="mb-5">Login to your employer account</h4>
                <label class="pure-material-textfield-outlined mb-3">
                  <input placeholder=" " type="email" />
                  <span>Email</span>
                </label>
                <label class="pure-material-textfield-outlined icon-textfield end-icon">
                  <input placeholder=" " type="password" />
                  <span>Password</span>
                  <div className="icon-wrapper ">
                    <Iconify icon="heroicons-solid:eye-off" />
                  </div>
                </label>

                <Stack
                  direction="horizontal"
                  className="align-items-center justify-content-between my-2"
                  gap={3}
                >
                  <p className="small_text">Login with OTP</p>
                  <p className="small_text">Forgot Password</p>
                </Stack>
                <CMButton variant="contained" color="primary" className="w-100">
                  Login
                </CMButton>
                <p className="body2 text_dark_light my-5">
                  New to ZIXISOFT?{" "}
                  <span className="subtitle2 text_dark_light">
                    Post a job now
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
