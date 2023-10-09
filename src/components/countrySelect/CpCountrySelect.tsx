import React from "react";
import { CpBox, CpTextField, CpAutocomplete } from "../../shared/moduleImports/utModuleImports";
import countries from "./dtCountries.json";
import "./stCountrySelect.scss";

interface tpCountry {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
interface countries {
  countries: readonly tpCountry[]
}
const dtCountries = countries as tpCountry[];
const CpCountrySelect = (): JSX.Element => (
  <CpAutocomplete
    id="country-select-demo"
    className="cp-country-select-root"
    sx={{ width: 300 }}
    options={dtCountries}
    autoHighlight
    getOptionLabel={(option) => option.label}
    renderOption={(props, option) => (
      <CpBox
        component="li"
        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
        {...props}
      >
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          alt=""
        />
        {option.label}
        (
        {option.code}
        )
        {option.phone}
      </CpBox>
    )}
    renderInput={(params) => (
      <CpTextField
        {...params}
        placeholder="Choose a country"
        variant="standard"
        InputProps={{ ...params.InputProps, disableUnderline: true, autoComplete: "new-password" }}
      />
    )}
  />
);

export default CpCountrySelect;
