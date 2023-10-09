import React from "react";
import { CpRating } from "../../../../shared/moduleImports/utModuleImports";
import { TGridColDef, TGridRenderCellParams } from "../../../../shared/types/tpTypesImports";

const table1Columns: TGridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 180,
    headerClassName: "column-header-class",
  },
  {
    field: "ratings",
    headerName: "Ratings",
    width: 180,
    renderCell: (data: TGridRenderCellParams): JSX.Element => (<CpRating value={data.row.ratings} />),
    headerClassName: "column-header-class",
  },
  {
    field: "salesAmount",
    headerName: "Sales amount",
    width: 180,
    headerClassName: "column-header-class",
  },
  {
    field: "productName",
    headerName: "Product name",
    width: 180,
    headerClassName: "column-header-class",
  },
  {
    field: "incorporationDate",
    headerName: "Date of incorporation",
    width: 190,
    headerClassName: "column-header-class",
  },
  {
    field: "registrationDate",
    headerName: "Date of reg in test",
    width: 190,
    headerClassName: "column-header-class",
  },
];

export default table1Columns;
