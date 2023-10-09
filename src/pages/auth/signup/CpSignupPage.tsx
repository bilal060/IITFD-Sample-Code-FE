import React from "react";
import CpSignupForm from "./signupForm/CpSignupForm";
import {
  CpContainer, CpPaper, CpTypography, CpBox,
} from "../../../shared/moduleImports/utModuleImports";
import "./stSignupPageStyle.scss";

const CpSignupPage = (): JSX.Element => (
  <CpContainer component="main" maxWidth="sm" className="cp-signup-page-root">
    <CpPaper elevation={3}>
      <CpBox className="cp-box-page-box">
        <CpTypography component="h1" variant="h5" textAlign="start" mx={3}>
          New Registration
        </CpTypography>
      </CpBox>
      <CpSignupForm />
    </CpPaper>
  </CpContainer>
);

export default CpSignupPage;
