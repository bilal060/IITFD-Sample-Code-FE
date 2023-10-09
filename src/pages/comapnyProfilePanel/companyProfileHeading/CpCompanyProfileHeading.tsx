import React from "react";
import { CpGrid, CpTypography } from "../../../shared/moduleImports/utModuleImports";
import CpInstanceLogo from "../../../components/layout/instanceLogo/CpInstanceLogo";
import "./stCompanyProfileHeading.scss";

const CpCompanyProfileHeading = (): JSX.Element => (
  <div className="cp-company-profile-heading-root">
    <CpTypography variant="h5"><b>Company Profile</b></CpTypography>
    <div className="company-profile-heading-body">
      <CpGrid container xs={12}>
        <CpGrid item xs={1.2}>
          <CpInstanceLogo className="company-profile-logo" />
        </CpGrid>
        <CpGrid item xs={4}>
          <CpTypography variant="h6"><b> test</b></CpTypography>
          <CpTypography>Pakistan-Karachi</CpTypography>
        </CpGrid>
      </CpGrid>
    </div>
  </div>
);
export default CpCompanyProfileHeading;
