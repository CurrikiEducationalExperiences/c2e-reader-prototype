import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Grid from '../../../assets/images/grid.svg';
import List from '../../../assets/images/list.svg';

import GridCard from './gridCard';
import ListCard from './listCard';
import FilterResult from '../filterResult';

const Index = ({ MyC2Es }) => {
  return (
    <div className=" w-full bg-mainbg pt-8 pb-8  pl-[167px]">
      <div className=" max-w-[1330px] m-auto pt-[32px] px-6 bg-white ">
        <div className=" mt-[47px] flex justify-between items-start gap-6 ">
          <FilterResult />
          {/* <div className=" flex items-center gap-[4px] "> */}
          {/* <p className=" mb-[18px] text-black text-[14px] leading-5 font-Rubik font-normal ">View by</p> */}
          <div className=" grid_list_cards  w-auto ">
            <Tabs defaultActiveKey="grid" id="uncontrolled-tab-example">
              <Tab eventKey="grid" title={<img src={Grid} alt="icon" />}>
                <div className=" max-w-[1011px] border border-borderColor mt-[18px]  mb-[12px] "></div>
                <GridCard MyC2Es={MyC2Es} />
              </Tab>
              <Tab eventKey="list" title={<img src={List} alt="icon" />}>
                <div className=" max-w-[1011px] border border-borderColor my-[16px] "></div>
                <ListCard MyC2Es={MyC2Es} />
              </Tab>
            </Tabs>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
