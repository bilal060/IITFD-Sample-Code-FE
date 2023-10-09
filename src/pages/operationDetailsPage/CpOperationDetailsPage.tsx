import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import {
  dtEmailDomainContent, dtEmailDomainInfo,
} from "../auth/terms/termsOfEmailDomain/dtTermsOfEmailDomain";
import {
  CpBox, CpButton, CpCustomDataTable, CpAutocompleteField,
  CpContainer, CpGrid, CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import { CpTabPanel } from "../comapnyProfilePanel/companyProfileTabs/CpCompanyProfileTabs";
import {
  tpOperationDetailsPageProps, tpOperationDetailsProps,
} from "../../shared/types/pages/tpCompanyProfile";
import {
  dtProductServiceColumns, dtServingLocationsColumns, dtServedSectorsColumns,
} from "../../shared/constants/dtCompanyProfileTabs";
import "./stOperationDetailsPage.scss";

const CpActionButtons = (): JSX.Element => (
  <CpGrid container xs={12} spacing={2} className="tab-4-action-buttons">
    <CpGrid item xs={2}>
      <CpButton fullWidth variant="contained" type="submit" className="action-button">Save</CpButton>
    </CpGrid>
    <CpGrid item xs={2}>
      <CpButton fullWidth variant="contained" type="submit" className="action-button-cancel">Cancel</CpButton>
    </CpGrid>
  </CpGrid>
);

const CpSectors = ({ param }: tpOperationDetailsProps) => (
  <Accordion
    className="company-profile-tab"
    expanded={param.expanded === "panelAdditionalAddress"}
    onChange={param.srHandleAccordianExpandChange("panelAdditionalAddress", param.setExpanded)}
  >
    <AccordionSummary
      className="company-profile-tab-summary company-profile-tab-summary-first"
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panelAdditionalAddressbh-content"
      id="panelAdditionalAddressbh-header"
    >
      <CpTypography component="h6">Served Sectors and Sub Sectors</CpTypography>
    </AccordionSummary>
    <AccordionDetails>
      <CpContainer>
        <CpBox>
          <CpGrid container spacing={1}>
            <CpGrid item xs={4}>
              <CpAutocompleteField
                className="company-profile-details-field"
                placeholder="Search Sectors"
                size="small"
                name="sectors"
                label="Sectors"
                options={[]}
              />
            </CpGrid>
          </CpGrid>
          <CpGrid container spacing={1}>
            <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
              <CpCustomDataTable
                showSearchButtons={false}
                rows={[]}
                columns={dtServedSectorsColumns}
              />
            </CpGrid>
          </CpGrid>
        </CpBox>
      </CpContainer>
    </AccordionDetails>
  </Accordion>
);

const CpProductsAndServices = ({ param }: tpOperationDetailsProps) => (
  <Accordion
    className="company-profile-tab"
    expanded={param.expanded === "panelProductAndServices"}
    onChange={param.srHandleAccordianExpandChange("panelProductAndServices", param.setExpanded)}
  >
    <AccordionSummary
      className="company-profile-tab-summary"
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panelProductAndServicesbh-content"
      id="panelProductAndServicesbh-header"
    >
      <CpTypography component="h6">Product and Service Categories</CpTypography>
    </AccordionSummary>
    <AccordionDetails>
      <CpContainer>
        <CpBox>
          <CpGrid container spacing={1}>
            <CpGrid item xs={4}>
              <CpAutocompleteField
                className="company-profile-details-field"
                placeholder="Search Categories"
                size="small"
                name="categories"
                label="Categories"
                options={[]}
              />
            </CpGrid>
          </CpGrid>
          <CpGrid container spacing={1}>
            <CpGrid item sx={{ height: 300, width: "100%" }}>
              <CpCustomDataTable
                showSearchButtons={false}
                rows={[]}
                columns={dtProductServiceColumns}
              />
            </CpGrid>
          </CpGrid>
          <br />
        </CpBox>
      </CpContainer>
    </AccordionDetails>
  </Accordion>
);

const CpServingLocations = ({ param }: tpOperationDetailsProps) => (
  <Accordion
    className="company-profile-tab"
    expanded={param.expanded === "panelServingLocations"}
    onChange={param.srHandleAccordianExpandChange("panelServingLocations", param.setExpanded)}
  >
    <AccordionSummary
      className="company-profile-tab-summary"
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panelServingLocationsbh-content"
      id="panelServingLocationsbh-header"
    >
      <CpTypography component="h6">Serving Locations</CpTypography>
    </AccordionSummary>
    <AccordionDetails>
      <CpContainer>
        <CpBox>
          <CpGrid container spacing={1}>
            <CpGrid item xs={4}>
              <CpAutocompleteField
                className="company-profile-details-field"
                placeholder="Search Location"
                size="small"
                label="Location"
                name="location"
                options={[]}
              />
            </CpGrid>
          </CpGrid>
          <CpGrid container spacing={1}>
            <CpGrid item xs={12} sx={{ height: 300, width: "100%" }}>
              <CpCustomDataTable
                showSearchButtons={false}
                rows={[]}
                columns={dtServingLocationsColumns}
              />
            </CpGrid>
          </CpGrid>
          <br />
        </CpBox>
      </CpContainer>
    </AccordionDetails>

  </Accordion>
);

const CpMessageBody = () => (
  <CpGrid container spacing={1}>
    <CpGrid item xs={12}>
      <CpTypography className="tab-4-parah">
        {dtEmailDomainContent()}
      </CpTypography>
    </CpGrid>
  </CpGrid>
);

const CpEmailDomain = ({ param }: tpOperationDetailsProps) => (
  <Accordion
    className="company-profile-tab"
    expanded={param.expanded === "EmailDomain"}
    onChange={param.srHandleAccordianExpandChange("EmailDomain", param.setExpanded)}
  >
    <AccordionSummary
      className="company-profile-tab-summary"
      expandIcon={<ExpandMoreIcon />}
      aria-controls="EmailDomainbh-content"
      id="EmailDomainbh-header"
    >
      <CpTypography component="h6">E-mail Domain</CpTypography>
    </AccordionSummary>
    <AccordionDetails>
      <CpContainer className="company-profile-details-field">
        <CpBox>
          {CpMessageBody()}
          <br />
          <CpTypography component="h6">E-mail Domain</CpTypography>
          <CpGrid container xs={12} spacing={1}>
            <CpGrid item xs={3}>
              <CpAutocompleteField
                className="company-profile-details-field"
                placeholder="Search Domain"
                size="small"
                label="Domain"
                name="domain"
                options={[]}
              />
            </CpGrid>
            <CpGrid item xs={8}>
              <CpTypography className="tab-4-important-parah">
                <PriorityHighIcon />
                &nbsp;
                {dtEmailDomainInfo()}
              </CpTypography>
            </CpGrid>
          </CpGrid>
          <br />
        </CpBox>
      </CpContainer>
    </AccordionDetails>
  </Accordion>
);

const CpOperationDetailsPage = ({
  tabValue, expanded, setExpanded, srHandleAccordianExpandChange,
}: tpOperationDetailsPageProps): JSX.Element => {
  const param = {
    expanded, setExpanded, srHandleAccordianExpandChange,
  };

  return (
    <div className="cp-operation-details-root">
      <CpTabPanel value={tabValue} index={4}>
        <CpSectors param={param} />
        <CpProductsAndServices param={param} />
        <CpServingLocations param={param} />
        <CpEmailDomain param={param} />
        <CpActionButtons />
      </CpTabPanel>
    </div>
  );
};

export default CpOperationDetailsPage;
