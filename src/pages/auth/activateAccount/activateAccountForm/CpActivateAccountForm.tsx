import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import {
  CpFormTextFieldInput,
  CpForm,
  CpRecaptchaComp,
  CpAutocompleteField,
  CpButton,
  CpBox,
  CpInputLabel,
  CpGrid,
} from "../../../../shared/moduleImports/utModuleImports";
import { tpRegister, tpSignUpFormInputProps } from "../../../../shared/types/pages/tpAuth";
import { apAuthRegister } from "../../../../shared/ajax/apAuth";
import utAppToast from "../../../../shared/utils/utToast";
import { LOGIN_ROUTE } from "../../../../shared/constants/dtRoutes";
import { REQUEST_CODE_SUCCESS } from "../../../../shared/constants/dtStatusCode";
import { dtActivateAccountFormFieldsArray } from "../dtActivateAccount";
import { utActivateAccountFormSchema } from "../../../../components/form/utils/utForm";

const toast = utAppToast();

const CpInputsFields = (): JSX.Element => (
  <>
    <CpGrid container item xs={12}>
      {dtActivateAccountFormFieldsArray.map(({
        name, label, type, options,
      }) => (
        <React.Fragment key={name}>
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor={name}>
              {label}
            </CpInputLabel>
          </CpGrid>
          <CpGrid item xs={12}>
            {type === "select" && options?.length ? (
              <CpAutocompleteField
                options={options}
                sx={{ width: 500 }}
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

const CpActivateAccountFormInputFields = ({
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
          className="buttons"
          sx={{ mt: 3, mb: 2, mx: 2 }}
        >
          Activate Account
        </CpButton>
        <CpButton
          type="button"
          variant="contained"
          className="buttons"
          sx={{ mt: 3, mb: 2, mx: 2 }}
        >
          Cancel
        </CpButton>
      </CpBox>
    </>
  );
};

const CpActivateAccountForm = (): JSX.Element => {
  const [reCaptchaToken, setReCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const methods = useForm<tpRegister>({
    resolver: yupResolver(utActivateAccountFormSchema),
    defaultValues: {
      workAs: "buyer",
    },
  });

  const srOnSubmit = () => {
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
      <CpForm methods={methods} onSubmit={srOnSubmit}>
        <CpActivateAccountFormInputFields
          setReCaptchaToken={setReCaptchaToken}
          reCaptchaToken={reCaptchaToken}
          isLoading={isLoading}
        />
      </CpForm>
    </CpBox>
  );
};

export default CpActivateAccountForm;
