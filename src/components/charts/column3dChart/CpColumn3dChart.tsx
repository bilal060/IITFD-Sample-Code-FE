import React from "react";
import * as Highcharts from "highcharts";
import highchart3d from "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";

highchart3d(Highcharts);

const options = {
  chart: {
    renderTo: "container",
    type: "column",
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25,
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Quotes recieved",
    verticalAlign: "bottom",
    align: "center",
  },
  subtitle: {
    text: "",
  },
  plotOptions: {
    column: {
      depth: 25,
    },
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
  }],
};

const CpColumn3dChart = (): JSX.Element => (
  <div className="column_3d_chart_comp_root chart_comp">
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>
);

export default CpColumn3dChart;
