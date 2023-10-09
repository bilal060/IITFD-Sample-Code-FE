import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
import { dtEmailDomainContent, dtEmailDomainInfo } from "./dtTermsOfEmailDomain";
import "./stTermsOfEmailDomainPage.scss";

const toast = utAppToast();

const schema = Yup.object({
  companyName: Yup.string().required(),
  workAs: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(5, "Password is too short - should be 8 characters minimum.").required(),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
}).required();

const CpInputsFields = (): JSX.Element => (
  <>
    <CpGrid container item xs={12} display="flex" flexDirection="row" alignItems="flex-end">
      <CpTypography mx={1} my={2}>{dtEmailDomainContent()}</CpTypography>
      <CpGrid item xs={4} mx={1}>
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
      <CpGrid item xs={6} mx={1}>
        <CpGrid item xs={12}>
          <CpTypography component="span" mb={3} display="flex" flexDirection="row" alignItems="flex-end">
            <>
              <InfoOutlinedIcon />
              <CpTypography component="span" mx={1} fontSize="small">{dtEmailDomainInfo()}</CpTypography>
            </>
          </CpTypography>
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
        Finalize Registration
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

const CpTermsOfEmailDomainForm = (): JSX.Element => {
  const history = useHistory();
  const methods = useForm<tpRegister>({
    resolver: yupResolver(schema),
    defaultValues: {
      workAs: "buyer",
    },
  });

  const cpOnSubmit = () => {
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
      className="box-form-comp"
      overflow="auto"
    >

      <CpDivider sx={{ my: 1, fontSize: "25px", backgroundColor: "#000000" }} />
      <CpForm methods={methods} onSubmit={cpOnSubmit}>
        <CpCompanyExistsRequestAccessFormInputFields />
      </CpForm>
    </CpBox>
  );
};

export default CpTermsOfEmailDomainForm;
