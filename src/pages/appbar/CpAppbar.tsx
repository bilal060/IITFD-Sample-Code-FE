import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import {
  CpTypography,
  CpBox,
  CpButton,
  CpAppBar,
  CpToolBar,
} from "../../shared/moduleImports/utModuleImports";
import { MenuRoundedIcon } from "../../shared/moduleImports/utIconsImports";
import "./stAppbar.scss";

export type tpAppBarProps = {
  headerName:string,
}

const CpAppbar = ({ headerName }:tpAppBarProps): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <CpAppBar position="static" className="">
      <CpToolBar>
        <CpButton size="large" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setDrawerOpen(!drawerOpen)}>
          <MenuRoundedIcon fontSize="large" />
        </CpButton>
        <CpTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {headerName}
        </CpTypography>
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <CpBox
            className="cp-appbar-page-root"
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <NavLink activeClassName="active-navlink" className="navlink" to="dashboard">Dashboard</NavLink>
            <NavLink activeClassName="active-navlink" className="navlink" to="products">Products</NavLink>

            <NavLink activeClassName="active-navlink" className="navlink" to="categories">Categories</NavLink>

            <NavLink activeClassName="active-navlink" className="navlink" to="catalogues">Catelogues</NavLink>

            <NavLink activeClassName="active-navlink" className="navlink" to="product_catalog">Product Catalog</NavLink>

            <NavLink activeClassName="active-navlink" className="navlink" to="company">Profile</NavLink>

          </CpBox>
        </Drawer>
      </CpToolBar>
    </CpAppBar>
  );
};

export default CpAppbar;
