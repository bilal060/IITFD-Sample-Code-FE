import React from "react";
import CpCompanyExistsForm from "./companyExistsForm/CpCompanyExistsForm";
import {
  CpContainer, CpTypography, CpBox, CpPaper,
} from "../../../shared/moduleImports/utModuleImports";
import "./stCompanyExistsPage.scss";

const CpCompanyExistsPage = (): JSX.Element => (
  <CpContainer component="main" maxWidth="lg" className="cp-company-exists-page-root">
    <CpPaper elevation={3}>
      <CpBox className="cp-box-page-box">
        <CpTypography component="h1" textAlign="start" fontWeight={600} mx={2} variant="h6" pb={0}>
          New Registration-company exists
        </CpTypography>
      </CpBox>
      <CpCompanyExistsForm />
    </CpPaper>
  </CpContainer>
);

export default CpCompanyExistsPage;
