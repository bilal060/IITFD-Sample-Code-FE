import React from "react";
import { CpContainer } from "../../../shared/moduleImports/utModuleImports";
import CpRegisterForm from "./CpRegisterForm";
import "./stRegisterPage.scss";

const CpRegisterPage = (): JSX.Element => (
  <CpContainer className="register-comp-root">
    <CpRegisterForm />
  </CpContainer>
);

export default CpRegisterPage;
