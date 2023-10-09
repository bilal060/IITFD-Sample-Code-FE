import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { TFormMatSelectInputControl } from "../../../tpFormControls";
import { utHasControlError } from "../../../utils/utForm";

const CpSelectInputControl = ({
  name, label, required, data, fullWidth, size,
}: TFormMatSelectInputControl):JSX.Element => {
  const { control } = useFormContext();

  const {
    field: { onChange, value, ref },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: "",
  });

  const hasError = utHasControlError(errors, name);
  const id = `${name}-select-input`;

  return (
    <FormControl fullWidth={fullWidth} size={size} sx={{ minWidth: 120 }} error={hasError}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        inputRef={ref}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>The field is required</FormHelperText>}
    </FormControl>
  );
};

export default CpSelectInputControl;
