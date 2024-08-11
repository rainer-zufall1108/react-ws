import React from "react";
import DynamicTabBar from "./tabbar/DynamicTabBar";
import {tabs} from "../mocks/Tabs";
export default function Home() {
  return (
      <div>
        <DynamicTabBar dynamicTabs={tabs} />
      </div>
  )
}
