import React, { useEffect } from "react";
import {
  CpContainer, CpTypography,
} from "../../../../shared/moduleImports/utModuleImports";
import "./stTermsOfEmailDomainPage.scss";
import CpTermsOfEmailDomainForm from "./CpTermsOfEmailDomainForm";

const CpTermsOfEmailDomainPage = (
  active: string, changeActive: boolean, setChangeActive: (changeActive: boolean) => void,
): JSX.Element => {
  useEffect(() => {
    if (changeActive) {
      if (active === "TermsEmailDialog") {
        setChangeActive(false);
      }
    }
  }, [active, changeActive, setChangeActive]);

  return (

    <CpContainer component="main" className="cp-email-domain-root">
      <CpTypography component="h1" variant="h6" fontWeight={600} mb={2}>Email Domain:</CpTypography>
      <CpTermsOfEmailDomainForm />
    </CpContainer>
  );
};

export default CpTermsOfEmailDomainPage;
