import React from "react";
import { FormControlLabel } from "@material-ui/core";
import {
  CpPaper,
  CpGrid,
  CpButton,
  CpCustomDataTable,
  CpTypography,
  CpCheckbox,
  CpStack,
  CpContainer,
  CpDivider,
  CpAutocompleteField,
  CpBox,
} from "../../shared/moduleImports/utModuleImports";

import {
  dtRegionColumns,
  dtCountryColumns,
  dtCityColumns,
  dtSelectedServicesLocationsColumns,
  dtSelectedRows,
  dtRegionRows,
  dtCountryRows,
  dtCityRows,
} from "./dtCreateServiceLocation";
import {
  tpServiceLocationsTableWithFilters,
} from "../../shared/types/pages/tpCreateServiceLocation";

import "./stCreateServiceLocation.scss";
import { tpAutoCompleteValue } from "../../shared/types/tpInput";

const CpTableHeaderFields = (title?: string, options?: tpAutoCompleteValue[]): JSX.Element => (
  <>
    {title && (
    <CpTypography variant="h5">
      {title}
    </CpTypography>
    )}

    {options && (
    <CpStack>
      <FormControlLabel label="Show only selected" control={<CpCheckbox />} />
      <CpAutocompleteField
        placeholder="Search"
        size="small"
        options={options}
        name="search"
      />
    </CpStack>
    )}
  </>
);

const CpServiceLocationsTableWithFilters = (props: tpServiceLocationsTableWithFilters): JSX.Element => {
  const {
    rows,
    columns,
    title,
    size,
    options,
    addButton,
  } = props;

  return (
    <>
      <CpGrid item xs={size}>
        {CpTableHeaderFields(title, options)}
        <div className="table-box">
          <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
        </div>
        {addButton
        && (
        <CpGrid container justifyContent="flex-end" mt={3}>
          <CpBox mr={3}>
            <CpButton
              size="small"
              variant="contained"
              className="buttons"
            >
              Add
            </CpButton>
          </CpBox>
        </CpGrid>
        )}
      </CpGrid>
    </>
  );
};

const CpSelectedServiceLocations = (): JSX.Element => (
  <>
    <CpTypography component="h1" textAlign="start" fontWeight={600} mx={3} variant="h5" pb={0}>
      Selected Service Locations
    </CpTypography>
    <CpDivider sx={{ my: 2 }} />
    <CpBox
      p={3}
      sx={{
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CpGrid
        container
        py={5}
        justifyContent="start"
      >
        <CpServiceLocationsTableWithFilters
          rows={dtSelectedRows}
          columns={dtSelectedServicesLocationsColumns}
          size={10}
        />
      </CpGrid>
    </CpBox>

    <CpGrid
      container
      direction="row"
      justifyContent="center"
    >
      <CpGrid container justifyContent="flex-end" mb={2}>
        <CpBox mr={3}>
          <CpButton
            size="small"
            variant="contained"
            className="buttons"
          >
            Save
          </CpButton>
        </CpBox>
        <CpBox mr={5}>
          <CpButton size="small" variant="contained" className="buttons">
            Cancel
          </CpButton>
        </CpBox>
      </CpGrid>
    </CpGrid>
  </>
);

const CpCreateServiceLocationTables = (): JSX.Element => (
  <CpGrid
    container
    spacing={{ lg: 2, sm: 10, xs: 5 }}
    py={5}
    justifyContent="space-around"
  >
    <CpServiceLocationsTableWithFilters
      title="Select Region"
      rows={dtRegionRows}
      columns={dtRegionColumns}
      options={dtRegionRows.map((row) => ({ label: row.region, value: row.region }))}
      size={4}
    />
    <CpServiceLocationsTableWithFilters
      title="Select Country"
      rows={dtCountryRows}
      columns={dtCountryColumns}
      options={dtCountryRows.map((row) => ({ label: row.country, value: row.country }))}
      size={4}
      addButton
    />
    <CpServiceLocationsTableWithFilters
      title="Select City"
      rows={dtCityRows}
      columns={dtCityColumns}
      options={dtCityRows.map((row) => ({ label: row.city, value: row.city }))}
      size={4}
      addButton
    />
  </CpGrid>
);

const CpCreateServiceLocation = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="lg"
    className="cp-create-service-location-root"
  >
    <CpPaper elevation={3}>
      <CpContainer component="main">
        <CpTypography component="h1" textAlign="start" fontWeight={600} mx={3} pt={2} variant="h5" pb={0}>
          Create Service Location
        </CpTypography>
        <CpDivider sx={{ my: 2 }} />
        <CpBox
          p={3}
          sx={{
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CpCreateServiceLocationTables />
        </CpBox>
        <CpSelectedServiceLocations />
      </CpContainer>
    </CpPaper>
  </CpContainer>
);

export default CpCreateServiceLocation;
