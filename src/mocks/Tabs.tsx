import {DynamicTab} from "../types/DynamicTab";
import TsxDescription from "../components/documentation/TsxDescription";
import HooksDescription from "../components/documentation/HooksDescription";
import React from "react";
import ReactDescription from "../components/documentation/ReactDescription";
import ComponentDescription from "../components/documentation/ComponentDescription";

export const tabs: DynamicTab[] = [
  {
    id: '1',
    title: 'React',
    component: <ReactDescription/>
  },
  {
    id: '2',
    title: 'JSX/TSX',
    component: <TsxDescription/>
  },
  {
    id: '3',
    title: 'Components',
    component: <ComponentDescription/>
  },
  {
    id: '4',
    title: 'Hooks',
    component: <HooksDescription/>
  }
]
