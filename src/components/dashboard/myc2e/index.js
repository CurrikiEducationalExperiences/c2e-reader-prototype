import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Grid from "../../../assets/images/grid.svg";
import List from "../../../assets/images/list.svg";

import GridCard from "./gridCard";
import ListCard from "./listCard";
import FilterResult from "../filterResult";

const Index = () => {
  return (
    <div className=" mt-[47px] flex justify-between items-start gap-6 ">
      <FilterResult />
      {/* <div className=" flex items-center gap-[4px] "> */}
      {/* <p className=" mb-[18px] text-black text-[14px] leading-5 font-Rubik font-normal ">View by</p> */}
      <div className=" grid_list_cards  w-auto ">
        <Tabs defaultActiveKey="grid" id="uncontrolled-tab-example">
          <Tab eventKey="grid" title={<img src={Grid} alt="icon" />}>
            <GridCard />
          </Tab>
          <Tab eventKey="list" title={<img src={List} alt="icon" />}>
            <ListCard />
          </Tab>
        </Tabs>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Index;
