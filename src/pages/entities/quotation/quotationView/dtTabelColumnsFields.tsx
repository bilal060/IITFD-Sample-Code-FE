import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { CpButton } from "../../../../shared/moduleImports/utModuleImports";
import { TGridColDef } from "../../../../shared/types/tpTypesImports";

const table1Columns: TGridColDef[] = [
  {
    field: "quoteId", type: "string", headerName: "QId", width: 75, headerClassName: "column-header-class",
  },
  {
    field: "name", type: "string", headerName: "Name", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "rfqDetails",
    headerName: "RFQ  details",
    width: 150,
    renderCell: (): JSX.Element => <CpButton>View</CpButton>,
    headerClassName: "column-header-class",
  },
  {
    field: "sellerName", type: "string", headerName: "Seller Name", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "bidAmount", type: "string", headerName: "Bid Amount", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "deliveryTime", type: "string", headerName: "Delivery time", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "message", type: "string", headerName: "Message", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "approveReject",
    headerName: "Approve/Reject",
    width: 190,
    renderCell: (): JSX.Element => <DoneIcon />,
    headerClassName: "column-header-class",
  },
  {
    field: "addToCompare",
    headerName: " Add To Compare",
    width: 190,
    renderCell: (): JSX.Element => <AddIcon />,
    headerClassName: "column-header-class",
  },
];

const table2Columns: TGridColDef[] = [
  {
    field: "quoteId", headerName: "QId", width: 75, headerClassName: "column-header-class",
  },
  {
    field: "name", headerName: "Name", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "rfqDetails",
    headerName: "RFQ  details",
    width: 150,
    renderCell: (): JSX.Element => <CpButton>View</CpButton>,
    headerClassName: "column-header-class",
  },
  {
    field: "sellerName", headerName: "Seller Name", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "bidAmount", headerName: "Bid Amount", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "deliveryTime", headerName: "Delivery time", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "message", headerName: "Message", width: 190, headerClassName: "column-header-class",
  },
  {
    field: "approveReject",
    headerName: "Approve/Reject",
    width: 190,
    renderCell: (): JSX.Element => <CloseIcon />,
    headerClassName: "column-header-class",
  },
  {
    field: "removeFromCompare",
    headerName: " Remove from compare list",
    width: 190,
    renderCell: (): JSX.Element => (<CloseIcon />),
    headerClassName: "column-header-class",
  },
];

export { table1Columns, table2Columns };
