import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { DatePickerProps } from "@mui/lab";
import { CpBox, CpGrid } from "../../shared/moduleImports/utModuleImports";
import "./stCustomInputDatePicker.scss";

type tpProp = Pick<DatePickerProps, "onChange"|"value">;

const CpCustomInputDatePicker = ({ value, onChange }:tpProp): JSX.Element => (
  <div className="cp-custom-date-picker-root">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Enter a date"
        value={value}
        showTodayButton
        clearable
        onChange={onChange}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <CpBox sx={{ display: "flex", alignItems: "center" }} className="cp-box">
            <CpGrid item xs={8}><input ref={inputRef} {...inputProps} /></CpGrid>
            <CpGrid item xs={4}>{InputProps?.endAdornment}</CpGrid>
          </CpBox>
        )}
      />
    </LocalizationProvider>
  </div>
);

export default CpCustomInputDatePicker;
