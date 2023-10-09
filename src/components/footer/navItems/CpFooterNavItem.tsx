import React from "react";
import { Nav } from "react-bootstrap";
import { tpFooterNav, tpFooterDisplayProps } from "../../../shared/types/tpOther";
import dtFooterNavItems from "../../../shared/constants/dtOthers";

const CpFooterNavItem = (props: tpFooterDisplayProps): JSX.Element => {
  const { setDisplayPopUp } = props;

  return (
    <>
      {
        dtFooterNavItems().map((footerNavItem:tpFooterNav) => (
          <Nav.Item className="li-footer__item" key={footerNavItem.title}>
            <Nav.Link
              disabled={footerNavItem.popUpTitle === null}
              onClick={() => setDisplayPopUp(footerNavItem.popUpTitle)}
            >
              { footerNavItem.title }
            </Nav.Link>
          </Nav.Item>
        ))
      }
    </>
  );
};

export default CpFooterNavItem;
