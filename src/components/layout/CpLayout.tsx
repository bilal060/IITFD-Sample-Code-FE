import React, { useCallback, useState } from "react";
import clsx from "clsx";
import useStyles from "./stShared";
import CpAppBar from "./appBar/CpAppBar";
import CpDrawer from "./drawer/CpDrawer";
import CpAppFooter from "./appFooter/CpAppFooter";

const CpLayout = (props: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const classes = useStyles({});
  const [drawerOpen, setDrawerOpen] = useState(true);
  const { children } = props;

  const cpOnToggleDrawerHandler = useCallback(
    () => setDrawerOpen((prevState) => !prevState),
    [],
  );

  return (
    <div className={clsx("layout_comp_root", classes.root)}>
      <div className="body-overlay" />
      <CpAppBar onToggleDrawer={cpOnToggleDrawerHandler} />
      <CpDrawer
        open={drawerOpen}
        onToggleDrawer={cpOnToggleDrawerHandler}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <div className={classes.footer} />
      </main>
      <CpAppFooter />
    </div>

  );
};

export default CpLayout;
