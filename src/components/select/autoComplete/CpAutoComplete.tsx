import React from "react";
import {
  Autocomplete, TextField,
} from "@mui/material";
import { tpAutoComplete, tpAutoCompleteValue } from "../../../shared/types/tpInput";
import "./stAutoComplete.scss";

type tpProps = tpAutoComplete<unknown>;

const stList = {
  display: "flex",
  justifyContent: "space-between",
};
const stListValue = {
  fontSize: "0.7rem",
  opacity: 0.5,
};

const CpOptionList = (props: React.HTMLAttributes<HTMLLIElement>, { label, value }: tpAutoCompleteValue): JSX.Element => (
  <li style={stList} {...props}>
    <span>{label || ""}</span>
    &nbsp;&nbsp;&nbsp;
    <span style={stListValue}>{value}</span>
  </li>
);

const CpAutoComplete = ({
  id, label, options, placeholder, required, onChange, freeSolo,
  defaultValue, autoSelect, className, sx,
}: tpProps):JSX.Element => (
  <Autocomplete
    className={`cp-auto-complete-root ${className}`}
    freeSolo={freeSolo}
    autoSelect={autoSelect}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="standard"
        label={label}
        placeholder={placeholder}
        required={required}
        InputProps={{ ...params.InputProps, disableUnderline: true }}
      />
    )}
    id={id}
    options={options}
    renderOption={(props, option) => CpOptionList(props, option)}
    onChange={onChange}
    defaultValue={defaultValue}
    sx={sx}
  />
);

export default CpAutoComplete;
