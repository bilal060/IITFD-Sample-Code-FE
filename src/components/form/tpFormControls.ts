import React from "react";

type TControlObject = { label: string, value: string };

type TSize = "small" | "medium" | undefined;

export type TFormControlDefault = {
  name: string,
  label: string,
  required?: boolean,
  fullWidth?: boolean,
  placeholder?: string,
  className?: string,
  size?: TSize
}

export type TFormTextInputControl = {
  type?: React.InputHTMLAttributes<unknown>["type"]
}

export type TFormSelectInputControl = {
  data: TControlObject[],
}

export type TFormRadioInputControl = {
  data: TControlObject[],
  row?: boolean,
}

export type TFormCheckboxInputControl = {

}

export type TFormMatInputControl = TFormControlDefault & TFormTextInputControl;
export type TFormMatSelectInputControl = TFormControlDefault & TFormSelectInputControl;
export type TFormMatRadioInputControl = TFormControlDefault & TFormRadioInputControl;
export type TFormMatCheckboxInputControl = TFormControlDefault & TFormCheckboxInputControl;
export type TFormMatSwitchInputControl = TFormControlDefault;
