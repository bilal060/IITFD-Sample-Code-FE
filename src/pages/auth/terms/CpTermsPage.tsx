import React, { useRef, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CpButton, CpCheckbox, CpGrid, CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import "./stTermsPage.scss";
import CpTermsNavbarPage from "./termsNavbarPage/CpTermsNavbarPage";
import CpTermsOfUsePage from "./termsOfUse/CpTermsOfUsePage";
import CpTermsOfPersonalDataPage from "./termsOfPersonalData/CpTermsOfPersonalDataPage";
import CpTermsOfEmailDomainPage from "./termsOfEmailDomain/CpTermsOfEmailDomainPage";
import { dtCheckboxText } from "./termsOfEmailDomain/dtTermsOfEmailDomain";
import { tpTermsChildProps } from "../../../shared/types/pages/tpTerms";

const CpDialogActions = (
  {
    active, agree, setAgree, srHandleChangeActive,
  }:tpTermsChildProps,
): JSX.Element => (
  active !== "TermsEmailDialog"
    ? (
      <DialogActions>
        <CpGrid container sx={{ justifyContent: "space-between" }}>
          <CpGrid item mx={1} display="flex" flexDirection="row" alignItems="center">
            <CpCheckbox
              size="small"
              name="agree"
              onChange={(e) => { if (setAgree) setAgree(e.target.checked); }}
              checked={agree}
            />
            <CpTypography>{dtCheckboxText(active)}</CpTypography>
          </CpGrid>
          <CpGrid item>
            <CpButton
              variant="contained"
              disabled={!agree}
              onClick={() => {
                if (srHandleChangeActive) srHandleChangeActive();
              }}
            >
              Continue
            </CpButton>
          </CpGrid>
        </CpGrid>
      </DialogActions>
    ) : <></>
);

const CpTermsDialogBox = (
  {
    descriptionElementRef, active, srHandleActive,
    changeActive, setChangeActive, agree, setAgree, srHandleChangeActive,
  }:tpTermsChildProps,
): JSX.Element => (
  <>
    <DialogTitle id="scroll-dialog-title">{CpTermsNavbarPage(active)}</DialogTitle>
    <DialogContent dividers>
      {active === "TermsOfUse" && (
        <CpTermsOfUsePage
          descriptionElementRef={descriptionElementRef}
          active={active}
          srHandleActive={srHandleActive}
          changeActive={changeActive}
          setChangeActive={setChangeActive}
        />
      )}
      {active === "TermsPersonalData" && (
        <CpTermsOfPersonalDataPage
          descriptionElementRef={descriptionElementRef}
          active={active}
          srHandleActive={srHandleActive}
          changeActive={changeActive}
          setChangeActive={setChangeActive}
        />
      )}
      {active === "TermsEmailDialog" && CpTermsOfEmailDomainPage(active, changeActive, setChangeActive)}
    </DialogContent>
    <CpDialogActions
      active={active}
      changeActive={changeActive}
      setChangeActive={setChangeActive}
      agree={agree}
      setAgree={setAgree}
      srHandleChangeActive={srHandleChangeActive}
    />
  </>
);

const CpTermsPage = (open: boolean, setOpen: (open: boolean) => void): JSX.Element => {
  const [active, setActive] = useState<string>("TermsOfUse");
  const [changeActive, setChangeActive] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);
  const srHandleClose = () => {
    setOpen(false);
  };
  const srHandleChangeActive = () => {
    setChangeActive(true);
    setAgree(false);
  };
  const srHandleActive = (value: string) => {
    setActive(value);
  };
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          srHandleClose();
        }
      }}
      scroll="paper"
      maxWidth="md"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <CpTermsDialogBox
        descriptionElementRef={descriptionElementRef}
        active={active}
        srHandleActive={srHandleActive}
        changeActive={changeActive}
        setChangeActive={setChangeActive}
        agree={agree}
        setAgree={setAgree}
        srHandleChangeActive={srHandleChangeActive}
      />
    </Dialog>
  );
};

export default CpTermsPage;
