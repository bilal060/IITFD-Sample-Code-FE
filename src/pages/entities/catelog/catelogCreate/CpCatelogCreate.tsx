import React from "react";
import { useForm } from "react-hook-form";
import CpImageFileInput from "../../../../components/inputs/imageFileInput/CpImageFileInput";
import {
  CpBox, CpButton,
  CpForm, CpFormTextFieldInput, CpGrid, CpInputLabel, CpPageHeaderComp, CpPaper, CpTextarea,
} from "../../../../shared/moduleImports/utModuleImports";
import formInputFields from "./dtCatelogForm";

const CpCatelogCreate = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpPaper elevation={5}>
      <CpBox mt={5} p={5}>
        <CpPageHeaderComp mainText="Create Catelog" secondText="By Seller" />
        <CpForm methods={methods}>
          <CpGrid container spacing={2}>
            <CpGrid container spacing={2} item xs={12} md={6}>
              {formInputFields?.map(({
                name, col, type, label, placeholder,
              }) => (
                <CpGrid key={name} container item xs={12} md={col}>
                  <CpGrid item xs={12}>
                    <CpInputLabel className="input-label-text" htmlFor={name}>{label}</CpInputLabel>
                  </CpGrid>
                  {type === "text" && (
                  <CpGrid item xs={12}>
                    <CpFormTextFieldInput size="small" fullWidth name={name} placeholder={placeholder} label="" required />
                  </CpGrid>
                  )}
                </CpGrid>
              ))}
            </CpGrid>
            <CpGrid container item xs={12} md={6}>
              <CpGrid item xs={12}>
                <CpGrid item xs={12}>
                  <CpInputLabel className="input-label-text" htmlFor="description">Item description</CpInputLabel>
                </CpGrid>
                <CpTextarea name="description" placeholder="Item description" minRows={13} className="catelog-text-area" />
              </CpGrid>
              <CpGrid item xs={12}>
                <CpInputLabel className="input-label-text" htmlFor="imageUpload">Image Upload</CpInputLabel>
                <CpImageFileInput />
              </CpGrid>
            </CpGrid>
            <CpGrid item xs={10} />
            <CpGrid item md={2} xs={12}><CpButton fullWidth variant="contained" type="submit">Create</CpButton></CpGrid>
          </CpGrid>
        </CpForm>
      </CpBox>
    </CpPaper>
  );
};
export default CpCatelogCreate;
