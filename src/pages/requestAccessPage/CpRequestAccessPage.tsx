import * as React from "react";
import {
  CpBox, CpButton, CpCustomDataTable, CpContainer, CpGrid, CpPaper, CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import { dtRequestAccessColumns, dtRequestAccessRows } from "../../shared/constants/dtCompanyProfileTabs";

const CpRequestAccessPage = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="md"
    className="cp-request-access-page-root"
  >
    <CpPaper elevation={3}>
      <CpContainer component="main">
        <CpBox
          p={3}
          sx={{
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <CpTypography variant="h5">Request Access</CpTypography>
          <hr />
          <CpTypography variant="h6">Administrator</CpTypography>
          <hr />
          <br />
          <CpGrid container spacing={1}>
            <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
              <CpCustomDataTable
                showSearchButtons={false}
                rows={dtRequestAccessRows}
                columns={dtRequestAccessColumns}
              />
            </CpGrid>
          </CpGrid>
          <CpGrid container justifyContent="flex-end">
            <CpBox mr={3} mt={3}>
              <CpButton variant="contained" className="action-button">Approve</CpButton>
            </CpBox>
            <CpBox mt={3}>
              <CpButton variant="contained" className="action-button-cancel">Reject</CpButton>
            </CpBox>
          </CpGrid>
          <br />
        </CpBox>
      </CpContainer>
    </CpPaper>
  </CpContainer>
);
export default CpRequestAccessPage;
