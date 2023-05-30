import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Grid from "../../../assets/images/grid.svg";
import List from "../../../assets/images/list.svg";
import Accordion from "react-bootstrap/Accordion";
import GridCard from "./gridCard";
import ListCard from "./listCard";

const Index = () => {
  return (
    <div className=" mt-[47px] flex gap-16 items-start ">
      <div className="c2e_accordion w-[30%] max-w-[253px] shadow-smallshadow bg-white p-[16px] ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Name</Accordion.Header>
            <Accordion.Body>
              <div className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  Lorem ipsum
                  <span className=""> 12 </span>
                </p>
              </div>
              <div className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  Lorem ipsum
                  <span className=""> 12 </span>
                </p>
              </div>
              <div className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  Lorem ipsum
                  <span className=""> 12 </span>
                </p>
              </div>
              <div className="">
                <p className=" mb-1 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  Lorem ipsum
                  <span className=""> 12 </span>
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Type</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>License Updates</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Contract assurance</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      {/* <div className=" flex items-center gap-[4px] "> */}
      {/* <p className=" mb-[18px] text-black text-[14px] leading-5 font-Rubik font-normal ">view by</p> */}
      <div className=" grid_list_cards w-[70%]">
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
