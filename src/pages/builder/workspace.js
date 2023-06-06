import React from 'react';
import { ProgressBar, Accordion, Dropdown } from 'react-bootstrap';

import More from '../../assets/images/more.svg';
import EyeIcon from '../../assets/images/mdi_eye.svg';
import PlusIcon from '../../assets/images/Icon-plus.svg';
import projectImg from '../../assets/images/art.png';

const Workspace = () => {
  return (
    <div className="w-full bg-white h-full calc-function ">
      <div className="w-full bg-primarycolor2 px-2 py-[12px] mb-[14px]">
        <h4 className="font-medium text-[26px] leading-[20px] text-white m-0">
          C2E Builder
        </h4>
      </div>
      <div className="w-full  h-full  p-[16px] pr-[24px]">
        <div className="flex items-center gap-[16px] justify-between mb-7">
          <button className="w-fit h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789]  rounded  font-normal text-xs">
            C2e-12345678
          </button>
          <div className="flex items-center gap-1">
            <button className="primary-btn border-btn text-primarycolor">
              C2E License Settings
            </button>
            <button className="primary-btn border-btn text-primarycolor">
              Preview C2E
            </button>
            <button className="primary-btn bg-primarycolor te text-white">
              Build C2E
            </button>
          </div>
        </div>

        <div className="w-full h-auto p-[12px]  border border-solid border-[#aaaaaa] shadow-boxShadowMd mb-[16px]">
          <p className="font-normal text-sm text-black mb-1">Activity 1</p>
          <p className="font-semibold text-xs mb-1 text-black">Uploading</p>
          <div className="w-full">
            <ProgressBar striped now={45} label="45%" />
          </div>
        </div>

        <div className="builder_accordion">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className=" w-full flex items-center justify-between">
                  <p className=" m-0 font-medium text-sm text-black">
                    Project 1
                  </p>

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
              </Accordion.Header>
              <Accordion.Body>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Project 1</Accordion.Header>
                    <Accordion.Body>
                      <div className="w-full flex-col">
                        <div className="w-full relative px-3 py-[16px] border-b-[1px] border-solid border-b-[#DDDDDD]">
                          <div className="w-full flex items-start gap-[102px] justify-between">
                            <div className="w-fit flex items-center gap-2 ">
                              <img
                                src={projectImg}
                                alt="projectImg"
                                className="w-[32px] h-[32px] object-cover rounded-full"
                              />
                              <div className="">
                                <h5 className="font-medium text-sm text-primarycolor2 m-0">
                                  Activity 1
                                </h5>
                              </div>
                            </div>
                            <p className="font-normal text-[10px] leading-[14px] text-gray100 m-0 pt-2">
                              Within the six categories, there are over 50
                              learning activity types. These range from
                              Interactive Video.
                            </p>
                          </div>

                          <div className="absolute top-0 right-0">
                            <div className="custom_dropdown">
                              <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                  <img
                                    src={More}
                                    alt="jjk"
                                    className="w-5 h-5"
                                  />
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Project 2</Accordion.Header>
                    <Accordion.Body>
                      <div className="w-full flex-col">
                        <div className="w-full relative px-3 py-[16px] border-b-[1px] border-solid border-b-[#DDDDDD]">
                          <div className="w-full flex items-start gap-[102px] justify-between">
                            <div className="w-fit flex items-center gap-2 ">
                              <img
                                src={projectImg}
                                alt="projectImg"
                                className="w-[32px] h-[32px] object-cover rounded-full"
                              />
                              <div className="">
                                <h5 className="font-medium text-sm text-primarycolor2 m-0">
                                  Activity 1
                                </h5>
                              </div>
                            </div>
                            <p className="font-normal text-[10px] leading-[14px] text-gray100 m-0 pt-2">
                              Within the six categories, there are over 50
                              learning activity types. These range from
                              Interactive Video.
                            </p>
                          </div>

                          <div className="absolute top-0 right-0">
                            <div className="custom_dropdown">
                              <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                  <img
                                    src={More}
                                    alt="jjk"
                                    className="w-5 h-5"
                                  />
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
