import React from "react";
import { CpContainer } from "../../../shared/moduleImports/utModuleImports";
import CpRfqCreate from "./rfqCreate/CpRfqCreate";
import "./stRfqPage.scss";

const CpfqPage = (): JSX.Element => (
  <CpContainer className="rfq-comp-root">
    <CpRfqCreate />
  </CpContainer>
);

export default CpfqPage;
