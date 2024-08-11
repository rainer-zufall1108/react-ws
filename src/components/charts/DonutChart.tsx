import React from "react";
import Chart from 'react-apexcharts'
import {ApexOptions} from "apexcharts";

interface DonutChartProps {
  type: | "line"
      | "area"
      | "bar"
      | "pie"
      | "donut"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "candlestick"
      | "boxPlot"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | "rangeArea"
      | "treemap",
  label: string,
  series: ApexAxisChartSeries | number[],
  options: ApexOptions
}
export default function DonutChart({type, label, series, options}: DonutChartProps) {
  return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h5>{label}</h5>
        <Chart series={series} type={type} options={options} width={350} height={350}/>
      </div>
  )
}
