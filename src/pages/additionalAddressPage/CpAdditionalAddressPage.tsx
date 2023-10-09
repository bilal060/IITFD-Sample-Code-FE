import React from "react";
import {
  CpBox, CpButton, CpCustomDataTable, CpContainer, CpGrid,
} from "../../shared/moduleImports/utModuleImports";
import { dtAdditionalAddressesColumns } from "../../shared/constants/dtCompanyProfileTabs";

const CpActionButtons = (): JSX.Element => (
  <CpGrid container xs={12} spacing={2} sx={{ justifyContent: "right", marginTop: 2 }}>
    <CpGrid item xs={3}>
      <CpButton fullWidth variant="contained" type="submit" className="action-button">Create New Address</CpButton>
    </CpGrid>
  </CpGrid>
);

const CpAdditionalAddressPage = (): JSX.Element => (
  <CpContainer>
    <CpBox>
      <CpGrid container spacing={1}>
        <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
          <CpCustomDataTable showSearchButtons={false} rows={[]} columns={dtAdditionalAddressesColumns} />
        </CpGrid>
      </CpGrid>
      <br />
      {CpActionButtons()}
    </CpBox>
  </CpContainer>
);
export default CpAdditionalAddressPage;
