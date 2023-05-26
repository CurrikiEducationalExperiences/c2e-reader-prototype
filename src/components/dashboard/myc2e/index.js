import React from "react";

import Accordion from "react-bootstrap/Accordion";

const Index = () => {
  return (
    <div className=" mt-[47px] ">
      <div className="c2e_accordion max-w-[253px] shadow-smallshadow bg-white p-[16px] ">
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
    </div>
  );
};

export default Index;
