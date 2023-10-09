import { TextFieldProps } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

export type tpDialogProp = {
  open: boolean;
  children: JSX.Element | JSX.Element[];
  size?: "sm"|"md"|"auto";
  className?: string;
  onClose: (value: string) => void;
}
export type tpInputDefaultProp = TextFieldProps
export type tpSelectDefaultProp = SelectInputProps
