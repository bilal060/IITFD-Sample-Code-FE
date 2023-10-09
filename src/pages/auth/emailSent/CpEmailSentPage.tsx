import React from "react";
import { useHistory } from "react-router-dom";
import {
  CpContainer, CpTypography, CpBox, CpPaper,
} from "../../../shared/moduleImports/utModuleImports";

const CpEmailSentPage = (): JSX.Element => {
  const history = useHistory();
  return (
    <CpContainer component="main" maxWidth="lg" className="cp-company-exists-page-root">
      <CpPaper elevation={3}>
        <CpBox className="cp-box-page-box" sx={{ py: 2 }}>
          <img
            alt="Email Sent"
            width="300px"
            src="public/static/media/mail-envelop.png"
          />
          <CpTypography component="h1" textAlign="center" mx={1} variant="h6" pb={0} fontSize="small" fontWeight={700}>
            Activate Your Account
          </CpTypography>
          <CpTypography component="p" textAlign="center" mx={1} pb={0} fontSize="small">
            An Confirmation Email was sent to the Address
            {" "}
            {history.location.state?.email}
          </CpTypography>
          <CpTypography component="p" textAlign="center" mx={1} pb={0} fontSize="small">
            Define your password through the link
          </CpTypography>
          <CpTypography component="h1" textAlign="center" mx={1} variant="h6" fontSize="small" fontWeight={700}>
            Didn&apos;t receive the Email?
          </CpTypography>
          <CpTypography component="p" textAlign="center" mx={1} pb={0} fontSize="small">
            Please check your SPAM mailbox.
          </CpTypography>
        </CpBox>
      </CpPaper>
    </CpContainer>
  );
};

export default CpEmailSentPage;
