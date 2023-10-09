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
  tpCatalog,
  tpCatalogPageRender,
} from "../../shared/types/pages/tpCatalog";
import {
  apGetListings,
  apDeleteCatalog,
} from "../../shared/ajax/apCatalog";
import CpCatalogModalPage, { CpActionButtons } from "./CpCatalogModalPage";
import "./stCatalogPage.scss";
import CpAppbar from "../appbar/CpAppbar";

const toast = utAppToast();

const defaultColumns: TGridColDef[] = [
  { field: "cName", headerName: "Catalog Name", width: 150 },
];

const cpGetList = async (): Promise<tpCatalog[]> => {
  const resp = await apGetListings();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpCatalog[];
  }
  return resp.body.data as tpCatalog[];
};
const cpDeleteRow = (rowsArr: tpCatalog[], singleRow: tpCatalog) => rowsArr.filter((item) => item.id !== singleRow.id);
const cpDeleteCatalog = async (data: tpCatalog, rows: tpCatalog[], setRows: (row: tpCatalog[]) => void) => {
  const resp = await apDeleteCatalog(data);
  if (resp.status === 200) {
    setRows(cpDeleteRow(rows, data));
    toast.success(resp.body.message);
  } else {
    toast.error(resp.body.message);
  }
};
const cpUpdateState = (singleRow: tpCatalog, rows: tpCatalog[], setRows: (row: tpCatalog[]) => void) => {
  const index = rows.findIndex((item) => item.id === singleRow.id);
  const allrows = [...rows];
  allrows[index] = singleRow;
  setRows(allrows);
};
const cpInsert = (singleRow: tpCatalog, rows: tpCatalog[], setRows: (row: tpCatalog[]) => void) => {
  const insertedRow = singleRow;
  insertedRow.id = insertedRow.ctUuid;
  const allrows = [...rows];
  allrows[allrows.length] = insertedRow;
  setRows(allrows);
};

const CpCatalogPageRender = ({
  open,
  setOpen,
  row,
  setRow,
  rows,
  setRows,
}: tpCatalogPageRender): JSX.Element => (
  <>
    <CpTypography variant="h5" className="page-main-heading">
      Catalog Listings
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
    <CpCatalogModalPage
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

const CpCatalogPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<tpCatalog>({} as tpCatalog);
  const [rows, setRows] = useState<tpCatalog[]>([]);
  useEffect(() => {
    cpGetList().then((result) => {
      const arrResult = result;
      arrResult.forEach((item, index) => {
        const arrRow = item;
        arrRow.id = arrRow.ctUuid;
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
        cpDeleteCatalog={(item: tpCatalog) => cpDeleteCatalog(item, rows, setRows)}
        cpOpenDetailModal={(rowData: tpCatalog) => {
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
      <CpAppbar headerName="Catalogues" />
      <CpGrid>
        <CpGrid item className="grid-col-12">
          <CpPaper className="paper-card">
            <CpCatalogPageRender open={open} setOpen={setOpen} row={row} setRow={setRow} rows={rows} setRows={setRows} />
            <div className="table-box">
              <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
            </div>
          </CpPaper>
        </CpGrid>
      </CpGrid>
    </div>
  );
};

export default CpCatalogPage;
