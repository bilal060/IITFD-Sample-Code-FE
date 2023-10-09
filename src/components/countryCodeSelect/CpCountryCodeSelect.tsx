import React from "react";
import { CpTextField, CpTypography, CpAutocomplete } from "../../shared/moduleImports/utModuleImports";
import countries from "../countrySelect/dtCountries.json";
import "./stCountryCodeSelect.scss";

type tpCountry={
  phone: string;
}
const dtCountries = countries as tpCountry[];

const CpCountryCodeSelect = (): JSX.Element => (
  <CpAutocomplete
    id="country-code-select-demo"
    sx={{ width: 100 }}
    className="cp-country-code-select-root"
    openOnFocus
    options={dtCountries}
    autoHighlight={false}
    disablePortal
    getOptionLabel={(option) => option.phone}
    renderOption={(props, option) => (
      <CpTypography
        component="li"
        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
        {...props}
      >
        {option.phone}
      </CpTypography>
    )}
    renderInput={(params) => (
      <CpTextField
        {...params}
        variant="standard"
        placeholder="+92"
        InputProps={{ ...params.InputProps, disableUnderline: true, autoComplete: "new-password" }}
      />
    )}
  />
);

export default CpCountryCodeSelect;
