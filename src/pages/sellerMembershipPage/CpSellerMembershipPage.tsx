import React from "react";
import {
  CpBox, CpButton, CpCustomDataTable,
  CpAutocompleteField, CpContainer, CpGrid, CpPaper, CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import { dtSellerServingLocationsColumns, dtSellerProductAndServiceColumns } from "../../shared/constants/dtOthers";
import "./stSellerMembershipPage.scss";

const CpActionButtons = (): JSX.Element => (
  <>
    <br />
    <hr />
    <CpGrid container xs={12} spacing={2} sx={{ justifyContent: "right" }}>
      <CpGrid item xs={2}>
        <CpButton fullWidth variant="contained" type="submit">Save</CpButton>
      </CpGrid>
      <CpGrid item xs={2}>
        <CpButton fullWidth variant="contained" className="action-button-cancel" type="submit">Cancel</CpButton>
      </CpGrid>
    </CpGrid>
  </>
);

const CpSearchServices = () => (
  <CpGrid container spacing={1}>
    <CpGrid item xs={4}>
      <CpAutocompleteField
        placeholder="Search Service"
        size="small"
        name="services"
        label="Services"
        options={[]}
      />
    </CpGrid>
  </CpGrid>
);

const CpSellerMembershipPage = (): JSX.Element => (
  <CpContainer className="cp-seller-membership-page-root">
    <CpPaper elevation={3}>
      <CpBox p={3} sx={{ marginTop: 5, marginBottom: 5 }}>
        <CpTypography variant="h6">Seller Membership</CpTypography>
        <hr />
        <CpTypography>
          Please enter your Products and Service Categories and Serving Locations to become a Seller !
        </CpTypography>
        <br />
        <CpTypography variant="h6">Product and Service Categories</CpTypography>
        <hr />
        {CpSearchServices()}
        <CpGrid container spacing={1}>
          <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
            <CpCustomDataTable showSearchButtons={false} rows={[]} columns={dtSellerServingLocationsColumns} />
          </CpGrid>
        </CpGrid>
        <br />
        <CpTypography variant="h6">Serving Locations</CpTypography>
        <hr />
        <CpGrid container spacing={1}>
          <CpGrid item xs={4}>
            <CpAutocompleteField
              placeholder="Search Locations"
              size="small"
              name="locations"
              label="Locations"
              options={[]}
            />
          </CpGrid>
        </CpGrid>
        <CpGrid container spacing={1}>
          <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
            <CpCustomDataTable showSearchButtons={false} rows={[]} columns={dtSellerProductAndServiceColumns} />
          </CpGrid>
        </CpGrid>
        {CpActionButtons()}
      </CpBox>
    </CpPaper>
  </CpContainer>
);
export default CpSellerMembershipPage;
