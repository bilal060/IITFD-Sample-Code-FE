import React from "react";
import tableRows from "./dtDummyJsonData";
import CpPageHeader from "../../../../components/pageHeader/CpPageHeader";
import table1Columns from "./dtTabelColumnsFields";
import { CpBox, CpCustomDataTable, CpPaper } from "../../../../shared/moduleImports/utModuleImports";

const CpSellerView = (): JSX.Element => (
  <CpPaper elevation={5}>
    <CpBox p={2} pb={5}>
      <CpPageHeader mainText="Search Sellers" secondText=" By Buyers" />
      <CpBox component="div" className="table-size">
        <CpCustomDataTable showSearchButtons rows={tableRows} columns={table1Columns} />
      </CpBox>
    </CpBox>
  </CpPaper>
);

export default CpSellerView;
