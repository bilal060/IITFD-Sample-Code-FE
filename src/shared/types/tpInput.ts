import {
  BaseTextFieldProps,
} from "@mui/material";
import { UseAutocompleteProps } from "@mui/material/useAutocomplete/useAutocomplete";
import { FieldConfig } from "formik";

export type tpAutoCompleteValue = {
  label: string,
  value: string
}
export type tpAutoComplete <T, > = UseAutocompleteProps<tpAutoCompleteValue, boolean, boolean, boolean>&
FieldConfig&BaseTextFieldProps&{
  optionLabelKey?: keyof T,
  defaultValue?: keyof T,
  fieldLabel?: string,
  placeholder?: string,
  label?: string,
  required?: boolean,
  className?: string,
};
