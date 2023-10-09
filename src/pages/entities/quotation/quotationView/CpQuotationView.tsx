import React from "react";
import { table1Rows, table2Rows } from "./dtDummyJsonData";
import CpPageHeader from "../../../../components/pageHeader/CpPageHeader";
import { table1Columns, table2Columns } from "./dtTabelColumnsFields";
import {
  CpBox, CpCustomDataTable, CpPaper, CpTypography,
} from "../../../../shared/moduleImports/utModuleImports";

const CpQuotationView = (): JSX.Element => (
  <CpPaper elevation={5}>
    <CpBox p={3} pb={5}>
      <CpPageHeader mainText="View Quotation List" secondText="By Buyer" />
      <CpBox component="div" className="table-size">
        <CpCustomDataTable showSearchButtons rows={table1Rows} columns={table1Columns} />
      </CpBox>
      <br />
      <CpBox component="div" className="table-size">
        <CpTypography variant="h5">
          Compare list (another page)
        </CpTypography>
        <CpCustomDataTable showSearchButtons={false} rows={table2Rows} columns={table2Columns} />
      </CpBox>
    </CpBox>
  </CpPaper>
);

export default CpQuotationView;
