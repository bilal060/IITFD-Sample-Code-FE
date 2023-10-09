import React from "react";
import {
  CpPaper,
  CpGrid,
  CpCustomDataTable,
  CpButton,
  CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import dtColumns from "./dtAdditionalAddress";
import { tpAdditionalAddresses } from "../../shared/types/pages/tpAdditionalAddresses";

const CpAdditionalAddresses = (): JSX.Element => {
  const rows: tpAdditionalAddresses[] = [
    {
      id: "1",
      addressName: "Lahore",
      country: "Pakistan",
      state: "Punjab",
      city: "Lahore",
      address1: "canal",
      address2: "shahdarah",
    } as tpAdditionalAddresses,
  ];

  return (
    <>
      <div className="cp-user-listing-page-root">
        <CpGrid>
          <CpGrid item className="grid-col-12">
            <CpPaper className="paper-card">
              <CpTypography
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bold", padding: "20px 0 5px 10px" }}
              >
                Additional Addresses
              </CpTypography>

              <div className="table-box">
                <CpCustomDataTable showSearchButtons={false} rows={rows} columns={dtColumns} />
              </div>

              <CpButton
                variant="contained"
                color="error"
                className="add-button"
                style={{ margin: "10px 0" }}
              >
                Create New Address
              </CpButton>
            </CpPaper>
          </CpGrid>
        </CpGrid>
      </div>
    </>
  );
};

export default CpAdditionalAddresses;
