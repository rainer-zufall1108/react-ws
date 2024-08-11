import {ApexOptions} from "apexcharts";

export const issuesChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['React', 'Vue3', 'Angular'],
  }
}
