import React from "react";
import { useForm } from "react-hook-form";
import { InfoIcon } from "../../../shared/moduleImports/utIconsImports";
import {
  CpGrid,
  CpButton,
  CpTypography,
  CpInputLabel,
  CpBox,
  CpForm,
  CpAutocompleteField,
  CpFormTextFieldInput,
  CpAutocompleteCountrySelect,
  CpTextarea,
  CpCheckbox,
  CpFormControlLabel,
  CpAutocompleteCountryCodeSelect,
} from "../../../shared/moduleImports/utModuleImports";
import { dtFormInputFields, dtMobileNumberFields, dtRegisteredCompaniesDetails } from "../dtCompanyProfileForm";
import CpImageFileInput from "../../../components/inputs/imageFileInput/CpImageFileInput";
import "../stCompanyProfilePage.scss";

const CpRegisteredCompanies = (name: string, label: string, type: string): JSX.Element => (
  <CpGrid item key={name} md={6} sm={12} xs={12}>
    <CpInputLabel className="input-label-text" htmlFor={name}>
      {label}
    </CpInputLabel>
    {type === "text" && (
      <CpFormTextFieldInput
        name={name}
        placeholder={label}
        label=""
        required
      />
    )}
    {type === "country-select" && (
    <CpAutocompleteCountrySelect />
    )}
  </CpGrid>
);

const CpCompanyAddressFields = (): JSX.Element => (
  <div>
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
  </div>
);

const CpNumberFields = (title: string, col:number, index:number): JSX.Element => (
  <div>
    <CpGrid container item sm={12} xs={12} md={col} spacing={1}>
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

const CpAddressAndPhoneFields = (): JSX.Element => (
  <CpGrid item sm={12} xs={12}>
    {CpCompanyAddressFields()}
    {dtMobileNumberFields?.map(({
      title, col,
    }, index) => (
      CpNumberFields(title, col, index)
    ))}
  </CpGrid>
);

const CpCheckBoxesFields = (): JSX.Element => (
  <CpGrid item md={6} sm={12} xs={12}>
    <CpBox sx={{
      display: "flex", flexDirection: "column",
    }}
    >
      <CpInputLabel className="input-label-text">
        Company Type
      </CpInputLabel>
      <CpFormControlLabel
        label="Buyer Company Type"
        control={<CpCheckbox />}
      />
      <CpFormControlLabel
        label="Seller Company Type"
        control={<CpCheckbox />}
      />
    </CpBox>
  </CpGrid>
);

const CpAddressFields = (): JSX.Element => (
  <CpGrid item md={6} sm={12} xs={12}>
    <CpInputLabel className="input-label-text">
      Address Name
    </CpInputLabel>
    <CpFormTextFieldInput
      className="input-label-text"
      name="registeredCompanyAddress"
      label=""
      placeholder="Registered Company Address"
      required
    />
  </CpGrid>
);

const CpDescriptionField = (): JSX.Element => (
  <CpGrid item md={6} sm={12} xs={12}>
    <CpInputLabel className="input-label-text">
      Company Short Description
    </CpInputLabel>
    <CpTextarea
      className="description-box"
      minRows={5}
      name="companyShortDescription"
      required
    />
  </CpGrid>
);

const CpRegisteredComapnyDetails = (): JSX.Element => (
  <CpGrid container spacing={3}>
    <CpGrid item md={12} sm={12} xs={12}>
      <CpTypography variant="h6">Registerd Company Address</CpTypography>
    </CpGrid>
    {CpAddressFields()}
    {dtRegisteredCompaniesDetails?.map(({ name, label, type }) => (
      CpRegisteredCompanies(name, label, type)
    ))}
    {CpAddressAndPhoneFields()}
  </CpGrid>
);

const CpImageField = (): JSX.Element => (
  <CpGrid item md={6} sm={12} xs={12}>
    <CpInputLabel className="input-label-text">
      Upload / Change Company Logo
    </CpInputLabel>
    <CpImageFileInput />
  </CpGrid>
);

const CpDunsField = (): JSX.Element => (
  <CpGrid item md={6} sm={12} xs={12}>
    <CpInputLabel className="input-label-text">
      DUNS Number
    </CpInputLabel>
    <CpGrid item xs={12}>
      <CpGrid item xs={12} className="dnus-number-field">
        <CpFormTextFieldInput
          name="dunsNumber"
          placeholder="DUNS Number"
          label=""
        />
        <CpButton className="i-icon">
          <InfoIcon />
        </CpButton>
      </CpGrid>
    </CpGrid>
  </CpGrid>
);

const CpCompanyProfileForm = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  return (
    <CpBox className="cp-box-form" p={3}>
      <CpForm methods={methods}>
        <CpGrid container spacing={3}>
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
              {type === "country-select" && <CpAutocompleteCountrySelect />}
            </CpGrid>
          ))}
          {CpDunsField()}
          {CpDescriptionField()}
          {CpCheckBoxesFields()}
          {CpImageField()}
        </CpGrid>
        {CpRegisteredComapnyDetails()}
      </CpForm>
    </CpBox>
  );
};
export default CpCompanyProfileForm;
