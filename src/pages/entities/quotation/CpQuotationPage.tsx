import React from "react";
import { CpContainer } from "../../../shared/moduleImports/utModuleImports";
import CpQuotationView from "./quotationView/CpQuotationView";
import "./stQuotationPage.scss";

const CpQuotationPage = (): JSX.Element => (
  <CpContainer className="quotation-comp-root">
    <CpQuotationView />
  </CpContainer>
);

export default CpQuotationPage;
