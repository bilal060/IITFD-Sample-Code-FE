import React from "react";
import CpTitleBar from "../../components/titleBar/cpTitleBar";
import { CpButton, CpDataGrid, CpPaper } from "../../shared/moduleImports/utModuleImports";
import "./stSellerRfqListPage.scss";
import { CpGridColDef, CpGridRowsProp } from "../../shared/types/tpTypesImports";

const rows: CpGridRowsProp = [
  {
    id: 1,
    quoteId: "abc",
    status: "pending for us to reply",
    rfqId: "some id",
    communication: "Awaiting message reply",
    col1: "",
    col2: "",
    respond: "",
    detail: "",
  },
  {
    id: 2,
    quoteId: "xyz",
    status: "RFQ sent",
    rfqId: "",
    communication: "another id",
    col1: "",
    col2: "",
    respond: "",
    detail: "",
  },
  {
    id: 3,
    quoteId: "",
    status: "RFQ rejected",
    rfqId: "",
    communication: "",
    col1: "",
    col2: "",
    respond: "",
    detail: "",
  },
  {
    id: 4,
    quoteId: "",
    status: "RFQ in negociation",
    rfqId: "",
    communication: "",
    col1: "",
    col2: "",
    respond: "",
    detail: "",
  },
];

const columns: CpGridColDef[] = [
  { field: "quoteId", headerName: "Quote Id", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "rfqId", headerName: "RFQ Id", width: 150 },
  { field: "communication", headerName: "Communication", width: 150 },
  { field: "col1", headerName: "?", width: 150 },
  { field: "col2", headerName: "?", width: 150 },
  {
    field: "respond", headerName: "Respond", width: 150, renderCell: () => (<CpButton>BTN</CpButton>),
  },
  {
    field: "detail", headerName: "Detail", width: 150, renderCell: () => (<CpButton>BTN</CpButton>),
  },
];
const CpSellerRfqListPage = (): JSX.Element => (
  <>
    <CpTitleBar leftValue="View RFQ list" rightValue="By Seller" />
    <CpPaper className="seller-rfq-list-page-root">
      <CpDataGrid rows={rows} columns={columns} className="data-grid-wrapper" checkboxSelection autoHeight />
    </CpPaper>
  </>
);
export default CpSellerRfqListPage;
