import React from "react";
import { CpContainer } from "../../../shared/moduleImports/utModuleImports";
import CpCatelogCreate from "./catelogCreate/CpCatelogCreate";
import "./stCatelogPage.scss";

const CpCatelogPage = (): JSX.Element => (
  <CpContainer className="catelog-comp-root">
    <CpCatelogCreate />
  </CpContainer>
);

export default CpCatelogPage;
