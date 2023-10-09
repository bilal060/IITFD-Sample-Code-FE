import React, { useState } from "react";
import CpAdditionalAddressPage from "../../additionalAddressPage/CpAdditionalAddressPage";
import CpAdditionalDocumentsPage from "../../additionalDocumentsPage/CpAdditionalDocumentsPage";
import {
  tpTabProps, tpTabPanelProps,
} from "../../../shared/types/pages/tpCompanyProfile";

import {
  CpBox, CpTypography,
} from "../../../shared/moduleImports/utModuleImports";
import CpCompanyProfilePage from "../../companyProfile/CpCompanyProfilePage";
import CpBusinessDetailsPage from "../../businessDetails/CpBusinessDetailsPage";
import CpOperationDetailsPage from "../../operationDetailsPage/CpOperationDetailsPage";
import "./stCompanyProfileTabs.scss";
import CpContactsPage from "../../contactsPage/CpContactsPage";

const srHandleAccordianExpand = (
  panel: string,
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
) => (
  _event: React.SyntheticEvent, isExpanded: boolean,
) => {
  setExpanded(isExpanded ? panel : false);
};

export const CpTabPanel = (props: tpTabPanelProps):JSX.Element => {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <CpBox sx={{ p: 3 }}>
          <CpTypography>{children}</CpTypography>
        </CpBox>
      )}
    </div>
  );
};

const CpOperationsTabPanel = (
  tabValue: number,
  expanded: string | false,
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
) => (
  <CpOperationDetailsPage
    tabValue={tabValue}
    expanded={expanded}
    setExpanded={setExpanded}
    srHandleAccordianExpandChange={srHandleAccordianExpand}
  />
);

const CpTabPanelAdditionalDocuments = (tabValue: number) => (
  <CpTabPanel value={tabValue} index={5}>
    <CpAdditionalDocumentsPage />
  </CpTabPanel>
);

const CpCompanyProfileTabs = ({ tabValue }: tpTabProps): JSX.Element => {
  const [expanded, setExpanded] = useState<string | false>("panelAdditionalAddress");

  return (
    <div className="cp-company-profile-tabs-root">
      <CpTabPanel value={tabValue} index={1}>
        <CpAdditionalAddressPage />
      </CpTabPanel>
      {CpTabPanelAdditionalDocuments(tabValue)}
      <CpTabPanel value={tabValue} index={0}>
        <CpCompanyProfilePage />
      </CpTabPanel>
      <CpTabPanel value={tabValue} index={2}>
        <CpBusinessDetailsPage />
      </CpTabPanel>
      <CpTabPanel value={tabValue} index={3}>
        <CpContactsPage />
      </CpTabPanel>
      {CpOperationsTabPanel(tabValue, expanded, setExpanded)}
    </div>
  );
};
export default CpCompanyProfileTabs;
