import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import DashboardSetting from "./dashboardSetting";
import MyC2E from "./myc2e";
import Marketplace from "./marketplace";

import "./style.scss";

const Index = () => {
  return (
    <>
      <Tabs defaultActiveKey="Dashboard" id="uncontrolled-tab-example">
        <Tab eventKey="Dashboard" title="Dashboard">
          <DashboardSetting />
        </Tab>
        <Tab eventKey="MYC2Es" title="MY C2Es">
          <MyC2E />
        </Tab>
        <Tab eventKey="MyMarketplace" title="My Marketplace">
          <Marketplace />
        </Tab>
      </Tabs>
    </>
  );
};

export default Index;
