import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { TFormMatCheckboxInputControl } from "../../../tpFormControls";
import { utHasControlError } from "../../../utils/utForm";

const CpCheckboxInputControl = ({
  name, label, required,
}: TFormMatCheckboxInputControl):JSX.Element => {
  const { control } = useFormContext();

  const {
    field: { onChange, value, ref },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: false,
  });

  return (
    <FormControlLabel
      sx={{ color: utHasControlError(errors, name) ? "error.main" : "" }}
      control={(
        <Checkbox
          value={value}
          onChange={onChange}
          name={name}
          inputRef={ref}
        />
      )}
      label={label}
    />
  );
};

export default CpCheckboxInputControl;
