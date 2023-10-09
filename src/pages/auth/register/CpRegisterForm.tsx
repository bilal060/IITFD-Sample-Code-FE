import React from "react";
import { useForm } from "react-hook-form";
import CpImageFileInput from "../../../components/inputs/imageFileInput/CpImageFileInput";
import {
  CpBox,
  CpButton,
  CpForm,
  CpFormRadioInput,
  CpFormSelectionInput,
  CpFormTextFieldInput,
  CpGrid,
  CpInputLabel,
  CpPageHeaderComp,
  CpPaper,
  CpRecaptchaComp,
} from "../../../shared/moduleImports/utModuleImports";
import { formInputFields, radioValues } from "./dtRegisterForm";

const CpRecaptchaWithButton = (): JSX.Element => (
  <>
    <CpGrid item xs={12}><CpRecaptchaComp /></CpGrid>
    <CpGrid item xs={10} />
    <CpGrid item md={2} xs={12}>
      <CpButton fullWidth variant="contained" type="submit">Submit</CpButton>
    </CpGrid>
  </>
);

const CpImageUpload = (): JSX.Element => (
  <CpGrid item xs={2}>
    <CpInputLabel className="input-label-text" htmlFor="imageUpload">Image Upload</CpInputLabel>
    <CpImageFileInput />
  </CpGrid>
);

const CpRegisterForm = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpPaper elevation={3}>
      <CpBox p={3} sx={{ marginTop: 5, marginBottom: 5 }}>
        <CpPageHeaderComp mainText="Register as Seller" secondText="" />
        <CpForm methods={methods}>
          <CpGrid container spacing={2}>
            <CpGrid item xs={6}>
              <CpInputLabel className="input-label-text" htmlFor="workAs">Primarily Work as</CpInputLabel>
              <CpFormRadioInput label="" name="workAs" required data={radioValues} />
            </CpGrid>
            <CpGrid item xs={4} />
            <CpImageUpload />
            {formInputFields?.map(({
              name, col, options, type, label,
            }) => (
              <CpGrid key={name} container item xs={12} md={col}>
                <CpGrid item xs={12}>
                  <CpInputLabel className="input-label-text" htmlFor={name}>{label}</CpInputLabel>
                </CpGrid>
                {type === "text" && (
                  <CpGrid item xs={12}>
                    <CpFormTextFieldInput
                      size="small"
                      fullWidth
                      name={name}
                      placeholder={label}
                      label=""
                      required
                    />
                  </CpGrid>
                )}
                {type === "select" && options?.length && (
                  <CpGrid item xs={12}>
                    <CpFormSelectionInput size="small" fullWidth name={name} required label="" data={options} />
                  </CpGrid>
                )}
              </CpGrid>
            ))}
            <CpRecaptchaWithButton />
          </CpGrid>
        </CpForm>
      </CpBox>
    </CpPaper>
  );
};
export default CpRegisterForm;
