import React from "react";
import DonutChart from "./DonutChart";
import {contributorChartOptions} from "./options/ContributorChartOptions";
import BarChart from "./BarChart";
import {issuesChartOptions} from "./options/IssueChartOptions";
import {downloadsChartOptions} from "./options/DownloadsChartOptions";
import {githubStarsChartOptions} from "./options/GithubStarsChartOptions";

export default function ChartOverview() {
  return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <DonutChart label={'Contributor'} type={'donut'} series={[1660, 499, 1942]}
                    options={contributorChartOptions}/>
        <BarChart label={'Issues'} series={[{data: [666, 657, 1400], color: '#6fe83f'}]}
                  options={issuesChartOptions}/>
        <BarChart label={'Downloads/Woche'} series={[{data: [23792377, 4891683, 3395444], color: '#d73fe8'}]}
                  options={downloadsChartOptions}/>
        <DonutChart label={'Github Stars'} type={'pie'} series={[226000, 46100, 95400]}
                    options={githubStarsChartOptions}/>
      </div>
  )
}
