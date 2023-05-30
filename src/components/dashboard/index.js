import React from "react";

import { Tab, Tabs } from "react-bootstrap";

import DashboardSetting from "./dashboardSettings/index";
import MyC2E from "./myc2e";
import Marketplace from "./marketplace";

import "./style.scss";

const Index = ({ dashboard, MyC2Es, MarketDataList }) => {
  const dashboardData = dashboard?.map((item) => item);
  return (
    <>
      <Tabs defaultActiveKey="Dashboard" id="uncontrolled-tab-example">
        <Tab eventKey="Dashboard" title="Dashboard">
          <DashboardSetting dashboardData={dashboardData} />
        </Tab>
        <Tab eventKey="MYC2Es" title="MY C2Es">
          <MyC2E MyC2Es={MyC2Es} />
        </Tab>
        <Tab eventKey="MyMarketplace" title="My Marketplace">
          <Marketplace MarketDataList={MarketDataList} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Index;
