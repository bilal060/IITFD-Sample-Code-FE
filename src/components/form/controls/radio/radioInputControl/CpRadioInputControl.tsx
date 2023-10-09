import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { TFormMatRadioInputControl } from "../../../tpFormControls";
import { utHasControlError } from "../../../utils/utForm";

const CpRadioInputControl = ({
  name, label, required, row, data,
}: TFormMatRadioInputControl):JSX.Element => {
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

  const id = `${name}-radio-group`;
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={id}
        value={value}
        onChange={onChange}
        name={name}
        row={row || true}
      >
        {data.map((item) => (
          <FormControlLabel
            key={item.value}
            sx={{ color: utHasControlError(errors, name) ? "error.main" : "" }}
            value={item.value}
            control={<Radio inputRef={ref} />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CpRadioInputControl;
