import React, { useEffect } from "react";
import "./stBasicDialog.scss";
import Dialog from "@mui/material/Dialog";
import { tpDialogProp } from "../../shared/types/tpComponents";

const CpBasicDialog = ({
  children, onClose, size, className, open,
}: tpDialogProp): JSX.Element => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={`cp-simple-dialog-root dialog-size-${size} ${className}`}
    >
      {children}
    </Dialog>
  );
};

CpBasicDialog.defaultProps = {
  size: "md",
  className: "",
};

export default CpBasicDialog;
