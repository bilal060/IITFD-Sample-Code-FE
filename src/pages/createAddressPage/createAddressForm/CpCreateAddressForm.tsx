import * as React from "react";
import { useForm } from "react-hook-form";
import "../stCreateAddressPage.scss";
import {
  CpGrid,
  CpTypography,
  CpInputLabel,
  CpForm,
  CpAutocompleteField,
  CpFormTextFieldInput,
  CpAutocompleteCountrySelect,
  CpTextarea,
  CpAutocompleteCountryCodeSelect,
} from "../../../shared/moduleImports/utModuleImports";
import {
  dtFormInputFields, dtMobileNumberFields,
} from "../dtCreateAddress";

const CpNumberFields = (title: string, col:number, id:number, index:number): JSX.Element => (
  <div>
    <CpGrid key={id} container item sm={12} xs={12} md={col} spacing={1}>
      <CpGrid item sm={12} xs={12} md={col}>
        <CpInputLabel className="input-label-text">{title}</CpInputLabel>
      </CpGrid>
      <CpGrid item xs={2}>
        <CpInputLabel className="input-label-text">Int Code</CpInputLabel>
        <CpAutocompleteCountryCodeSelect />
      </CpGrid>
      <CpGrid item xs={3}>
        <CpInputLabel className="input-label-text">Area Code</CpInputLabel>
        <CpTextarea
          name="areaCode"
          placeholder="Area Code"
          minRows={1}
          className="number-text-area"
        />
      </CpGrid>
      <CpGrid item xs={3}>
        <CpInputLabel className="input-label-text">Number</CpInputLabel>
        <CpTextarea
          name="number"
          placeholder="Number"
          minRows={1}
          className="number-text-area"
        />
      </CpGrid>
      {index === 0 && (
      <CpGrid item xs={3}>
        <CpInputLabel className="input-label-text">Extensions</CpInputLabel>
        <CpTextarea
          name="extension"
          placeholder="Extensions"
          minRows={1}
          className="number-text-area"
        />
      </CpGrid>
      )}
    </CpGrid>
  </div>
);

const CpAddressFields = (): JSX.Element => (
  <CpGrid item sm={12} xs={12}>
    <CpInputLabel className="input-label-text">
      Company Address
    </CpInputLabel>
    <CpFormTextFieldInput
      className="input-label-text"
      name="line1"
      label=""
      placeholder="Line 1"
      required
      fullWidth
    />
    &nbsp;
    <CpFormTextFieldInput
      className="input-label-text"
      name="line2"
      label=""
      placeholder="Line 2"
      required
      fullWidth
    />
  </CpGrid>
);

const CpCreateAddressForm = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpForm methods={methods}>
      <CpGrid item sm={12} xs={12}>
        <CpTypography variant="h6">Create New Address</CpTypography>
        <hr />
        {dtFormInputFields?.map(({
          name, options, type, label,
        }) => (
          <CpGrid item key={name} md={6} sm={12} xs={12}>
            <CpInputLabel className="input-label-text" htmlFor={name}>
              {label}
            </CpInputLabel>
            {type === "autocomplete" && options?.length && (
            <CpAutocompleteField
              options={options}
              sx={{ width: 300 }}
              name={name}
            />
            )}
            {type === "text" && (
            <div>
              <CpFormTextFieldInput
                name={name}
                placeholder={label}
                label=""
                required
              />
            </div>
            )}
            {type === "country-select" && (
            <CpAutocompleteCountrySelect />
            )}
          </CpGrid>
        ))}
        {CpAddressFields()}
        <div>
          {dtMobileNumberFields?.map(({ title, col, id }, index) => (
            CpNumberFields(title, col, id, index)
          ))}
        </div>
      </CpGrid>
    </CpForm>
  );
};
export default CpCreateAddressForm;
