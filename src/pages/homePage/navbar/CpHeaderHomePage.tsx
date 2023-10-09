import React, { useState } from "react";
import "./stHeaderHomePage.scss";
import {
  CpBox,
  CpContainer,
  CpLink,
  CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import {
  DashboardRoundedIcon,
  KeyboardArrowDownRoundedIcon,
  MenuRoundedIcon,
  CloseRoundedIcon,
} from "../../../shared/moduleImports/utIconsImports";

const navItems = ["Pages", "About", "Contacts", "Sections"];

const CpDropDownList = () => (
  <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered dropdown-wrapper">
    <div className="MuiCollapse-wrapper MuiCollapse-vertical vertical-wrapper">
      <div className="MuiCollapse-wrapperInner MuiCollapse-vertical dropdown-wrapper-inner">
        <CpBox className="box-item-container">
          {navItems.map((item) => (
            <CpBox key={item} className="dropdown-item-main">
              <CpTypography variant="body2" className="dropdown-item-icon">
                <DashboardRoundedIcon className="icon-item" />
              </CpTypography>
              <span className="dropdown-item-text">{item}</span>
              <CpTypography variant="body2" className="nav-item-dropdown-icon">
                <KeyboardArrowDownRoundedIcon className="icon-key-down" />
              </CpTypography>
            </CpBox>
          ))}
        </CpBox>
      </div>
    </div>
  </div>
);
const CpHeaderHomePage = (): JSX.Element => {
  const [display, setDisplay] = useState(false);
  const cpToggleMenu = () => {
    setDisplay(!display);
  };
  return (
    <div className="cp-header-root-comp">
      <CpContainer className="container-header-comp">
        <CpBox className="box-header-root-comp">
          <CpBox className="box-header-nav-wrapper">
            <CpLink className="link-title-comp" href="#">
              <span className="MP-title-text">test</span>
            </CpLink>
            <CpBox className="box-nav-items-wrapper">
              {navItems.map((item) => (
                <CpBox key={item} className="box-nav-item">
                  <CpTypography variant="body2" className="nav-item-icon">
                    <DashboardRoundedIcon className="icon-item" />
                  </CpTypography>
                  <span className="nav-item-text">{item}</span>
                  <CpTypography
                    variant="body2"
                    className="nav-item-dropdown-icon"
                  >
                    <KeyboardArrowDownRoundedIcon className="icon-key-down" />
                  </CpTypography>
                </CpBox>
              ))}
            </CpBox>
            <CpBox className="box-menu-icon">
              {!display ? (
                <MenuRoundedIcon className="icon-menu" onClick={cpToggleMenu} />
              ) : (
                <CloseRoundedIcon className="icon-menu" onClick={cpToggleMenu} />
              )}
            </CpBox>
          </CpBox>
          <CpBox
            className={
              display ? "dropdown-menu" : "dropdown-menu dropdown-display"
            }
          >
            <CpDropDownList />
          </CpBox>
        </CpBox>
      </CpContainer>
    </div>
  );
};

export default CpHeaderHomePage;
