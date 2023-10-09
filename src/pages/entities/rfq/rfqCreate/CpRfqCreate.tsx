import React from "react";
import { useForm } from "react-hook-form";
import CpPageHeader from "../../../../components/pageHeader/CpPageHeader";
import {
  CpBox,
  CpButton,
  CpForm, CpFormRadioInput, CpFormTextFieldInput, CpGrid, CpInputLabel, CpPaper, CpTextarea,
} from "../../../../shared/moduleImports/utModuleImports";
import { formInputAreaFields, formInputFields, radioValues } from "./dtRfqForm";

type TFormInputFieldsType = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  col: number;
}

const cpRenderInputFields = (field: TFormInputFieldsType): JSX.Element => {
  const {
    name, col, type, label, placeholder,
  } = field;
  return (
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
  );
};

const CpRfqCreate = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpPaper elevation={5}>
      <CpBox mt={5} p={5}>
        <CpPageHeader mainText="Create RFQ" secondText="By Seller" />
        <CpForm methods={methods}>
          <CpGrid item xs={12}>
            <CpInputLabel className="input-label-text" htmlFor="type">RFQ type</CpInputLabel>
            <CpFormRadioInput name="type" label="" required data={radioValues} />
          </CpGrid>
          <CpGrid container spacing={2}>
            <CpGrid container spacing={2} item xs={12} md={6}>
              {formInputFields?.map((field) => (
                cpRenderInputFields(field)
              ))}
            </CpGrid>
            {formInputAreaFields?.map(({
              name, label, tableRows, col,
            }) => (
              <CpGrid container item xs={12} md={col}>
                <CpGrid item xs={12}>
                  <CpInputLabel className="input-label-text" htmlFor={name}>{label}</CpInputLabel>
                </CpGrid>
                <CpGrid item xs={12}>
                  <CpTextarea
                    name={name}
                    placeholder={label}
                    minRows={tableRows}
                    className="rfq-text-area"
                  />
                </CpGrid>
              </CpGrid>
            ))}
            <CpGrid item xs={10} />
            <CpGrid item md={2} xs={12}><CpButton fullWidth variant="contained" type="submit">Create</CpButton></CpGrid>
          </CpGrid>
        </CpForm>
      </CpBox>
    </CpPaper>
  );
};
export default CpRfqCreate;
