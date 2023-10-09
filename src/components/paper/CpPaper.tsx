import React, { ReactElement } from "react";
import clsx from "clsx";
import { Paper, Theme } from "@mui/material";
import "./stPaper.scss";
import { SxProps } from "@mui/system";

type tpProp = {
  children: ReactElement | ReactElement[],
  className?: string,
  elevation?: number,
  sx?: SxProps<Theme>,
}

const CpPaper = (
  {
    children, className, elevation, sx,
  }: tpProp,
): JSX.Element => (
  <Paper sx={sx} elevation={elevation} className={clsx("cp-paper-root", className)}>
    {children}
  </Paper>
);

CpPaper.defaultProps = {
  className: "",
  elevation: 0,
  sx: {},
};

export default CpPaper;
