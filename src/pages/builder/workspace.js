import React from "react";
import { ProgressBar, Accordion, Dropdown, Alert } from "react-bootstrap";

import More from "../../assets/images/more.svg";
import EyeIcon from "../../assets/images/mdi_eye.svg";
import PlusIcon from "../../assets/images/Icon-plus.svg";
import projectImg from "../../assets/images/art.png";
import ActiveImg from "../../assets/images/active.svg";
import ExpiredImg from "../../assets/images/expired.svg";
import VidePlay from "../../assets/images/video.png";
import CrownIcon from "../../assets/images/crown.svg";

const Workspace = ({ setOpenRoyalties, c2e }) => {
  return (
    <div className="w-full h-full bg-white laptop:calc-function ">

      <div className="w-full  h-full  p-[16px] pr-[24px]">



        <div className="builder_accordion">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="flex items-center justify-between w-full ">
                  <p className="m-0 text-sm font-medium text-black ">{c2e.general.title}</p>

                  <div className="custom_c2e_dropdown">
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Accordion defaultActiveKey="0" flush>
                  {c2e.playlists.length === 0 && <Alert variant="info">No playlists found.</Alert>}
                  {c2e.playlists.map((playlist, playlistIndex) => (
                    <Accordion.Item eventKey={playlistIndex}>
                      <Accordion.Header>
                        <div className="flex items-center justify-between w-full ">
                          <p className="m-0 text-sm font-medium text-black ">{playlist.title}</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Accordion defaultActiveKey="0" flush className="active_iner_accordion">
                          {playlist.activities.length === 0 && <Alert variant="info">No activites found.</Alert>}
                          {playlist.activities.map((activity, activityIndex) => (
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <div className="flex-col w-full">
                                  <div className="w-full relative px-1 sm:px-3 pt-0 pb-3 border-b-[1px] border-solid border-b-[#DDDDDD]">
                                    <div className="w-full flex flex-col lg:flex-row laptop:flex-col xl:flex-row items-start gap-[8px] lg:gap-[60px] laptop:gap-[10px] xl:gap-[102px] justify-between">
                                      <div className="flex items-center gap-2 w-fit ">
                                        <img src={activity.thumb_url} alt="projectImg" className="w-[32px] h-[32px] object-cover rounded-full" />
                                        <div className="">
                                          <h5 className="m-0 text-sm font-medium whitespace-pre text-primarycolor2">{activity.title}</h5>
                                        </div>
                                      </div>
                                      <p className="pt-2 m-0 text-sm font-normal text-gray100">
                                        {activity.library_name}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Header>
                              {activity.royalty && (
                                <Accordion.Body className="ml-0 lg:ml-12 laptop:ml-2 xl:ml-14">
                                  <div className="flex-col w-full">
                                    <div className="w-full relative px-1 sm:px-3 pt-0 pb-3 border-b-[1px] border-solid border-b-[#DDDDDD]">
                                      <div className="w-full flex flex-col lg:flex-row items-start gap-[12px] ">
                                        <div className="w-fit h-auto mt-[8px] relative flex-shrink-0">
                                          <img src={projectImg} alt="projectImg" className="w-[48px] h-[48px] object-cover rounded" />
                                          <img src={VidePlay} alt="projectImg" className="w-auto h-auto absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                                        </div>
                                        <div className="">
                                          <h5 className="m-0 text-sm font-normal whitespace-pre text-primarycolor2">{activity.royalty.royaltyContentTitle}</h5>

                                          <div className="flex items-center gap-1 mb-2">
                                            <p className="m-0 text-sm font-normal text-black">Status:</p>
                                            <div className="flex items-center gap-[2px] ">
                                              <img src={ActiveImg} alt="active" className="w-auto h-auto " />
                                              <p className="font-normal text-sm text-[#69CC8A] m-0">Active</p>
                                            </div>
                                          </div>

                                          <p className="m-0 text-sm font-normal text-gray100">
                                            {activity.royalty.publisherName}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="absolute top-0 right-0">
                                        <div className="flex items-center gap-2">
                                          <label className="px-2 py-1 rounded w-fit bg-primarycolor">
                                            <img src={CrownIcon} alt="active" className="w-auto h-auto " />
                                          </label>
                                          <div className="custom_c2e_dropdown">
                                            <Dropdown>
                                              <Dropdown.Toggle variant="" id="dropdown-basic">
                                                <img src={More} alt="jjk" className="w-5 h-5" />
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu>
                                                <Dropdown.Item>
                                                  <div onClick={() => setOpenRoyalties(true)} className="flex items-center w-full gap-1">
                                                    <p className="m-0 text-xs font-medium text-primarycolor2">Manage Royalties</p>
                                                  </div>
                                                </Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Accordion.Body>
                              )}
                              
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}

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
