import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {DynamicTab} from "../../types/DynamicTab";

interface DynamicTabBarProps {
  dynamicTabs: DynamicTab[]
}

export default function DynamicTabBar({dynamicTabs}: DynamicTabBarProps) {
  return (
      <Tabs>
        <TabList style={{display: "flex", flexDirection: 'row', justifyContent: "space-evenly", width: '80%'}}>
          {dynamicTabs.map((dynamicTab: DynamicTab, index: number) => {
            return (
                <Tab key={index} style={{listStyle: "none"}}>
                  {dynamicTab.title}
                </Tab>
            )
          })
          }
        </TabList>
        {dynamicTabs.map((dynamicTab: DynamicTab, index: number) => <TabPanel key={index}>{dynamicTab.component}</TabPanel>)}
      </Tabs>
  )
}
