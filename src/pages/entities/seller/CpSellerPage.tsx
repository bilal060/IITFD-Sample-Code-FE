import React from "react";
import { CpContainer } from "../../../shared/moduleImports/utModuleImports";
import CpSellerView from "./sellerView/CpSellerView";
import "./stSellerPage.scss";

const CpSellerPage = (): JSX.Element => (
  <CpContainer className="quotation-comp-root">
    <CpSellerView />
  </CpContainer>
);

export default CpSellerPage;
