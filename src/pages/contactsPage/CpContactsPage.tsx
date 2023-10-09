import React from "react";
import {
  CpBox, CpButton, CpCustomDataTable, CpContainer, CpGrid,
} from "../../shared/moduleImports/utModuleImports";
import { dtContactColumns, dtContactRows } from "../../shared/constants/dtCompanyProfileTabs";
import "./stContactsPage.scss";

const CpContactsPage = (): JSX.Element => (
  <CpContainer className="cp-contacts-page-root">
    <CpBox>
      <CpGrid container spacing={1}>
        <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
          <CpCustomDataTable showSearchButtons={false} rows={dtContactRows} columns={dtContactColumns} />
        </CpGrid>
      </CpGrid>
      <CpButton
        variant="contained"
        className="create-button"
      >
        Create Contacts
      </CpButton>
      <br />
    </CpBox>
  </CpContainer>
);
export default CpContactsPage;
