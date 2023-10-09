import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from "@mui/material";
import React from "react";
import { TDialog2 } from "../tpDialog";

const CpDialogWrap2 = ({
  open, onClose, onConfirm, title, children,
}: TDialog2):JSX.Element => (
  <Dialog
    open={open}
    onClose={() => onClose()}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description"><>{children}</></DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm} autoFocus>Confirm</Button>
    </DialogActions>
  </Dialog>
);

export default CpDialogWrap2;
