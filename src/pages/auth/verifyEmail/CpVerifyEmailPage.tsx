import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CpContainer, CpTypography } from "../../../shared/moduleImports/utModuleImports";
import { apVerifyEmail } from "../../../shared/ajax/apAuth";
import { REQUEST_CODE_SUCCESS } from "../../../shared/constants/dtStatusCode";
import { LOGIN_ROUTE } from "../../../shared/constants/dtRoutes";
import utAppToast from "../../../shared/utils/utToast";

const toast = utAppToast();

const CpVerifyEmailPage = (): JSX.Element => {
  const { emailToken } = useParams<{ emailToken: string }>();
  const [resposeMessage, setResposeMessage] = useState("Please wait email is verifying");
  const history = useHistory();

  useEffect(() => {
    const cpVerifyEmail = async () => {
      const resp = await apVerifyEmail({ emailToken });
      if (resp.status === REQUEST_CODE_SUCCESS) {
        toast.showByStatusCode(resp.body.message, resp.status);
        history.push(LOGIN_ROUTE);
      } else {
        setResposeMessage(resp.body.message ?? "");
        toast.showByStatusCode(resp.body.message, resp.status);
      }
    };
    cpVerifyEmail();
  }, [emailToken, history]);
  return (
    <CpContainer>
      <CpTypography align="center" variant="h6" className="register-comp-title">{resposeMessage}</CpTypography>
    </CpContainer>
  );
};

export default CpVerifyEmailPage;
