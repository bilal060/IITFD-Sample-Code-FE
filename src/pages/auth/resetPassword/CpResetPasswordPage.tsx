import { Avatar } from "@mui/material";
import React from "react";
import { LockResetOutlinedIcon } from "../../../shared/moduleImports/utIconsImports";
import {
  CpContainer, CpPaper, CpBox, CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import CpResetPasswordForm from "./resetPasswordForm/CpResetPasswordForm";
import "./stResetPasswordPage.scss";

const CpResetPasswordPage = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="sm"
    className="cp-reset-password-page-root cp-forgot-password-page-root"
  >
    <CpPaper elevation={3}>
      <CpBox className="cp-box-page-box">
        <Avatar sx={{ mt: 3, mb: 1, bgcolor: "#1976d2" }}>
          <LockResetOutlinedIcon />
        </Avatar>
        <CpTypography component="h1" variant="h5">
          Reset Password
        </CpTypography>
      </CpBox>
      <CpResetPasswordForm />
    </CpPaper>
  </CpContainer>

);

export default CpResetPasswordPage;
