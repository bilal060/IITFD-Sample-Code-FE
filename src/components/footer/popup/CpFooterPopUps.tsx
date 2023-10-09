import "./stFooterPopUps.scss";
import React from "react";
import CpBasicDialog from "../../basicDialog/CpBasicDialog";
import { tpFooterPopUpProps } from "../../../shared/types/tpOther";

const CpFooterPopUps = (props: tpFooterPopUpProps): JSX.Element => {
  const { onClose, open } = props;

  const srOnCloseHandler = () => {
    onClose();
  };

  return (
    <CpBasicDialog
      open={open}
      className="cp-footer-popups-root"
      onClose={srOnCloseHandler}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer feugiat tempor ante. Nunc eget arcu pulvinar,
        ullamcorper ipsum et, elementum odio. In ut varius ante.
        Quisque iaculis elit massa, vel aliquam lacus vestibulum ut.
      </p>
      <p>
        Cras in tellus luctus massa aliquet maximus sed vel ante.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Praesent nec gravida felis, quis vulputate diam.
      </p>
    </CpBasicDialog>
  );
};

export default CpFooterPopUps;
