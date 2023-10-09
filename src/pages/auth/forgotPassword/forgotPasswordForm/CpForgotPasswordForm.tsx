import React from "react";
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

const CpForgotPasswordForm = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpBox p={3} sx={{ marginTop: 5, marginBottom: 5 }}>
      <CpForm methods={methods}>
        <CpGrid container item xs={12}>
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor="email">Email</CpInputLabel>
          </CpGrid>
          <CpGrid item xs={12}>
            <CpFormTextFieldInput fullWidth size="small" label="" placeholder="Email" name="email" />
          </CpGrid>
        </CpGrid>
        <CpRecaptchaComp />
        <CpGrid container xs={12}>
          <CpGrid xs={6}>
            <CpButton type="submit" variant="contained" sx={{ mt: 1.5, mb: 2 }}>
              Forgot Password
            </CpButton>
          </CpGrid>
          <CpGrid xs={6}>
            <CpButton type="button" variant="contained" sx={{ mt: 1.5, mb: 2 }}>
              Cancel
            </CpButton>
          </CpGrid>
        </CpGrid>
      </CpForm>
    </CpBox>
  );
};

export default CpForgotPasswordForm;
