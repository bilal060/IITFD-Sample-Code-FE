import React from "react";
import { FormControlLabel } from "@material-ui/core";
import {
  CpGrid,
  CpButton,
  CpCustomDataTable,
  CpTypography,
  CpCheckbox,
  CpStack,
  CpAutocompleteField,
  CpContainer,
  CpBox,
  CpPaper,
  CpDivider,
} from "../../shared/moduleImports/utModuleImports";
import {
  dtSegmentColumns,
  dtFamilyColumns,
  dtSelectedSectorsColumns,
  dtSelectedSectorsRows,
  dtSectorRows,
  dtSubSectorRows,
} from "./dtSectorPage";
import {
  tpSectorTableWithFilters,
} from "../../shared/types/pages/tpSector";

import "./stSectorPage.scss";
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

const CpTableWithFilters = (props: tpSectorTableWithFilters): JSX.Element => {
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

const CpSelectedSectors = (): JSX.Element => (
  <>
    <CpTypography component="h1" textAlign="start" fontWeight={600} mx={3} variant="h5" pb={0}>
      Selected Sector - Sub Sector
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
        <CpTableWithFilters
          rows={dtSelectedSectorsRows}
          columns={dtSelectedSectorsColumns}
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
            className="buttons action-button"
          >
            Save
          </CpButton>
        </CpBox>
        <CpBox mr={5}>
          <CpButton size="small" variant="contained" className="buttons action-button-cancel">
            Cancel
          </CpButton>
        </CpBox>
      </CpGrid>
    </CpGrid>
  </>
);

const CpSectorPage = (): JSX.Element => (
  <CpContainer
    component="main"
    maxWidth="lg"
    className="cp-sector-root"
  >
    <CpPaper elevation={3}>
      <CpContainer component="main">
        <CpTypography component="h1" textAlign="start" fontWeight={600} mx={3} pt={2} variant="h5" pb={0}>
          Add Sector - Sub Sector
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
            spacing={{ lg: 2, sm: 10, xs: 5 }}
            py={5}
            justifyContent="space-around"
          >
            <CpTableWithFilters
              title="Select Sector"
              rows={dtSectorRows}
              columns={dtSegmentColumns}
              options={dtSectorRows.map((row) => ({ label: row.sector, value: row.sector }))}
              size={6}
            />
            <CpTableWithFilters
              title="Select Sub Sector"
              rows={dtSubSectorRows}
              columns={dtFamilyColumns}
              options={dtSubSectorRows.map((row) => ({ label: row.subSector, value: row.subSector }))}
              size={6}
              addButton
            />
          </CpGrid>
        </CpBox>

        <CpSelectedSectors />
      </CpContainer>
    </CpPaper>
  </CpContainer>
);

export default CpSectorPage;
