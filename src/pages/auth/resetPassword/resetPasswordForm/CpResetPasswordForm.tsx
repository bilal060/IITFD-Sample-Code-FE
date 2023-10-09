import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import {
  CpFormTextFieldInput,
  CpForm,
  CpRecaptchaComp,
  CpButton,
  CpBox,

  CpInputLabel,
  CpGrid,
} from "../../../../shared/moduleImports/utModuleImports";

const cpPasswordType = (check: boolean):string => {
  if (check) return "text";
  return "password";
};

const cpPasswordEye = (check: boolean) => {
  if (check) return <VisibilityIcon />;
  return <VisibilityOffIcon />;
};

const CpActionButtons = () => (
  <CpGrid container xs={12}>
    <CpGrid xs={6}>
      <CpButton type="submit" variant="contained" sx={{ mt: 1.5, mb: 2 }}>
        Reset Password
      </CpButton>
    </CpGrid>
    <CpGrid xs={6}>
      <CpButton type="button" variant="contained" sx={{ mt: 1.5, mb: 2 }}>
        Cancel
      </CpButton>
    </CpGrid>
  </CpGrid>
);

const CpNewPasswordField = (
  showPassword: boolean,
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
) => (
  <CpGrid container xs={12}>
    <CpGrid item xs={11.9}>
      <CpFormTextFieldInput
        fullWidth
        type={cpPasswordType(showPassword)}
        size="small"
        label=""
        placeholder="Password"
        name="password"
      />
    </CpGrid>
    <CpGrid item xs={0.1} className="show-password-buttons">
      <CpButton onClick={() => setShowPassword(!showPassword)}>
        {cpPasswordEye(showPassword)}
      </CpButton>
    </CpGrid>
  </CpGrid>
);

const CpConfirmPasswordField = (
  showCPassword: boolean,
  setShowCPassword: React.Dispatch<React.SetStateAction<boolean>>,
) => (
  <CpGrid container xs={12}>
    <CpGrid item xs={11.9}>
      <CpFormTextFieldInput
        fullWidth
        type={cpPasswordType(showCPassword)}
        size="small"
        label=""
        placeholder="Password"
        name="confirmPassword"
      />
    </CpGrid>
    <CpGrid item xs={0.1} className="show-password-buttons">
      <CpButton onClick={() => setShowCPassword(!showCPassword)}>
        {cpPasswordEye(showCPassword)}
      </CpButton>
    </CpGrid>
  </CpGrid>
);

const CpForgotPasswordForm = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  return (
    <CpBox p={3} sx={{ marginTop: 5, marginBottom: 5 }}>
      <CpForm methods={methods}>
        <CpGrid container item xs={12}>
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor="password">New Password</CpInputLabel>
          </CpGrid>
          {CpNewPasswordField(showPassword, setShowPassword)}
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor="password">Confirm New Password</CpInputLabel>
          </CpGrid>
          {CpConfirmPasswordField(showCPassword, setShowCPassword)}
        </CpGrid>
        <CpRecaptchaComp />
        {CpActionButtons()}
      </CpForm>
    </CpBox>
  );
};

export default CpForgotPasswordForm;
