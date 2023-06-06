import React from 'react';
import { Tab, Tabs, Dropdown, Accordion } from 'react-bootstrap';

import SearchIcon from '../../assets/images/search.svg';
import projectImg from '../../assets/images/art.png';
import More from '../../assets/images/more.svg';
import EyeIcon from '../../assets/images/mdi_eye.svg';
import PlusIcon from '../../assets/images/Icon-plus.svg';

const LeftSide = () => {
  return (
    <div className="min-w-[321px] flex-shrink-0 bg-white calc-function">
      {/* <div className="w-full bg-primarycolor2 p-2">
        <p className="font-medium text-2xl leading-[28px] text-white m-0">
          C2E Builder
        </p>
      </div> */}
      <div className="p-4 w-full">
        <div className="w-full mb-[24px]">
          <p className="text-sm font-normal text-primarycolor mb-1">Source</p>

          <div className="custom_dropdown_list">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                CurrikiStudio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="flex items-center gap-1 w-full p-2 mb-4  rounded shadow-boxShadowSm bg-white">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Search"
            className=" font-normal text-sm placeholder-gray100 border-none outline-none"
          />
        </div>

        <div className="builder-tabs min-w-[200px]">
          <Tabs defaultActiveKey="Projects" id="uncontrolled-tab-example">
            <Tab eventKey="Projects" title="Projects">
              <div className="w-full flex-col gap-4">
                <div className="w-full">
                  <div className="w-full relative mb-2">
                    <div className="w-full flex items-center gap-2 ">
                      <img
                        src={projectImg}
                        alt="projectImg"
                        className="w-[96px] h-[74px] object-cover rounded"
                      />
                      <div className="">
                        <h5 className="font-medium text-sm text-primarycolor2 m-0">
                          Project 1
                        </h5>
                        <p className="font-normal text-[10px] leading-[14px] text-gray100 m-0">
                          Activity Description
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0">
                      <div className="custom_dropdown">
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic">
                            <img src={More} alt="jjk" className="w-5 h-5" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <div className="w-full flex  items-center gap-1">
                                <img
                                  src={EyeIcon}
                                  alt="EyeIcon"
                                  className=" w-auto h-auto"
                                />
                                <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                  Preview
                                </p>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <div className="w-full flex  items-center gap-1">
                                <img
                                  src={PlusIcon}
                                  alt="EyeIcon"
                                  className="w-auto h-auto"
                                />
                                <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                  Add
                                </p>
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-fit ">
                      <button className="flex items-center gap-1  border-none rounded bg-[#F7FAFF] p-1 shadow-boxShadowSm">
                        <img src={PlusIcon} alt="PlusIcon" className="" />
                        <p className="font-normal text-xs text-primarycolor2 m-0">
                          Expand
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="builder_accordion">
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Playlist 1</Accordion.Header>
                        <Accordion.Body>Activity 1</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Playlist 2</Accordion.Header>
                        <Accordion.Body>Activity 1</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Playlist 3</Accordion.Header>
                        <Accordion.Body>Activity 1</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Activities" title="Activities">
              <div className="w-full flex-col gap-4">
                <div className="w-full relative">
                  <div className="w-full flex items-center gap-2 ">
                    <img
                      src={projectImg}
                      alt="projectImg"
                      className="w-[96px] h-[74px] object-cover rounded"
                    />
                    <div className="">
                      <h5 className="font-medium text-sm text-primarycolor2 m-0">
                        Activity 1
                      </h5>
                      <p className="font-normal text-[10px] leading-[14px] text-gray100 m-0">
                        Activity Description
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0">
                    <div className="custom_dropdown">
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <img src={More} alt="jjk" className="w-5 h-5" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div className="w-full flex  items-center gap-1">
                              <img
                                src={EyeIcon}
                                alt="EyeIcon"
                                className=" w-auto h-auto"
                              />
                              <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                Preview
                              </p>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <div className="w-full flex  items-center gap-1">
                              <img
                                src={PlusIcon}
                                alt="EyeIcon"
                                className="w-auto h-auto"
                              />
                              <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                Add
                              </p>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
