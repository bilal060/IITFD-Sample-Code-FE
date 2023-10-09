import * as React from "react";
import "./stCompanyProfilePage.scss";
import {
  CpContainer,
  CpBox,
  CpGrid,
  CpButton,
} from "../../shared/moduleImports/utModuleImports";
import CpCompanyProfileForm from "./companyProfileForm/CpCompanyProfileForm";

const CpCompanyProfilePage = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="lg"
    className="cp-company-profile-page-root"
  >
    <CpContainer component="main">
      <CpBox
        p={3}
        sx={{
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CpCompanyProfileForm />
      </CpBox>
      <CpGrid container justifyContent="flex-end">
        <CpBox mr={3}>
          <CpButton
            size="small"
            variant="contained"
            className="buttons action-button"
          >
            Save
          </CpButton>
        </CpBox>
        <CpBox mr={5}>
          <CpButton size="small" variant="contained" className="buttons  action-button-cancel">
            Cancel
          </CpButton>
        </CpBox>
      </CpGrid>
    </CpContainer>
  </CpContainer>
);

export default CpCompanyProfilePage;
