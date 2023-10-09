import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { CpTypography } from "../../../../shared/moduleImports/utModuleImports";
import { TDialog1 } from "../tpDialog";

const CpDialogWrap1 = ({
  title, open, onClose, children, onConfirm, type,
}: TDialog1):JSX.Element => (
  <SweetAlert
    type={type}
    show={open}
    title={<CpTypography>{title}</CpTypography>}
    onConfirm={onConfirm}
    onCancel={onClose}
  >
    <>{children}</>
  </SweetAlert>
);

export default CpDialogWrap1;
