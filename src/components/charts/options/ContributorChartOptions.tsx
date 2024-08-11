import {ApexOptions} from "apexcharts";

export const contributorChartOptions: ApexOptions = {
  chart: {id: 'donut-chart', width: 80, height: 80},
  colors:['#F44336', '#E91E63', '#9C27B0'],
  labels: ['React', 'Vue3', 'Angular'],
  plotOptions: {
    pie: {
      expandOnClick: true
    }
  }
}
