import React from "react";

import Accordion from "react-bootstrap/Accordion";

import FIlter from "../../assets/images/filter.svg";

import { filterResults } from "../../data/dummyData";

const filterResult = filterResults?.filter((item) => item.filterResult === "Filter Result");
const name = filterResults?.filter((item) => item.title === "Name");
const type = filterResults?.filter((item) => item.title === "Type");
const License = filterResults?.filter((item) => item.title === "License Updates");
const contract = filterResults?.filter((item) => item.title === "Contract assurance");

const FilterResult = () => {
  return (
    <div className=" h-full lg:h-[calc(100vh-44px)] pb-9 lg:pb-0 c2e_accordion w-full lg:w-full lg:max-w-[253px] flex-shrink-0 shadow-smallshadow bg-white p-[16px] ">
      <div className="mb-3 flex items-center justify-between gap-3">
        {filterResult.map((item, index) => (
          <>
            <div key={index} className="flex items-center gap-[6px] ">
              <img src={FIlter} alt="filter logo" />

              <p className="font-normal  text-base text-black m-0">
                {item.filterResult} <span className="font-light text-xs">{item.total}</span>
              </p>
            </div>
            <p className="font-light text-base text-primarycolor m-0">{item.resetText}</p>
          </>
        ))}
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Name</Accordion.Header>

          <Accordion.Body>
            {name?.[0]?.resultList?.map((item, index) => (
              <div key={index} className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  {item.name}
                  <span className=""> {item.number} </span>
                </p>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Type</Accordion.Header>
          <Accordion.Body>
            {type?.[0]?.resultList?.map((item, index) => (
              <div key={index} className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  {item.name}
                  <span className=""> {item.number} </span>
                </p>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>License Updates</Accordion.Header>
          <Accordion.Body>
            {License?.[0]?.resultList?.map((item, index) => (
              <div key={index} className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  {item.name}
                  <span className=""> {item.number} </span>
                </p>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Contract assurance</Accordion.Header>
          <Accordion.Body>
            {contract?.[0]?.resultList?.map((item, index) => (
              <div key={index} className="">
                <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                  {item.name}
                  <span className=""> {item.number} </span>
                </p>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterResult;
