import { FieldErrors } from "react-hook-form";
import * as Yup from "yup";
import { tpAutoCompleteValue } from "../../../shared/types/tpInput";

export const utHasControlError = (errors: FieldErrors, name: string):boolean => {
  if (errors) return errors[name]?.type === "required";
  return false;
};

export const utGetOptions = (values: string[]): tpAutoCompleteValue[] => (
  values.map((opt) => ({ label: opt, value: opt })));

export const utActivateAccountFormSchema = Yup.object({
  companyName: Yup.string().required(),
  workAs: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(5, "Password is too short - should be 8 characters minimum.").required(),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
}).required();
