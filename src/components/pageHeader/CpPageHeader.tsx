import React from "react";
import { Grid } from "@mui/material";
import { CpTypography } from "../../shared/moduleImports/utModuleImports";
import "./stPageHeader.scss";

type PropTypes = {
  mainText: string
  secondText: string
}

const CpPageHeader = (props: PropTypes): JSX.Element => {
  const { mainText, secondText } = props;

  return (
    <Grid className="page-header-comp-root" item mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <CpTypography
            sx={{ fontWeight: "bold" }}
            variant="h5"
            className="first-header"
          >
            {mainText}
          </CpTypography>
        </Grid>
        <Grid item xs={2}>
          <CpTypography>
            {secondText}
          </CpTypography>
        </Grid>
      </Grid>
      <br />
    </Grid>
  );
};
export default CpPageHeader;
