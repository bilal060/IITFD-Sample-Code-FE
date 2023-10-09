import React, { useState, useMemo, useEffect } from "react";
import {
  CpPaper,
  CpGrid,
  CpTypography,
  CpCustomDataTable,
  CpButton,
} from "../../shared/moduleImports/utModuleImports";
import { AddIcon } from "../../shared/moduleImports/utIconsImports";
import {
  TGridColDef,
  TGridRenderCellParams,
} from "../../shared/types/tpTypesImports";
import utAppToast from "../../shared/utils/utToast";
import {
  tpCategory,
  tpCategoryPageRender,
} from "../../shared/types/pages/tpCategory";
import {
  apGetListings,
  apDeleteCategory,
} from "../../shared/ajax/apCategory";
import "./stCategoryPage.scss";
import CpCategoryModalPage, { CpActionButtons } from "./CpCategoryModalPage";
import CpAppbar from "../appbar/CpAppbar";

const toast = utAppToast();

const defaultColumns: TGridColDef[] = [
  { field: "cName", headerName: "Category Name", width: 150 },
];

const cpGetList = async (): Promise<tpCategory[]> => {
  const resp = await apGetListings();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpCategory[];
  }
  return resp.body.data as tpCategory[];
};
const cpDeleteRow = (rowsArr: tpCategory[], singleRow: tpCategory) => rowsArr.filter((item) => item.id !== singleRow.id);
const cpDeleteCategory = async (data: tpCategory, rows: tpCategory[], setRows: (row: tpCategory[]) => void) => {
  const resp = await apDeleteCategory(data);
  if (resp.status === 200) {
    setRows(cpDeleteRow(rows, data));
    toast.success(resp.body.message);
  } else {
    toast.error(resp.body.message);
  }
};
const cpUpdateState = (singleRow: tpCategory, rows: tpCategory[], setRows: (row: tpCategory[]) => void) => {
  const index = rows.findIndex((item) => item.id === singleRow.id);
  const allrows = [...rows];
  allrows[index] = singleRow;
  setRows(allrows);
};
const cpInsert = (singleRow: tpCategory, rows: tpCategory[], setRows: (row: tpCategory[]) => void) => {
  const insertedRow = singleRow;
  insertedRow.id = insertedRow.cUuid;
  const allrows = [...rows];
  allrows[allrows.length] = insertedRow;
  setRows(allrows);
};

const CpCategoryPageRender = ({
  open,
  setOpen,
  row,
  setRow,
  rows,
  setRows,
}: tpCategoryPageRender): JSX.Element => (
  <>
    <CpTypography variant="h5" className="page-main-heading">
      Category Listings
      <CpButton
        variant="contained"
        color="primary"
        className="add-button"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
        New Category
      </CpButton>
    </CpTypography>
    <CpCategoryModalPage
      open={open}
      row={row}
      onClose={() => setOpen(false)}
      setRow={setRow}
      cpUpdateState={cpUpdateState}
      cpInsert={cpInsert}
      rows={rows}
      setRows={setRows}
    />
  </>
);

const CpCategoryPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<tpCategory>({} as tpCategory);
  const [rows, setRows] = useState<tpCategory[]>([]);
  useEffect(() => {
    cpGetList().then((result) => {
      const arrResult = result;
      arrResult.forEach((item, index) => {
        const arrRow = item;
        arrRow.id = arrRow.cUuid;
        arrResult[index] = arrRow;
      });
      setRows(arrResult);
    });
  }, []);
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 350,
    renderCell: (data: TGridRenderCellParams) => (
      <CpActionButtons
        cpDeleteCategory={(item: tpCategory) => cpDeleteCategory(item, rows, setRows)}
        cpOpenDetailModal={(rowData: tpCategory) => {
          setRow(rowData);
          setOpen(true);
        }}
        data={data}
      />
    ),
  };
  const columns = useMemo(() => [...defaultColumns, actionColumn], [actionColumn]);
  return (
    <div className="cp-user-listing-page-root">
      <CpAppbar headerName="Categories" />
      <CpGrid>
        <CpGrid item className="grid-col-12">
          <CpPaper className="paper-card">
            <CpCategoryPageRender open={open} setOpen={setOpen} row={row} setRow={setRow} rows={rows} setRows={setRows} />
            <div className="table-box">
              <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
            </div>
          </CpPaper>
        </CpGrid>
      </CpGrid>
    </div>
  );
};

export default CpCategoryPage;
