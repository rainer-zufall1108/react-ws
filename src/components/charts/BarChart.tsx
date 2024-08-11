import React from "react";
import {ApexOptions} from "apexcharts";
import Chart from "react-apexcharts";
interface BarChartProps {
  label: string,
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | number[],
  options: ApexOptions
}
export default function BarChart({label, series, options}: BarChartProps) {
  return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h5>{label}</h5>
        <Chart type={'bar'} series={series} options={options}/>
      </div>
  )
}
