import { SweetAlertType } from "react-bootstrap-sweetalert/dist/types";
import { TEmptyFn } from "../../../shared/types/tpOther";

type TDialogProps = {
  open: boolean,
  onClose: TEmptyFn,
  onConfirm: TEmptyFn,
  title: string,
  children: JSX.Element
}

export type TDialog1 = TDialogProps & { type?: SweetAlertType };
export type TDialog2 = TDialogProps;
export type TDialog3 = Omit<TDialogProps, "onConfirm">;
