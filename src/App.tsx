import React from 'react';
import './App.css';
import logo from './logo.svg';
import Watch from "./components/Watch";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Counter from "./components/Counter";
import CardList from "./components/CardList";
import Home from "./components/Home";
import Divider from "./components/Divider";

function App() {

  return (
      <main>
        <div className="App">
          <Tabs>
            <div style={{display: "flex", alignContent: "center", alignItems: "center"}}>
              <img src={logo} width={100} className={'App-logo'} alt="logo"/>
              <TabList style={{display: "flex", flexDirection: 'row', justifyContent: "space-evenly", width: '80%'}}>
                <Tab style={{listStyle: 'none'}}>Home</Tab>
                <Tab style={{listStyle: 'none'}}>Watch with Effect</Tab>
                <Tab style={{listStyle: 'none'}}>Counter State</Tab>
                <Tab style={{listStyle: 'none'}}>Lists</Tab>
              </TabList>
            </div>
            <Divider/>
            <TabPanel>
              <Home/>
            </TabPanel>
            <TabPanel>
              <Watch/>
            </TabPanel>
            <TabPanel>
              <Counter/>
            </TabPanel>
            <TabPanel>
              <CardList/>
            </TabPanel>
          </Tabs>
        </div>
      </main>
  );
}

export default App;
