import React from "react";
import { ThemeProvider } from "@mui/styles";
import {
  Drawer, Divider,
} from "@material-ui/core";
import clsx from "clsx";
import useStyles, { darkTheme } from "../stShared";
import { tpSideMenuProps } from "../../../shared/types/tpOther";
import CpItemsList from "./itemsList/CpItemsList";
import "./stDrawer.scss";

const CpDrawer = ({ open }: tpSideMenuProps): JSX.Element => {
  const classes = useStyles({});
  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        color="primary"
        variant="permanent"
        className={clsx(classes.drawer, {
          "drawer-closed": !open,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <CpItemsList open={open} />
      </Drawer>
    </ThemeProvider>
  );
};

export default CpDrawer;
