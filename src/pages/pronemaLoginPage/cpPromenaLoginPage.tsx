import "./stPromenaLoginPage.scss";
import React from "react";
import { useForm } from "react-hook-form";
import CpTitleBar from "../../components/titleBar/cpTitleBar";
import {
  CpForm, CpPaper, CpFormTextFieldInput, CpTypography, CpGrid,
} from "../../shared/moduleImports/utModuleImports";

type FormData = {
  synchronization: boolean;
  login: string;
  password: string;
};
const CpPromenaLoginPage = (): JSX.Element => {
  const methods = useForm<FormData>();
  return (
    <>
      <CpTitleBar leftValue="Promena" rightValue="Integration" />
      <CpGrid className="cp-promena-login-page-root">
        <CpPaper className="paper-wrapper">
          <CpForm methods={methods}>
            <CpGrid container spacing={2}>
              <CpGrid item xs={4}>
                <CpTypography sx={{ pt: 2 }} align="center" color="#495057" fontSize="13px">Promena Login</CpTypography>
              </CpGrid>
              <CpGrid item xs={8}>
                <CpFormTextFieldInput name="login" type="email" required label="" />
              </CpGrid>
              <CpGrid item xs={4}>
                <CpTypography sx={{ pt: 2 }} align="center" color="#495057" fontSize="13px">Password / tokken</CpTypography>
              </CpGrid>
              <CpGrid item xs={8}>
                <CpFormTextFieldInput name="password" type="password" required label="" />
              </CpGrid>
            </CpGrid>
          </CpForm>

        </CpPaper>
      </CpGrid>
    </>
  );
};

export default CpPromenaLoginPage;
