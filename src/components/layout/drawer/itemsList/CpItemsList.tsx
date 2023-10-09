import React, { useState } from "react";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import {
  ListItemIcon, SearchIcon, ExpandLess, ExpandMore,
} from "../../../../shared/moduleImports/utIconsImports";
import { tpSideMenuProps } from "../../../../shared/types/tpOther";
import {
  CpTypography,
  CpGrid, CpTextField, CpListItemButton, CpCollapse,
} from "../../../../shared/moduleImports/utModuleImports";
import "./stItemsList.scss";
import {
  COMPANY_CALENDER, DOCUMENTS, EDIT_PROFILE, PRODUCTS, REPORTS, SUGGESTIONS,
} from "../../../../shared/constants/dtIcons";

const CpShowIcon = (src: string): JSX.Element => (
  <img
    src={`../../../../../assets/images/sidemenu/${src}.png`}
    alt={src}
    className="items-list-icons"
  />
);
const CpRfqListRows = () => (
  <List component="div" disablePadding>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/email-sent">
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Email Sent</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/terms">
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Terms</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/request-access">
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Request Access</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/create-address">
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">#9 Create Address</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        {CpShowIcon(EDIT_PROFILE)}
      </ListItemIcon>
      <CpTypography className="items-list-text">My Requested Rfq&apos;s</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">My Responded Rfq&apos;s</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        {CpShowIcon(COMPANY_CALENDER)}
      </ListItemIcon>
      <CpTypography className="items-list-text">My Qoutes</CpTypography>
    </CpListItemButton>
  </List>
);
const CpRegisterHeading = (myRegisterList:boolean,
  setMyRegisterList: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }) => (
    <List component="div" disablePadding>
      <CpListItemButton onClick={() => setMyRegisterList(!myRegisterList)}>
        <ListItemIcon>
          {CpShowIcon(DOCUMENTS)}
        </ListItemIcon>
        <CpTypography className="items-list-text">Register Pages</CpTypography>
        {myRegisterList ? <ExpandLess /> : <ExpandMore />}
      </CpListItemButton>
    </List>
);
const CpSearchBar = () => (
  <CpGrid container xs={12} justifyContent="center" className="items-list-search-box">
    <CpGrid item xs={7} className="items-list-search-field">
      <CpTextField
        fullWidth
        placeholder=""
        size="small"
      />
    </CpGrid>
    <CpGrid item xs={2} mt={2} className="items-list-search-icon">
      <SearchIcon />
    </CpGrid>
  </CpGrid>
);
const CpRegisterListRows = () => (
  <List component="div" disablePadding>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/company-profile">
      <ListItemIcon>
        {CpShowIcon(EDIT_PROFILE)}
      </ListItemIcon>
      <CpTypography className="items-list-text">#7 Company Profile</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/login">
      <ListItemIcon>
        {CpShowIcon(REPORTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Login Form</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/signup">
      <ListItemIcon>
        {CpShowIcon(SUGGESTIONS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Register</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/company-exists">
      <ListItemIcon>
        {CpShowIcon(COMPANY_CALENDER)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Company Exists Form</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/activate-account">
      <ListItemIcon>
        {CpShowIcon(DOCUMENTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Activate Account Form</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/seller/membership">
      <ListItemIcon>
        {CpShowIcon(DOCUMENTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">#5 Seller Membership</CpTypography>
    </CpListItemButton>
    <CpListItemButton sx={{ pl: 4 }} component={Link} to="/create-bank-information">
      <ListItemIcon>
        {CpShowIcon(DOCUMENTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">11,12 Create Bank Info</CpTypography>
    </CpListItemButton>
  </List>
);

const CpOtherListRows = () => (
  <>
    <CpListItemButton>
      <ListItemIcon>
        {CpShowIcon(REPORTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">Buyer Lists</CpTypography>
    </CpListItemButton>
    <CpListItemButton component={Link} to="/add-sector">
      <ListItemIcon>
        {CpShowIcon(PRODUCTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">16-18 Sectors</CpTypography>
    </CpListItemButton>
    <CpListItemButton component={Link} to="/create-service-location">
      <ListItemIcon>
        {CpShowIcon(PRODUCTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">24-27 Service</CpTypography>
    </CpListItemButton>
    <CpListItemButton component={Link} to="/add-products-and-services">
      <ListItemIcon>
        {CpShowIcon(PRODUCTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">19-23 Products Services</CpTypography>
    </CpListItemButton>
    <CpListItemButton component={Link} to="/create-contact">
      <ListItemIcon>
        {CpShowIcon(PRODUCTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">#14 Create Contact</CpTypography>
    </CpListItemButton>
    <CpListItemButton component={Link} to="/add-new-document">
      <ListItemIcon>
        {CpShowIcon(DOCUMENTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">29,30 Add Document</CpTypography>
    </CpListItemButton>
    <CpListItemButton>
      <ListItemIcon>
        {CpShowIcon(PRODUCTS)}
      </ListItemIcon>
      <CpTypography className="items-list-text">My Catalogues</CpTypography>
    </CpListItemButton>
  </>
);
const CpRadioButton = () => (
  <span className="items-list-radio-button">
    <CpListItemButton>
      <ListItemIcon>
        <input type="radio" id="radio1" />
      </ListItemIcon>
      <CpTypography className="items-list-text">Become a Buyer</CpTypography>
    </CpListItemButton>
  </span>
);

const CpItemsList = ({ open }: tpSideMenuProps):JSX.Element => {
  const [myRfqList, setMyRfqList] = useState(false);
  const [myRegisterList, setMyRegisterList] = useState(false);

  return (
    <div className="cp-items-list-root">
      <List
        sx={{
          bgcolor: "background.paper",
          overflow: "auto",
          maxHeight: 430,
          width: 283,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        { open && (
          CpSearchBar()
        )}
        <CpListItemButton onClick={() => setMyRfqList(!myRfqList)}>
          <ListItemIcon>
            {CpShowIcon(DOCUMENTS)}
          </ListItemIcon>
          <CpTypography className="items-list-text">RFQ&apos;s</CpTypography>
          {myRfqList ? <ExpandLess /> : <ExpandMore />}
        </CpListItemButton>
        <CpCollapse in={myRfqList} timeout="auto" unmountOnExit>
          {CpRfqListRows()}
        </CpCollapse>
        {CpOtherListRows()}
        {CpRegisterHeading(myRegisterList, setMyRegisterList)}
        <CpCollapse in={myRegisterList} timeout="auto" unmountOnExit>
          {CpRegisterListRows()}
        </CpCollapse>
      </List>
      { open && (
        CpRadioButton()
      )}
    </div>
  );
};

export default CpItemsList;
