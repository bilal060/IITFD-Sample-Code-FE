import React, { useState } from "react";
import {
  Tab, Tabs,
} from "@mui/material";
import CpCompanyProfileTabs from "./companyProfileTabs/CpCompanyProfileTabs";
import CpCompanyProfileHeading from "./companyProfileHeading/CpCompanyProfileHeading";
import {
  CpBox, CpContainer, CpPaper,
} from "../../shared/moduleImports/utModuleImports";

const CpCompanyProfilePanel = (): JSX.Element => {
  const [tabValue, setTabValue] = useState(0);

  const srHandleTabsChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <CpContainer>
      <CpPaper elevation={3}>
        <CpBox p={1} sx={{ marginTop: 3 }}>
          <CpCompanyProfileHeading />
          <Tabs value={tabValue} onChange={srHandleTabsChange} variant="fullWidth">
            <Tab label="#7 Basic Details" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
            <Tab label="#8 Additional Adresses" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
            <Tab label="#10 Business Details" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
            <Tab label="#13 Contacts" id="simple-tab-3" aria-controls="simple-tabpanel-3" />
            <Tab label="#15 Operation Details" id="simple-tab-4" aria-controls="simple-tabpanel-4" />
            <Tab label="#28 Additional Documents" id="simple-tab-5" aria-controls="simple-tabpanel-5" />
          </Tabs>
        </CpBox>
        <CpCompanyProfileTabs tabValue={tabValue} />
      </CpPaper>
    </CpContainer>
  );
};
export default CpCompanyProfilePanel;
