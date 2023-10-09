import "./stTransactionHistoryPage.scss";
import React, { } from "react";
import CpTitleBar from "../../components/titleBar/cpTitleBar";
import {
  CpPaper, CpDataGrid, CpCheckbox, CpTypography, CpGrid,
} from "../../shared/moduleImports/utModuleImports";
import { CpGridColDef, CpGridRowsProp } from "../../shared/types/tpTypesImports";

const columns: CpGridColDef[] = [
  {
    field: "date",
    width: 150,
    type: "date",
    sortable: false,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Date</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "item",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Item</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "entity",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Entity</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "transaction",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Transaction</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "qty",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>QTY</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "unitPrice",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Unit Price</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },
  {
    field: "totalAmount",
    width: 150,
    renderHeader: () => (
      <CpGrid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CpGrid item>
          <strong>Total Amount</strong>
        </CpGrid>
      </CpGrid>
    ),
    headerClassName: "header-cell",
  },

];

const rows: CpGridRowsProp = [
  {
    id: 1,
    date: "19th Feb 22",
    item: "Product 1",
    entity: "abc co ltd",
    transaction: "Sales",
    qty: 33,
    unitPrice: 566,
    totalAmount: "xx-xx",
  },
  {
    id: 2,
    date: "",
    item: "Product 2",
    entity: "xyz llc",
    transaction: "Purchase",
    qty: 44,
    unitPrice: 66,
    totalAmount: "xxx",
  },

];
const CpTransactionHistoryPage = (): JSX.Element => (
  <>
    <CpTitleBar leftValue="Transaction history" rightValue="For buyers/sellers" />
    <CpPaper className="transaction-history-page-root">

      <CpGrid container spacing={4} className="checkbox-wrapper">
        <CpGrid item xs={3}>
          <CpTypography className="check-box-label">Select only for buyer</CpTypography>
        </CpGrid>
        <CpGrid item xs={1}>
          <CpCheckbox className="check-box" size="small" />
        </CpGrid>
        <CpGrid item xs={1}>
          <CpTypography className="check-box-label">Seller</CpTypography>
        </CpGrid>
        <CpGrid item xs={1}>
          <CpCheckbox className="check-box" size="small" />
        </CpGrid>
      </CpGrid>

      <CpDataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
    </CpPaper>
  </>
);

export default CpTransactionHistoryPage;
