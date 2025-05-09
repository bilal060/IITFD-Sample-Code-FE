import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SeriesLabel from "highcharts/modules/series-label";

SeriesLabel(Highcharts);

const options = {
  chart: {
    type: "spline",
    height: 250,
  },
  title: {
    text: "RFQs made",
    verticalAlign: "bottom",
    align: "center",
  },
  subtitle: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      name: "Tokyo",
      marker: {
        symbol: "square",
      },
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        {
          y: 26.5,
          marker: {
            symbol: "url(https://www.highcharts.com/samples/graphics/sun.png)",
          },
        },
        23.3,
        18.3,
        13.9,
        9.6,
      ],
    },
    {
      name: "London",
      marker: {
        symbol: "diamond",
      },
      data: [
        {
          y: 3.9,
          marker: {
            symbol: "url(https://www.highcharts.com/samples/graphics/snow.png)",
          },
        },
        4.2,
        5.7,
        8.5,
        11.9,
        15.2,
        17.0,
        16.6,
        14.2,
        10.3,
        6.6,
        4.8,
      ],
    },
  ],
};

const CpLineSymbolChart = (): JSX.Element => (
  <div className="spline_symbol_chart_comp_root chart_comp">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default CpLineSymbolChart;
