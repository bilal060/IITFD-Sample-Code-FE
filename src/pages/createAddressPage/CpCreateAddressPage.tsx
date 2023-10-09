import * as React from "react";
import "./stCreateAddressPage.scss";
import {
  CpPaper,
  CpContainer,
  CpBox,
  CpGrid,
  CpButton,
} from "../../shared/moduleImports/utModuleImports";
import CpCreateAddressForm from "./createAddressForm/CpCreateAddressForm";

const CpCreateAddressPage = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="md"
    className="cp-create-address-page-root"
  >
    <CpPaper elevation={3}>
      <CpContainer component="main">
        <CpBox
          p={3}
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CpCreateAddressForm />
        </CpBox>
        <CpGrid container justifyContent="flex-end">
          <CpBox mr={3}>
            <CpButton
              size="small"
              variant="contained"
              className="buttons action-button"
            >
              Save & Continue
            </CpButton>
          </CpBox>
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
            <CpButton size="small" variant="contained" className="buttons action-button-cancel">
              Cancel
            </CpButton>
          </CpBox>
        </CpGrid>
      </CpContainer>
    </CpPaper>
  </CpContainer>
);

export default CpCreateAddressPage;
