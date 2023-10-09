import React, { useState } from "react";
import "./stFooter.scss";
import { Nav, Row } from "react-bootstrap";
import CpFooterPopUps from "./popup/CpFooterPopUps";
import CpFooterNavItem from "./navItems/CpFooterNavItem";

const CpFooter = (): JSX.Element => {
  const [displayPopUp, setDisplayPopUp] = useState<string | null>(null);

  return (
    <>
      <Row className="justify-content-center li-footer cp-footer-root">
        <Nav className="li-footer__list">
          <CpFooterNavItem setDisplayPopUp={setDisplayPopUp} />
          <Nav.Item className="li-footer__item lang-item" />
        </Nav>
      </Row>
      {displayPopUp
        && (
          <CpFooterPopUps
            open={false}
            onClose={() => setDisplayPopUp("")}
          />
        )}
    </>
  );
};

export default CpFooter;
