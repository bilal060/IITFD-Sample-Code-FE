import React from "react";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import { useController, useFormContext } from "react-hook-form";
import { TFormMatInputControl } from "../../tpFormControls";
import { utHasControlError } from "../../utils/utForm";
import "./stTextInputControl.scss";

const CpTextInputControl = ({
  name, label, required, type, fullWidth, placeholder, className, size,
}: TFormMatInputControl):JSX.Element => {
  const { control } = useFormContext();

  const {
    field: {
      onChange, onBlur, value, ref,
    },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: "",
  });

  const hasError = utHasControlError(errors, name);
  return (
    <TextField
      variant="standard"
      error={hasError}
      helperText={hasError && "The field is required"}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      size={size}
      className={clsx("cp-text-input-root", className)}
      name={name}
      inputRef={ref}
      label={label}
      placeholder={placeholder}
      type={type}
      fullWidth={fullWidth}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default CpTextInputControl;
