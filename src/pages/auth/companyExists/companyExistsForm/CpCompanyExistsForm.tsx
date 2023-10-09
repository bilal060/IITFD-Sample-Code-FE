import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import {
  CpFormTextFieldInput,
  CpForm,
  CpButton,
  CpBox,
  CpInputLabel,
  CpGrid,
  CpTypography,
  CpDivider,
} from "../../../../shared/moduleImports/utModuleImports";
import { tpRegister } from "../../../../shared/types/pages/tpAuth";
import { apAuthRegister } from "../../../../shared/ajax/apAuth";
import utAppToast from "../../../../shared/utils/utToast";
import { LOGIN_ROUTE } from "../../../../shared/constants/dtRoutes";
import { REQUEST_CODE_SUCCESS } from "../../../../shared/constants/dtStatusCode";
import {
  dtRequestAccessContent, dtSentEmailContent, dtSentEmailReportContent, dtCompanyExistsFormfieldsArray,
} from "../dtCompanyExistsPage";
import { InfoOutlinedIcon } from "../../../../shared/moduleImports/utIconsImports";
import { utActivateAccountFormSchema } from "../../../../components/form/utils/utForm";

const toast = utAppToast();

const CpCompanyExistsSentEmailFormInputsFields = (): JSX.Element => (
  <>
    <CpGrid container item xs={12} display="flex" flexDirection="row" alignItems="flex-end">
      <CpTypography component="p" mx={1}>{dtSentEmailContent()}</CpTypography>
      <CpTypography component="p" mx={1} mb={3}>{dtSentEmailReportContent()}</CpTypography>
      <CpGrid item xs="auto">
        <CpGrid container item xs={12}>
          {dtCompanyExistsFormfieldsArray.map(({ name, label, type }) => (
            <CpGrid key={name} item xs="auto" mx={1}>
              <CpGrid item xs={12}>
                <CpInputLabel className="input-label-text" htmlFor={name}>
                  {label}
                </CpInputLabel>
              </CpGrid>
              <CpGrid item xs={12}>
                <CpFormTextFieldInput
                  size="small"
                  type={type}
                  label=""
                  placeholder={label}
                  name={name}
                />
              </CpGrid>
            </CpGrid>
          ))}
        </CpGrid>
      </CpGrid>
      <CpGrid item xs="auto" mx={2}>
        <CpButton
          type="submit"
          variant="contained"
          sx={{ mb: 2 }}
        >
          Sent warning email to test
        </CpButton>
      </CpGrid>
    </CpGrid>
    <CpDivider sx={{ my: 1, backgroundColor: "#000000" }} />
  </>
);

const CpInputsFields = (): JSX.Element => (
  <>
    <CpGrid container item xs={12}>
      <CpTypography mx={1} my={2}>{dtRequestAccessContent()}</CpTypography>
      <CpGrid item xs={5} mx={1}>
        <CpGrid item xs={12}>
          <CpInputLabel className="input-label-text" htmlFor="adminName">
            Name
          </CpInputLabel>
        </CpGrid>
        <CpGrid item xs={12}>
          <CpFormTextFieldInput
            size="small"
            type="text"
            label=""
            placeholder="Name"
            name="adminName"
          />
        </CpGrid>
      </CpGrid>
      <CpGrid item xs={5} mx={1}>
        <CpGrid item xs={12}>
          <CpInputLabel className="input-label-text" htmlFor="adminEmail">
            Email
          </CpInputLabel>
        </CpGrid>
        <CpGrid item xs={12}>
          <CpFormTextFieldInput
            size="small"
            type="email"
            label=""
            placeholder="Email"
            name="adminEmail"
          />
        </CpGrid>
      </CpGrid>
    </CpGrid>
  </>
);

const CpCompanyExistsRequestAccessFormInputFields = (): JSX.Element => (
  <>
    <CpInputsFields />
    <CpGrid item xs={10} display="flex" justifyContent="end">
      <CpButton
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, mx: 2 }}
      >
        Request access
      </CpButton>
      <CpButton
        type="button"
        variant="contained"
        color="inherit"
        sx={{ mt: 3, mb: 2, mx: 2 }}
      >
        Cancel
      </CpButton>
    </CpGrid>
  </>
);

const CpCompanyExistsForm = (): JSX.Element => {
  const history = useHistory();
  const methods = useForm<tpRegister>({
    resolver: yupResolver(utActivateAccountFormSchema),
    defaultValues: {
      workAs: "buyer",
    },
  });

  const srOnSubmit = () => {
    methods.handleSubmit(async (data) => {
      const resp = await apAuthRegister(data);
      if (resp.status === REQUEST_CODE_SUCCESS) {
        toast.showByStatusCode(resp.body.message, resp.status);
        history.push(LOGIN_ROUTE);
      } else {
        toast.showByStatusCode(resp.body.message, resp.status);
      }
    })();
  };

  return (
    <CpBox
      px={1}
      className="box-form-comp"
      mx={4}
      overflow="auto"
    >
      <CpGrid item xs={12} display="flex" component="h1">
        <InfoOutlinedIcon fontSize="inherit" />
        <CpTypography component="h1" variant="h6" mx={1}>
          We have verified that your company has already registered.
        </CpTypography>
      </CpGrid>

      <CpDivider sx={{ my: 1, fontSize: "25px", backgroundColor: "#000000" }} />
      <CpForm methods={methods} onSubmit={srOnSubmit}>
        <CpCompanyExistsSentEmailFormInputsFields />
      </CpForm>
      <CpForm methods={methods} onSubmit={srOnSubmit}>
        <CpCompanyExistsRequestAccessFormInputFields />
      </CpForm>
    </CpBox>
  );
};

export default CpCompanyExistsForm;
