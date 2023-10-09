import React from "react";
import {
  CpAutocompleteField, CpBox, CpButton,
  CpContainer, CpGrid, CpPageHeaderComp, CpPaper, CpTextField, CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import CpSellerList from "./sellerList/CpSellerList";
import "./stSellersForProductPage.scss";

const CpSellersForProductPage = (): JSX.Element => (
  <CpContainer className="cp-seller-for-product-page-root">
    <CpPaper elevation={3}>
      <CpBox p={3} sx={{ marginTop: 5, marginBottom: 5 }}>
        <CpPageHeaderComp mainText="Search Product" secondText="For Seller" />
        <CpGrid container spacing={1}>
          <CpGrid item xs={3}>
            <CpAutocompleteField
              placeholder="Search Product"
              size="small"
              label="Products"
              name="products"
              options={[]}
            />
          </CpGrid>
          <CpGrid item xs={3}>
            <CpTextField
              placeholder="Minimum Price"
              size="small"
            />
          </CpGrid>
          <CpGrid item xs={1}>
            <CpTypography>to</CpTypography>
          </CpGrid>
          <CpGrid item xs={3}>
            <CpTextField
              placeholder="Maximum Price"
              size="small"
            />
          </CpGrid>
          <CpGrid item xs={2}>
            <CpButton>Serach Seller</CpButton>
          </CpGrid>
        </CpGrid>
      </CpBox>
      <CpSellerList />
    </CpPaper>
  </CpContainer>
);
export default CpSellersForProductPage;
