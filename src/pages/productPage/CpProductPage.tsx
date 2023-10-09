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
  tpProduct,
  tpProductPageRender,
} from "../../shared/types/pages/tpProduct";
import {
  apGetListings,
  apGetCategoriesList,
  apDeleteProduct,
} from "../../shared/ajax/apProduct";
import "./stProductPage.scss";
import { tpCategory } from "../../shared/types/pages/tpCategory";
import CpAppbar from "../appbar/CpAppbar";
import CpProductModalPage, { CpActionButtons } from "./CpProductModalPage";

const toast = utAppToast();

const defaultColumns: TGridColDef[] = [
  { field: "pName", headerName: "Product Name", width: 150 },
  { field: "cName", headerName: "Category Name", width: 150 },
  { field: "pPrice", headerName: "Product Price", width: 150 },
];

const cpGetList = async (): Promise<tpProduct[]> => {
  const resp = await apGetListings();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpProduct[];
  }
  return resp.body.data as tpProduct[];
};
const cpGetCategoriesList = async (): Promise<tpCategory[]> => {
  const resp = await apGetCategoriesList();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpCategory[];
  }
  return resp.body.data as tpCategory[];
};

const cpDeleteRow = (rowsArr: tpProduct[], singleRow: tpProduct) => rowsArr.filter((item) => item.id !== singleRow.id);
const cpDeleteProduct = async (data: tpProduct, rows: tpProduct[], setRows: (row: tpProduct[]) => void) => {
  const resp = await apDeleteProduct(data);
  if (resp.status === 200) {
    setRows(cpDeleteRow(rows, data));
    toast.success(resp.body.message);
  } else {
    toast.error(resp.body.message);
  }
};
const cpUpdateState = (singleRow: tpProduct, rows: tpProduct[], setRows: (row: tpProduct[]) => void) => {
  const index = rows.findIndex((item) => item.id === singleRow.id);
  const allrows = [...rows];
  allrows[index] = singleRow;
  setRows(allrows);
};
const cpInsert = (singleRow: tpProduct, rows: tpProduct[], setRows: (row: tpProduct[]) => void) => {
  const insertedRow = singleRow;
  insertedRow.id = insertedRow.pUuid;
  const allrows = [...rows];
  allrows[allrows.length] = insertedRow;
  setRows(allrows);
};

const CpProductPageRender = ({
  open, setOpen, row, setRow, rows, setRows,
  categories, columns,
}: tpProductPageRender): JSX.Element => (
  <CpPaper className="paper-card">
    <CpTypography variant="h5" className="page-main-heading">
      Product Listings
      <CpButton
        variant="contained"
        color="primary"
        className="add-button"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
        New Product
      </CpButton>
    </CpTypography>
    <div className="table-box">
      <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
    </div>
    <CpProductModalPage
      open={open}
      row={row}
      onClose={() => setOpen(false)}
      setRow={setRow}
      cpUpdateState={cpUpdateState}
      cpInsert={cpInsert}
      rows={rows}
      setRows={setRows}
      categories={categories}
    />
  </CpPaper>
);

const CpProductPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<tpProduct>({} as tpProduct);
  const [rows, setRows] = useState<tpProduct[]>([]);
  const [categories, setCategories] = useState<tpCategory[]>([]);
  useEffect(() => {
    cpGetList().then((result) => {
      const arrResult = result;
      arrResult.forEach((item, index) => {
        const arrRow = item;
        arrRow.id = arrRow.pUuid;
        arrResult[index] = arrRow;
      });
      setRows(arrResult);
    });
    cpGetCategoriesList().then((result) => setCategories(result));
  }, []);
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 350,
    renderCell: (data: TGridRenderCellParams) => (
      <CpActionButtons
        cpDeleteProduct={(item: tpProduct) => cpDeleteProduct(item, rows, setRows)}
        cpOpenDetailModal={(rowData: tpProduct) => { setRow(rowData); setOpen(true); }}
        data={data}
      />
    ),
  };
  const columns = useMemo(() => [...defaultColumns, actionColumn], [actionColumn]);
  return (
    <div className="cp-user-listing-page-root">
      <CpAppbar headerName="Products" />
      <CpGrid>
        <CpGrid item className="grid-col-12">
          <CpProductPageRender
            open={open}
            setOpen={setOpen}
            row={row}
            setRow={setRow}
            rows={rows}
            setRows={setRows}
            columns={columns}
            categories={categories}
          />
        </CpGrid>
      </CpGrid>
    </div>
  );
};

export default CpProductPage;
