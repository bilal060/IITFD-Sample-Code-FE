import React, { useState, useMemo, useEffect } from "react";
import {
  CpPaper,
  CpGrid,
  CpTypography,
  CpCustomDataTable,
  CpBox,
  CpButton,
  CpDialog3,
} from "../../shared/moduleImports/utModuleImports";
import {
  TGridColDef,
  TGridRenderCellParams,
} from "../../shared/types/tpTypesImports";
import utAppToast from "../../shared/utils/utToast";
import {
  tpUserListings,
} from "../../shared/types/pages/tpUserListing";
import {
  apGetListings,
  apUpdateUserStatus,
} from "../../shared/ajax/apUserListing";
import "./stUserListingPage.scss";

export type tpIndex = { [key: string]: string };

export type tpActionButtons = {
  cpUpdateUserStatus: (row:tpUserListings, status: string) => void;
  cpOpenDetailModal: (e: tpUserListings) => void;
  data: TGridRenderCellParams;
};

export type tpModalProps = {
  open: boolean;
  onClose: () => void;
  row: tpUserListings;
};

const toast = utAppToast();

const labels:tpIndex = {
  cdName: "Company Name",
  ePriType: "Primary Type",
  eStatus: "Status",
  eEmail: "Email",
  pPhone: "Phone",
  cName: "City",
  aZip: "Postal Code",
  countryName: "Country Name",
  aAddressLine1: "AddressLine1",
  aAddressLine2: "AddressLine2",
};

const CpModalComponent = ({
  open,
  onClose,
  row,
}: tpModalProps): JSX.Element => {
  const arr = ["id", "cdId", "aCityId", "aCountryId"];
  return (
    <CpDialog3 open={open} onClose={() => onClose()} title="User Detail">
      <>
        <CpGrid container spacing={2} mt={1}>
          {Object.keys(row).length > 0
            && Object.entries(row).map(
              ([key, value]) => arr.includes(key) === false && (
              <CpGrid item xs={6}>
                <CpTypography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  mr={1}
                >
                  {labels[key]}
                </CpTypography>
                <CpTypography sx={{ display: "inline" }}>
                  {value}
                </CpTypography>
              </CpGrid>
              ),
            )}
        </CpGrid>
      </>
    </CpDialog3>
  );
};

const CpActionButtons = ({
  cpUpdateUserStatus,
  cpOpenDetailModal,
  data,
}: tpActionButtons): JSX.Element => (
  <CpGrid item container spacing={2} xs={12} m={1}>
    <CpGrid container>
      <CpBox mr={1}>
        <CpButton
          size="small"
          onClick={() => cpUpdateUserStatus(data.row, "Approve")}
          variant="contained"
          color="success"
        >
          Approve
        </CpButton>
      </CpBox>
      <CpBox mr={1}>
        <CpButton
          size="small"
          onClick={() => cpOpenDetailModal(data.row)}
          variant="contained"
        >
          Detail
        </CpButton>
      </CpBox>
      <CpBox mr={1}>
        <CpButton
          size="small"
          onClick={() => cpUpdateUserStatus(data.row, "Reject")}
          variant="contained"
          color="error"
        >
          Reject
        </CpButton>
      </CpBox>
    </CpGrid>
  </CpGrid>
);

const defaultColumns: TGridColDef[] = [
  { field: "cdName", headerName: "Company name", width: 150 },
  { field: "ePriType", headerName: "primarily Type", width: 150 },
  { field: "countryName", headerName: "Country", width: 150 },
  { field: "cName", headerName: "City", width: 150 },
  { field: "eEmail", headerName: "Email", width: 150 },
  { field: "pPhone", headerName: "Phone", width: 150 },
  { field: "aZip", headerName: "Post code", width: 150 },
  { field: "eStatus", headerName: "Status", width: 150 },
];

const CpGetList = async (): Promise<tpUserListings[]> => {
  const resp = await apGetListings();
  if (resp.status !== 200) {
    toast.showByStatusCode(resp.body.message, resp.status);
    return [] as tpUserListings[];
  }
  return resp.body.data as tpUserListings[];
};

const cpUpdateState = (rowsArr:tpUserListings[], singleRow:tpUserListings, status:string) => {
  const index = rowsArr.findIndex((item) => item.id === singleRow.id);
  const newrow = {
    ...singleRow,
    eStatus: status,
  };
  const allrows = [...rowsArr];
  allrows[index] = newrow;
  return allrows;
};
const CpUserListingPage = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [row, setRow] = useState<tpUserListings>({} as tpUserListings);
  const [rows, setRows] = useState<tpUserListings[]>([]);
  useEffect(() => {
    CpGetList().then((result) => setRows(result));
  }, []);

  const cpUpdateUserStatus = async (data: tpUserListings, status: string) => {
    const resp = await apUpdateUserStatus({ id: data.id, status });
    if (resp.status === 200) {
      setRows(cpUpdateState(rows, data, status));
      toast.success(resp.body.message);
    } else {
      toast.error(resp.body.message);
    }
  };
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 350,
    renderCell: (data: TGridRenderCellParams) => (
      <CpActionButtons
        cpUpdateUserStatus={(item: tpUserListings, status: string) => cpUpdateUserStatus(item, status)}
        cpOpenDetailModal={(rowData: tpUserListings) => {
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
      <CpGrid>
        <CpGrid item xs={12}>
          <CpPaper className="paper-card">
            <CpTypography variant="h5" p={2}>User Listings</CpTypography>
            <div style={{ height: 400, width: "100%" }}>
              <CpCustomDataTable showSearchButtons={false} rows={rows} columns={columns} />
            </div>
          </CpPaper>
        </CpGrid>
      </CpGrid>
      <CpModalComponent open={open} row={row} onClose={() => setOpen(false)} />
    </div>
  );
};

export default CpUserListingPage;
