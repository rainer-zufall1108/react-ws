import {ApexOptions} from "apexcharts";

export const githubStarsChartOptions: ApexOptions = {
  chart: {id: 'donut-chart', width: 80, height: 80},
  colors:['#008cff', '#3696e7', '#85bbee'],
  labels: ['React', 'Vue3', 'Angular'],
  plotOptions: {
    pie: {
      expandOnClick: true
    }
  }
}
