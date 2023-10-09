import React from "react";
import "./stLoginPage.scss";
import { Col, Row } from "react-bootstrap";
import CpBasicCard from "../../../components/basicCard/CpBasicCard";
import CpReactToast from "../../../components/reactToast/CpReactToast";
import CpFooter from "../../../components/footer/CpFooter";
import CpLoginForm from "./loginForm/CpLoginForm";
import { CpPaper, CpTypography, CpContainer } from "../../../shared/moduleImports/utModuleImports";

const CpLoginPage = (): JSX.Element => (
  <div className="cp-login-page-root">
    <CpReactToast />
    <Row className="top_row">
      <Col className="col-sm-6">
        <div className="container-left">
          <CpContainer component="main" maxWidth="sm" className="cp-login-page-root">
            <CpPaper className="left-box" elevation={3}>
              <CpTypography className="text">
                test Logo,
              </CpTypography>
              <CpTypography className="text">
                Picture, Information
              </CpTypography>
            </CpPaper>
          </CpContainer>
          <CpContainer component="main" maxWidth="sm" className="cp-login-page-root">
            <CpPaper className="left-box" elevation={3}>
              <CpTypography className="text">
                test News
              </CpTypography>
              <CpTypography className="text">
                Dashboards
              </CpTypography>
            </CpPaper>
          </CpContainer>
        </div>
      </Col>
      <Col className="col-sm-6 login_form">
        <div>
          <div className="d-flex h-100">
            <CpBasicCard currentValue={<CpLoginForm />} />
          </div>
        </div>
      </Col>
    </Row>
    <CpFooter />
  </div>

);

export default CpLoginPage;
