import React from "react";

import Accordion from "react-bootstrap/Accordion";

import FIlter from "../../assets/images/filter.svg";

const FilterResult = () => {
  return (
    <div className=" h-[calc(100vh-100px)] c2e_accordion w-full max-w-[253px] flex-shrink-0 shadow-smallshadow bg-white p-[16px] ">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-[6px] ">
          <img src={FIlter} />

          <p className="font-normal  text-base text-black m-0">
            Filter Result <span className="font-light text-xs">(12)</span>
          </p>
        </div>
        <p className="font-light text-base text-primarycolor m-0">Reset</p>
      </div>
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
  );
};

export default FilterResult;
