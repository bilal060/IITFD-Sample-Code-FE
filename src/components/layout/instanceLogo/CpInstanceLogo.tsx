import "./stInstanceLogo.scss";
import React from "react";
import { Box } from "@mui/material";
import { tpComponentCommon } from "../../../shared/types/component/tpComponentShared";

const CpInstanceLogo = ({ className }: tpComponentCommon): JSX.Element => (
  <Box className="instance-logo-comp-root">
    <img alt="logo" className={className} src="./../../../../public/static/media/companylogo.jpg" />
  </Box>
);

export default CpInstanceLogo;
