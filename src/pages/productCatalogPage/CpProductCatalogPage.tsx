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
  tpProductCatalog,
  tpProductCatalogPageRender,
} from "../../shared/types/pages/tpProductCatalog";
import {
  apGetListings,
  apDeleteProductCatalog,
  apGetProductsList,
  apGetCataloguesList,
} from "../../shared/ajax/apProductCatalog";
import "./stProductCatalogPage.scss";
import CpAppbar from "../appbar/CpAppbar";
import CpProductCatalogModalPage, { CpActionButtons } from "./CpProductCatalogModalPage";
import { tpProduct } from "../../shared/types/pages/tpProduct";
import { tpCatalog } from "../../shared/types/pages/tpCatalog";

const toast = utAppToast();

const defaultColumns: TGridColDef[] = [
  { field: "pName", headerName: "Product Name", width: 150 },
  { field: "cName", headerName: "Catalog Name", width: 150 },
  { field: "pPrice", headerName: "Product Price", width: 150 },
];

const cpGetList = async (): Promise<tpProductCatalog[]> => {
  const resp = await apGetListings();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpProductCatalog[];
  }
  return resp.body.data as tpProductCatalog[];
};

const cpGetProductsList = async (): Promise<tpProduct[]> => {
  const resp = await apGetProductsList();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpProduct[];
  }
  return resp.body.data as tpProduct[];
};
const cpGetCataloguesList = async (): Promise<tpCatalog[]> => {
  const resp = await apGetCataloguesList();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpCatalog[];
  }
  return resp.body.data as tpCatalog[];
};
const cpDeleteRow = (rowsArr: tpProductCatalog[], singleRow: tpProductCatalog) => rowsArr
  .filter((item) => item.id !== singleRow.id);
const cpDeleteProductCatalog = async (data: tpProductCatalog, rows: tpProductCatalog[],
  setRows: (row: tpProductCatalog[]) => void) => {
  const resp = await apDeleteProductCatalog(data);
  if (resp.status === 200) {
    setRows(cpDeleteRow(rows, data));
    toast.success(resp.body.message);
  } else {
    toast.error(resp.body.message);
  }
};
const cpUpdateState = (singleRow: tpProductCatalog, rows: tpProductCatalog[],
  setRows: (row: tpProductCatalog[]) => void) => {
  const index = rows.findIndex((item) => item.id === singleRow.id);
  const allrows = [...rows];
  allrows[index] = singleRow;
  setRows(allrows);
};
const cpInsert = (singleRow: tpProductCatalog, rows: tpProductCatalog[],
  setRows: (row: tpProductCatalog[]) => void) => {
  const insertedRow = singleRow;
  insertedRow.id = insertedRow.pcUuid;
  const allrows = [...rows];
  allrows[allrows.length] = insertedRow;
  setRows(allrows);
};

const CpProductCatalogPageRender = ({
  open, setOpen, row, setRow, rows, setRows, columns,
  products, catalogues,
}: tpProductCatalogPageRender): JSX.Element => (
  <CpGrid>
    <CpGrid item className="grid-col-12">
      <CpPaper className="paper-card">
        <CpTypography variant="h5" className="page-main-heading">
          Product Catalog Listings
          <CpButton
            variant="contained"
            color="primary"
            className="add-button"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
            Add New
          </CpButton>
        </CpTypography>
        <div className="table-box">
          <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
        </div>
        <CpProductCatalogModalPage
          open={open}
          row={row}
          onClose={() => setOpen(false)}
          setRow={setRow}
          cpUpdateState={cpUpdateState}
          cpInsert={cpInsert}
          rows={rows}
          setRows={setRows}
          products={products}
          catalogues={catalogues}
        />
      </CpPaper>
    </CpGrid>
  </CpGrid>
);

const CpProductCatalogPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<tpProductCatalog>({} as tpProductCatalog);
  const [rows, setRows] = useState<tpProductCatalog[]>([]);
  const [products, setProducts] = useState<tpProduct[]>([]);
  const [catalogues, setCatalogues] = useState<tpCatalog[]>([]);
  useEffect(() => {
    cpGetList().then((result) => {
      const arrResult = result;
      arrResult.forEach((item, index) => {
        const arrRow = item;
        arrRow.id = arrRow.pcUuid;
        arrResult[index] = arrRow;
      });
      setRows(arrResult);
    });
    cpGetProductsList().then((result) => setProducts(result));
    cpGetCataloguesList().then((result) => setCatalogues(result));
  }, []);
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 350,
    renderCell: (data: TGridRenderCellParams) => (
      <CpActionButtons
        cpDeleteProductCatalog={(item: tpProductCatalog) => cpDeleteProductCatalog(item, rows, setRows)}
        cpOpenDetailModal={(rowData: tpProductCatalog) => { setRow(rowData); setOpen(true); }}
        data={data}
      />
    ),
  };
  const columns = useMemo(() => [...defaultColumns, actionColumn], [actionColumn]);
  return (
    <div className="cp-user-listing-page-root">
      <CpAppbar headerName="Product Catalog" />
      <CpProductCatalogPageRender
        open={open}
        setOpen={setOpen}
        row={row}
        setRow={setRow}
        rows={rows}
        setRows={setRows}
        columns={columns}
        products={products}
        catalogues={catalogues}
      />
    </div>
  );
};

export default CpProductCatalogPage;
