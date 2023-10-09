import React from "react";
import { useForm } from "react-hook-form";
import { ArrowUpwardIcon } from "../../shared/moduleImports/utIconsImports";
import {
  CpPaper,
  CpGrid,
  CpForm,
  CpFormSelectionInput,
  CpTypography,
} from "../../shared/moduleImports/utModuleImports";
import "./stDashboardPageStyle.scss";
import CsplineSymbolChart from "../../components/charts/lineSymbolChart/CpLineSymbolChart";
import CBasicColumnChart from "../../components/charts/basicColumnChart/CpBasicColumnChart";
import Ccolumn3dChart from "../../components/charts/column3dChart/CpColumn3dChart";
import CsbasiclineChart from "../../components/charts/basicLineChart/CpBasicLineChart";
import CpAppbar from "../appbar/CpAppbar";

const CpVistorsInfo = (): JSX.Element => (
  <CpPaper className="card">
    <CpTypography variant="h5" p={2}>
      Vistors
    </CpTypography>
    <CpGrid container spacing={2} mb={3} ml={5}>
      <CpGrid item md={4} sm={3}>
        <CpTypography className="text-muted">Today</CpTypography>
        <CpTypography variant="h5">1024</CpTypography>
      </CpGrid>
      <CpGrid item md={4} sm={3}>
        <CpTypography className="text-muted" display="block">
          This Month
        </CpTypography>
        <CpTypography variant="h5" display="inline">
          12356
        </CpTypography>
        <CpTypography display="inline" className="text-success">
          0.2%
          <ArrowUpwardIcon fontSize="inherit" />
        </CpTypography>
      </CpGrid>
      <CpGrid item md={4} sm={3}>
        <CpTypography className="text-muted" display="block">
          This Year
        </CpTypography>
        <CpTypography variant="h5" display="inline">
          102354
        </CpTypography>
        <CpTypography display="inline" className="text-success">
          0.2%
          <ArrowUpwardIcon fontSize="inherit" />
        </CpTypography>
      </CpGrid>
    </CpGrid>
    <CBasicColumnChart />
  </CpPaper>
);

const CpDashboardPage = (): JSX.Element => {
  const methods = useForm({
    defaultValues: {},
  });
  const radioValues = [
    { label: "Buyer", value: "buyer" },
    { label: "Seller", value: "seller" },
  ];

  return (
    <div className="cp-dashboardpage-root">
      <CpAppbar headerName="Dashboard" />
      <CpGrid container spacing={2}>
        <CpGrid item xs={12}>
          <CpForm methods={methods}>
            <CpFormSelectionInput
              name="age"
              required
              label=""
              data={radioValues}
            />
          </CpForm>
        </CpGrid>
      </CpGrid>
      <CpGrid container spacing={2}>
        <CpGrid item md={8} sm={12} xs={12}>
          <CpVistorsInfo />
        </CpGrid>
        <CpGrid item md={4} sm={12} xs={12}>
          <CpPaper className="card chart-spacing">
            <CsplineSymbolChart />
          </CpPaper>
          <CpPaper className="card">
            <Ccolumn3dChart />
          </CpPaper>
        </CpGrid>
      </CpGrid>
      <CpGrid container spacing={2} mt={1}>
        <CpGrid item md={6} sm={12} xs={12}>
          <CsbasiclineChart />
        </CpGrid>
        <CpGrid item md={6} sm={12} xs={12}>
          <CsbasiclineChart />
        </CpGrid>
      </CpGrid>
    </div>
  );
};
export default CpDashboardPage;
