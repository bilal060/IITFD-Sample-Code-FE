import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import {
  CpFormTextFieldInput,
  CpForm,
  CpTypography,
  CpRecaptchaComp,
  CpButton,
  CpBox,
  CpStack,
  CpInputLabel,
  CpGrid,
  CpFormRadioInput,
  CpFormSelectionInput,
} from "../../../../shared/moduleImports/utModuleImports";
import { tpRegister, tpSignUpFormInputProps } from "../../../../shared/types/pages/tpAuth";
import { apAuthRegister } from "../../../../shared/ajax/apAuth";
import utAppToast from "../../../../shared/utils/utToast";
import CpRouteLink from "../../../../components/navigation/routeLink/CpRouteLink";
import { LOGIN_ROUTE } from "../../../../shared/constants/dtRoutes";
import { REQUEST_CODE_SUCCESS } from "../../../../shared/constants/dtStatusCode";
import { fieldsArray, workTypes } from "../dtSignupForm";
import { utActivateAccountFormSchema } from "../../../../components/form/utils/utForm";

const toast = utAppToast();

const CpInputsFields = (): JSX.Element => (
  <>
    <CpGrid container item xs={12}>
      <CpGrid item xs={12}>
        <CpInputLabel className="input-label-text" htmlFor="workAs">Primarily Work as</CpInputLabel>
        <CpFormRadioInput label="" name="workAs" required data={workTypes} />
      </CpGrid>
      {fieldsArray.map(({
        name, label, type, options,
      }) => (
        <React.Fragment key={name}>
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor={name}>
              {label}
            </CpInputLabel>
          </CpGrid>
          <CpGrid item xs={12}>
            {type === "select" ? (
              <CpFormSelectionInput
                fullWidth
                data={options ?? []}
                size="small"
                label=""
                placeholder={label}
                name={name}
              />
            ) : (
              <CpFormTextFieldInput
                fullWidth
                size="small"
                type={type}
                label=""
                placeholder={label}
                name={name}
              />
            )}
          </CpGrid>
        </React.Fragment>
      ))}

    </CpGrid>
  </>
);

const CpSignupFormInputFields = ({
  setReCaptchaToken, reCaptchaToken,
  isLoading,
}:tpSignUpFormInputProps): JSX.Element => {
  const cpOnReCaptchaChanged = (token: string | null) => {
    if (token !== null) {
      setReCaptchaToken(token);
    }
  };
  return (
    <>
      <CpInputsFields />
      <CpBox mt={2}>
        {!isLoading
            && <CpRecaptchaComp onChange={cpOnReCaptchaChanged} />}
      </CpBox>
      <CpBox display="flex" justifyContent="center">
        <CpButton
          type="submit"
          disabled={reCaptchaToken === ""}
          variant="contained"
          sx={{ mt: 3, mb: 2, mx: 2 }}
        >
          Submit
        </CpButton>
        <CpButton
          type="button"
          variant="contained"
          color="inherit"
          sx={{ mt: 3, mb: 2, mx: 2 }}
        >
          Cancel
        </CpButton>
      </CpBox>
    </>
  );
};

const CpSignupForm = (): JSX.Element => {
  const [reCaptchaToken, setReCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const methods = useForm<tpRegister>({
    resolver: yupResolver(utActivateAccountFormSchema),
    defaultValues: {
      workAs: "buyer",
    },
  });

  const cpOnSubmit = () => {
    methods.handleSubmit(async (data) => {
      const resp = await apAuthRegister({ ...data, reCaptchaToken });
      setReCaptchaToken("");
      setIsLoading(true);
      if (resp.status === REQUEST_CODE_SUCCESS) {
        toast.showByStatusCode(resp.body.message, resp.status);
        history.push(LOGIN_ROUTE);
      } else {
        toast.showByStatusCode(resp.body.message, resp.status);
      }
      setIsLoading(false);
    })();
  };

  return (
    <CpBox
      p={3}
      className="box-form-comp"
      sx={{ marginTop: 5, marginBottom: 5 }}
      overflow="auto"
    >
      <CpForm methods={methods} onSubmit={cpOnSubmit}>
        <CpSignupFormInputFields
          setReCaptchaToken={setReCaptchaToken}
          reCaptchaToken={reCaptchaToken}
          isLoading={isLoading}
        />
      </CpForm>
      <CpStack direction="column" spacing={1} className="stack-links-comp">
        <CpTypography variant="body2">
          Already user ?
          <CpRouteLink to={LOGIN_ROUTE}>Sign in</CpRouteLink>
        </CpTypography>
      </CpStack>
    </CpBox>
  );
};

export default CpSignupForm;
