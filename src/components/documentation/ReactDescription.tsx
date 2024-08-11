import React, {useState} from "react";
import {FaMagnifyingGlassChart} from "react-icons/fa6";
import ChartOverview from "../charts/ChartOverview";
import ReactDescriptionContent from "./ReactDescriptionContent";

export default function ReactDescription() {

  const [chartsVisible, setChartsVisible] = useState(false);

  return (
      <div style={{textAlign: "left", margin: 20}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <h2>React</h2>
          <FaMagnifyingGlassChart size={30} onClick={() => setChartsVisible(oldVal => !oldVal)} color={chartsVisible ? '#444444': '#d70303'}/>
        </div>
        {!chartsVisible ? <ReactDescriptionContent/> : <ChartOverview/>}
      </div>
  )
}
