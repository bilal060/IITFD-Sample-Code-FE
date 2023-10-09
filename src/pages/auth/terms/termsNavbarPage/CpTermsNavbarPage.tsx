import React from "react";
import {
  AppBar,
  Toolbar,
} from "@mui/material";
import { CpButton, CpGrid } from "../../../../shared/moduleImports/utModuleImports";
import { dtActive, dtInactive } from "./dtTermsNavbarPage";

const CpTermsNavbarPage = (active: string): JSX.Element => (
  <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
    <CpGrid container sx={{ justifyContent: "space-between" }}>
      <CpGrid item xs={4} sx={{ height: "30px" }}>
        <Toolbar sx={active === "TermsOfUse" ? dtActive : dtInactive}>
          <CpButton color="inherit">
            Terms of Use
          </CpButton>
        </Toolbar>
      </CpGrid>
      <CpGrid item xs={5}>
        <Toolbar sx={active === "TermsPersonalData" ? dtActive : dtInactive}>
          <CpButton color="inherit">
            Terms of Personal Data Protection
          </CpButton>
        </Toolbar>
      </CpGrid>
      <CpGrid item xs={3}>
        <Toolbar sx={active === "TermsEmailDialog" ? dtActive : dtInactive}>
          <CpButton color="inherit">
            E-mail Domain
          </CpButton>
        </Toolbar>
      </CpGrid>
    </CpGrid>
  </AppBar>
);
export default CpTermsNavbarPage;
