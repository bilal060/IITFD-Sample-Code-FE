import React, { useCallback, useMemo, useState } from "react";
import {
  CpBox, CpButton, CpDataGrid, CpGrid, CpTextField, CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import { TGridRowsProp, TGridColDef, TGridRowModel } from "../../../shared/types/tpTypesImports";
import "./stDataTableWithFiltering.scss";

type PropTypes = {
  rows: TGridRowsProp
  columns: TGridColDef[]
  showSearchButtons: boolean
}

const cpShowButtons = (setShowSearch: React.Dispatch<React.SetStateAction<boolean>>, showSearch: boolean,
  setSearchFields: React.Dispatch<React.SetStateAction<TGridRowModel>>): React.ReactNode => (
    <CpGrid item container spacing={2} xs={12}>
      <CpGrid container justifyContent="flex-end">
        <CpBox mr={1}>
          <CpButton
            size="small"
            onClick={() => setShowSearch(!showSearch)}
            variant="contained"
          >
            Toggle Search
          </CpButton>
        </CpBox>
        <CpBox mr={1}>
          <CpButton size="small" onClick={() => (setSearchFields({}))} variant="contained">
            Clear Search Fields
          </CpButton>
        </CpBox>
      </CpGrid>
    </CpGrid>
);

const CpDataTableWithFiltering = (props: PropTypes): JSX.Element => {
  const { columns } = props;
  const { rows, showSearchButtons } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [searchFields, setSearchFields] = useState<TGridRowModel>({});

  const showSearchInputs = useCallback((column: TGridColDef): JSX.Element => (
    <CpBox mt={5} mb={5}>
      <CpTypography>{column.headerName}</CpTypography>
      {showSearch && (
      <CpTextField
        size="small"
        value={searchFields[column.field] ?? ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchFields({
            ...searchFields,
            [column.field]: event.target.value,
          });
        }}
      />
      )}
    </CpBox>
  ), [searchFields, showSearch]);

  const columnsMemo = useMemo(() => columns.map((column) => ({
    ...column,
    sortable: false,
    renderHeader: (): JSX.Element => showSearchInputs(column),
  })), [columns, showSearchInputs]);

  return (
    <CpBox className="cp-data-table-with-filtering-root">
      <CpBox mb={1}>
        {showSearchButtons
          && (
            cpShowButtons(setShowSearch, showSearch, setSearchFields)
          )}
      </CpBox>
      <CpDataGrid
        headerHeight={80}
        disableColumnFilter
        disableColumnMenu
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        rows={rows}
        columns={columnsMemo}
      />
    </CpBox>
  );
};
export default CpDataTableWithFiltering;
