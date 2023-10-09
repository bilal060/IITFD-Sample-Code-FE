import { Box, BoxProps } from "@mui/material";
import * as React from "react";
import { tpComponentCommon } from "../../../shared/types/component/tpComponentShared";

type tpProps = BoxProps & tpComponentCommon

const CpBox = ({ className, children }: tpProps):JSX.Element => (
  <Box
    className={className}
  >
    {children}
  </Box>
);

export default CpBox;
