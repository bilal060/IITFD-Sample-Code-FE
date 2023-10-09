import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { TFormMatSwitchInputControl } from "../../../tpFormControls";
import { utHasControlError } from "../../../utils/utForm";

const CpSwitchControl = ({
  name, label, required,
}: TFormMatSwitchInputControl):JSX.Element => {
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

  const hasError = utHasControlError(errors, name);
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ color: hasError ? "error.main" : "" }}
        control={(
          <Switch
            value={value}
            onChange={onChange}
            name={name}
            inputRef={ref}
          />
        )}
        label={label}
      />
    </FormGroup>
  );
};

export default CpSwitchControl;
