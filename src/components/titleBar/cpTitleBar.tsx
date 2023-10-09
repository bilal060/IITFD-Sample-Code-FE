import React from "react";
import "./stTitleBar.scss";
import {
  CpAppBar, CpBox, CpToolBar, CpTypography,
} from "../../shared/moduleImports/utModuleImports";

type PropTypes = {
  leftValue: string;
  rightValue: string;
}
const CpTitleBar = ({ leftValue, rightValue }: PropTypes): JSX.Element => (
  <CpBox className="titlebar-root">
    <CpAppBar position="static">
      <CpToolBar className="cp-toolbar-wrapper">
        <CpTypography variant="h6" component="div" className="typography-left-wrapper">
          {leftValue}
        </CpTypography>
        <CpTypography variant="h6" component="div" className="typography-right-wrapper">
          {rightValue}
        </CpTypography>
      </CpToolBar>
    </CpAppBar>
  </CpBox>
);
export default CpTitleBar;
