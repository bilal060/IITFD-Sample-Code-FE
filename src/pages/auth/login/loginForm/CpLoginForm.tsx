import "../stLoginPage.scss";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { tpLogin } from "../../../../shared/types/pages/tpAuth";
import utAppToast from "../../../../shared/utils/utToast";
import {
  CpGrid, CpInputLabel, CpRecaptchaComp, CpFormTextFieldInput, CpForm,
} from "../../../../shared/moduleImports/utModuleImports";
import { apLogin } from "../../../../shared/ajax/apAuth";
import CpTermsPage from "../../terms/CpTermsPage";

const toast = utAppToast();

const CpGetTitle = () => (
  <div className="signin-title">
    <h1 className="mt-2 signin-heading title_form">
      Sign In
    </h1>
  </div>
);
const CpFormInputFields = () => (
  <div>
    <div className="input-fields">
      <CpGrid item xs={12}>
        <CpInputLabel className="input-label-text" htmlFor="username">Email</CpInputLabel>
      </CpGrid>
      <CpGrid item xs={12}>
        <CpFormTextFieldInput fullWidth size="small" label="" placeholder="Email" name="email" className="signin-input" />
      </CpGrid>
    </div>
    <div className="input-fields">
      <CpGrid item xs={12}>
        <CpInputLabel className="input-label-text" htmlFor="password">Password</CpInputLabel>
      </CpGrid>
      <CpGrid item xs={12}>
        <CpFormTextFieldInput
          fullWidth
          size="small"
          type="password"
          label=""
          placeholder="Password"
          name="password"
          className="signin-input"
        />
      </CpGrid>
    </div>
  </div>
);

const CpOtherLinks = () => (
  <Link onClick={() => toast.justMsg("Under Progress")} className="other_link" to="/login">
    <p className="other_link_p">
      Forgot Password
    </p>
  </Link>
);
const CpNewRegisterationLink = () => (
  <Link onClick={() => toast.justMsg("Under Progress")} className="other_link" to="/login">
    <p className="other_link_p">
      Create New Registeration
    </p>
  </Link>
);

const CpLoginForm = (): JSX.Element => {
  const [reCaptchaToken, setReCaptchaToken] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory();
  const methods = useForm({
    defaultValues: { email: "admin@admin.admin", password: "123456" },
  });
  const srOnReCaptchaChanged = (token: string | null) => {
    if (token !== null) {
      setReCaptchaToken(token);
    }
  };
  const srOnSubmit = () => {
    methods.handleSubmit(async (data: tpLogin) => {
      const res = await apLogin({ ...data, reCaptchaToken } as tpLogin);
      if (res.status === 200) {
        toast.success(res.body.message);
        history.push(res.body.data.redirect);
      } else {
        toast.error(res.body.message);
      }
    })();
  };
  return (
    <div className="cp-signin-page-root">
      {CpGetTitle()}
      <div className="signin-form">
        <CpForm methods={methods} onSubmit={srOnSubmit}>
          {CpFormInputFields()}
        </CpForm>
        {CpOtherLinks()}
        <CpRecaptchaComp onChange={srOnReCaptchaChanged} />
        <button
          className="sign-in-button mt-5"
          id="login-page-submit-btn"
          type="submit"
        >
          Sign In
        </button>
        {CpNewRegisterationLink()}

      </div>
      {CpTermsPage(open, setOpen)}
    </div>
  );
};

export default CpLoginForm;
