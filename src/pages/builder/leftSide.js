import React from 'react';
import { Tab, Tabs, Accordion } from 'react-bootstrap';

import SearchIcon from '../../assets/images/search.svg';

const LeftSide = () => {
  return (
    <div className="min-w-[221px] flex-shrink-0 bg-white p-4 left-side">
      <div className="flex items-center gap-1 w-full px-2 mb-1 border-[1px] border-solid border-primarycolor rounded ">
        <img src={SearchIcon} />
        <input
          type="text"
          placeholder="Search"
          className=" font-medium text-[8px] leading-[20px] placeholder-primarycolor2 border-none outline-none"
        />
      </div>

      <div className="builder-tabs w-[189px]">
        <Tabs defaultActiveKey="Contents" id="uncontrolled-tab-example">
          <Tab eventKey="Contents" title="Contents">
            <p className="Contents"></p>
          </Tab>
          <Tab eventKey="Resources" title="Resources">
            <p className="">Resources</p>
          </Tab>
        </Tabs>
      </div>

      <div className="builder_accordion w-[189px]">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to Use CurrikiStudio</Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printin and typesetting
              industry.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Activity Sampler</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Exploring National Parks</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default LeftSide;
