import React, { useEffect } from "react";
import DialogContentText from "@mui/material/DialogContentText";
import { CpTypography } from "../../../../shared/moduleImports/utModuleImports";
import { tpTermsChildProps } from "../../../../shared/types/pages/tpTerms";

const CpTermsOfPersonalDataPage = (
  {
    descriptionElementRef, active, srHandleActive, changeActive, setChangeActive,
  }:tpTermsChildProps,
): JSX.Element => {
  useEffect(() => {
    if (changeActive) {
      if (active === "TermsPersonalData") {
        if (srHandleActive) srHandleActive("TermsEmailDialog");
        setChangeActive(false);
      }
    }
  }, [active, changeActive, srHandleActive, setChangeActive]);
  return (
    <DialogContentText
      id="scroll-dialog-description"
      ref={descriptionElementRef}
      tabIndex={-1}
    >
      <CpTypography component="h1" variant="h6" fontWeight={600} mb={2}>Terms of Personal Data Protection:</CpTypography>
      {[...new Array(50)]
        .map(
          () => `usman usman usman at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join("\n")}
    </DialogContentText>
  );
};

export default CpTermsOfPersonalDataPage;
