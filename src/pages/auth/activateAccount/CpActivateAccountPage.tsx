import React from "react";
import CpActivateAccountForm from "./activateAccountForm/CpActivateAccountForm";
import {
  CpContainer, CpPaper, CpTypography, CpBox,
} from "../../../shared/moduleImports/utModuleImports";
import "./stActivateAccountPage.scss";

const CpActivateAccountPage = (): JSX.Element => (
  <CpContainer component="main" maxWidth="sm" className="cp-signup-page-root">
    <CpPaper elevation={3}>
      <CpBox className="cp-box-page-box">
        <CpTypography component="h1" variant="h5" textAlign="start" mx={3}>
          Activate Account
        </CpTypography>
      </CpBox>
      <CpActivateAccountForm />
    </CpPaper>
  </CpContainer>
);

export default CpActivateAccountPage;
