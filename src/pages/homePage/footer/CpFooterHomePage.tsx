import React from "react";
import {
  CpBox,
  CpContainer,
  CpLink,
  CpGrid,
  CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import {
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  GitHubIcon,
} from "../../../shared/moduleImports/utIconsImports";
import "./stFooterHomePage.scss";
import { footerItems } from "../dtHomePage";

const CpCopyRights = () => (
  <span className="copyrights-text">
    All rights reserved. Copyright © 2022
    {" "}
    <CpLink
      className="link-to-title"
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      test
    </CpLink>
    .
  </span>
);
const CpSocialLinks = () => (
  <div>
    <CpBox className="title-box">
      <CpTypography variant="h6" className="heading-main-title">
        test
      </CpTypography>
    </CpBox>
    <CpBox className="box-social-icons">
      <CpLink
        className="link-to-icon"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon />
      </CpLink>
      <CpLink
        className="link-to-icon"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </CpLink>
      <CpLink
        className="link-to-icon"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </CpLink>
      <CpLink
        className="link-to-icon"
        href="#"
        target="_blank"
        rel="noreferrer"
      >
        <YouTubeIcon />
      </CpLink>
    </CpBox>
  </div>
);
const CpFooterHomePage = (): JSX.Element => (
  <CpBox className="cp-footer-comp-root">
    <CpBox className="box-footer">
      <CpContainer className="container-footer-wrapper" maxWidth="lg">
        <CpGrid
          container
          className="grid-container-footer"
          spacing={{ xs: 3 }}
        >
          <CpGrid item className="footer-buttons-grid" xs={12} md={3}>
            <CpSocialLinks />
          </CpGrid>
          {footerItems.map((item) => (
            <CpGrid item key={item.titleText} className="grid-item-main" xs={6} md={2}>
              <span className="grid-main-items-title">
                {item.titleText}
              </span>
              <CpBox className="box-subitems">
                {item.items.map((subItem) => (
                  <CpBox className="box-single-item" key={subItem}>
                    <CpLink
                      className="link-to-item"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {subItem}
                    </CpLink>
                  </CpBox>
                ))}
              </CpBox>
            </CpGrid>
          ))}
          <CpGrid item className="copyrights-grid-item" xs={12}>
            <CpCopyRights />
          </CpGrid>
        </CpGrid>
      </CpContainer>
    </CpBox>
  </CpBox>
);

export default CpFooterHomePage;
