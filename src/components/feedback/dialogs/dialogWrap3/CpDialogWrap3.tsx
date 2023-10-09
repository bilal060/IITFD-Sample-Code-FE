import React from "react";
import {
  Dialog, DialogContent, DialogTitle, IconButton,
} from "@mui/material";
import { TDialog3 } from "../tpDialog";
import { CloseIcon } from "../../../../shared/moduleImports/utIconsImports";

const CpDialogWrap3 = ({
  open, onClose, title, children,
}: TDialog3):JSX.Element => (
  <Dialog
    onClose={() => onClose()}
    aria-labelledby="dialog-title"
    open={open}
  >
    <DialogTitle id="dialog-title">
      {title}
      <IconButton
        onClick={() => onClose()}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <>{children}</>
    </DialogContent>
  </Dialog>
);

export default CpDialogWrap3;
