import React from "react";
import {
  AppBar, IconButton, ThemeProvider, Toolbar, MenuItem, MenuList,
} from "@material-ui/core";
import moment from "moment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { CpTypography, CpAutocompleteField } from "../../../shared/moduleImports/utModuleImports";
import useStyles, { darkTheme } from "../stShared";
import CpInstanceLogo from "../instanceLogo/CpInstanceLogo";
import { tpSideMenuProps } from "../../../shared/types/tpOther";
import CfgApp from "../../../configs/CfgApp";
import { dtUserOptions } from "./dtAppBar";
import "./stAppBar.scss";

const CpListDropdowns = () => (
  <>
    <MenuItem component={Link} to="/">
      <div className="head-toolbar-list-dropdown">
        <div className="head-toolbar-list-dropbtn">
          {" "}
          <AccountCircleIcon className="head-toolbar-profile-icon" />
        </div>
        <div className="head-toolbar-list-dropdown-content">
          <span>My Profile</span>
          <span>My Preferences</span>
          <span>Exit</span>
        </div>
      </div>
    </MenuItem>
    <MenuItem component={Link} to="/">
      <CpTypography className="head-toolbar-profile-username"><b>user name</b></CpTypography>
    </MenuItem>
    <MenuItem component={Link} to="/">
      <div className="head-toolbar-list-dropdown">
        <div className="head-toolbar-list-dropbtn">
          {" "}
          <SettingsIcon />
        </div>
        <div className="head-toolbar-list-dropdown-content">
          <span>Settings</span>
          <span>Company Profile</span>
          <span>User Management</span>
        </div>
      </div>
    </MenuItem>
  </>
);

const CpTimeAndTypeList = () => (
  <MenuList className="head-toolbar-list head-toolbar-user-type" id="menu-list-grow">
    <MenuItem>
      <CpAutocompleteField
        className="head-toolbar-user-type-dropdown"
        options={dtUserOptions}
        name="userType"
      />
    </MenuItem>
    <MenuItem>
      <div>
        <b>
          {
      `${moment(new Date()).format(
        CfgApp.defaultDateFormat,
      )}  ${new Date().toLocaleTimeString()}`
      }
        </b>
      </div>
    </MenuItem>
  </MenuList>
);

const CpAppBar = ({ onToggleDrawer }: tpSideMenuProps): JSX.Element => {
  const classes = useStyles({});
  return (
    <div className="app_bar_comp_root">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="header-toolbar-comp">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={onToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <CpInstanceLogo />
            {CpTimeAndTypeList()}
            <MenuList className="head-toolbar-list" id="menu-list-grow">
              <MenuItem component={Link} to="/">
                <MailOutlineIcon />
              </MenuItem>
              <MenuItem component={Link} to="/">
                <NotificationsNoneIcon />
              </MenuItem>
              <MenuItem component={Link} to="/">
                <EventNoteIcon />
              </MenuItem>
              {CpListDropdowns()}
            </MenuList>
          </Toolbar>
        </AppBar>
        <br />
      </ThemeProvider>
    </div>
  );
};

export default CpAppBar;
