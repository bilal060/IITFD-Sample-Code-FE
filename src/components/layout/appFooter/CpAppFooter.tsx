import React from "react";
import {
  CpGrid, CpTypography, CpPaper,
} from "../../../shared/moduleImports/utModuleImports";
import { PublicIcon } from "../../../shared/moduleImports/utIconsImports";
import useStyles from "../stShared";
import { dtFooterItems } from "./dtAppFooter";
import "./stAppFooter.scss";

const CpAppFooter = (): JSX.Element => {
  const classes = useStyles({});
  return (
    <div className="app-footer-comp-root">
      <CpPaper
        sx={{
          position: "fixed", bottom: 0, left: 0, right: 0, borderRadius: 0,
        }}
        elevation={3}
        className={classes.footer}
      >
        <CpGrid container className="footer-items">
          {
            dtFooterItems.map((item) => (
              <CpGrid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <CpTypography variant="h6" align="right" gutterBottom>
                  {item}
                </CpTypography>
              </CpGrid>
            ))
          }
          <CpGrid item xs={2} sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <CpTypography variant="h6" align="right" gutterBottom>
              <PublicIcon />
            </CpTypography>
          </CpGrid>
        </CpGrid>

      </CpPaper>
    </div>
  );
};

export default CpAppFooter;
