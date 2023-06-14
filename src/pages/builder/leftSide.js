import React, { useState, useEffect, useRef } from 'react';
import { Tab, Tabs, Dropdown, Accordion, Form, Alert } from 'react-bootstrap';

import SearchIcon from '../../assets/images/search.svg';
import projectImg from '../../assets/images/art.png';
import More from '../../assets/images/more.svg';
import EyeIcon from '../../assets/images/mdi_eye.svg';
import PlusIcon from '../../assets/images/Icon-plus.svg';
import config from '../../config/api.json';
import DownArrow from '../../assets/images/down-arrow.svg';

const LeftSide = ({uploadC2E}) => {
  const [expanded, setExpanded] = useState(false);
  const [sources, setSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [query, setQuery] = useState('');
  const [sourcesError, setSourcesError] = useState(null);

  const activeref = useRef(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/c2e/builder/sources?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then((response) => setSources(response.sources))
      .catch((e) => {
        const error = 'Could not get content sources list.';
        setSourcesError(error);
        console.log(error, e);
      });
  }, []);

  useEffect(() => doContentSearch(query), [selectedSource, query]);

  const doContentSearch = (query) => {
    if (selectedSource === null) return;

    fetch(`${config.apiBaseUrl}/c2e/builder/search?userId=1&query=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then((response) => {
        setProjects(response.projects);
        setActivities(response.activities);
      })
      .catch((e) => {
        const error = 'Error fetching content search results';
        setSourcesError(error);
        console.log(error, e);
      });
  };

  console.log('redf', activeref);

  return (
    <div className="m-[20px] shadow-mainshadow w-full md:w-[auto] laptop:w-[400px] h-full calc-function flex-shrink-0 bg-white">
      <div className="w-full p-4">
        <div className="w-full mb-[24px]">
          <p className="mb-1 text-sm font-normal text-primarycolor">Source</p>

          <div className="custom_dropdown_list">
            {sourcesError && <Alert variant="warning">{sourcesError}</Alert>}
            <Form.Select onChange={(value) => setSelectedSource(value)}>
              <option>Select content source</option>
              {sources.map((source) => (
                <option value={source.id}>{source.title}</option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div className="flex items-center w-full gap-1 p-2 mb-4 bg-white rounded shadow-boxShadowSm">
          <img src={SearchIcon} />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm font-normal border-none outline-none placeholder-gray100"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div className="builder-tabs min-w-full xsm:min-w-[200px]">
          <Tabs defaultActiveKey="Projects" id="uncontrolled-tab-example">
            <Tab eventKey="Projects" title="Projects">
              {projects.length === 0 && (
                <Alert variant="info">No projects found.</Alert>
              )}
              {projects.map((project) => (
                <div className="flex w-full gap-[10px] items-center mb-[15px]">
                  <div className="">
                    <button
                      onClick={() => setExpanded(expanded ? false : project.id)}
                      className="flex items-center justify-center border-none rounded bg-[#F7FAFF] p-1 shadow-boxShadowSm"
                    >
                      <img
                        src={DownArrow}
                        alt="PlusIcon"
                        className={`w-5 h-5 transition duration-700 ease-in-out delay-150 ${
                          expanded === project.id ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="w-full">
                    <div className="relative w-full ">
                      <div className="flex flex-col items-start w-full gap-2 pb-6 sm:flex-row sm:items-center sm:pb-0 ">
                        <img
                          src={project.thumb_url}
                          alt="projectImg"
                          className="w-[96px] h-[74px] object-cover rounded"
                        />
                        <div className="">
                          <h5 className="m-0 text-sm font-medium text-primarycolor2">
                            {project.name}
                          </h5>
                          <p className="m-0 pb-[10px] text-xs font-normal text-gray100 ">
                            {expanded !== project.id &&
                              `${project.description.slice(0, 32)}...`}
                            {expanded === project.id && project.description}
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
                                <div className="flex items-center w-full gap-1">
                                  <img
                                    src={EyeIcon}
                                    alt="EyeIcon"
                                    className="w-auto h-auto "
                                  />
                                  <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                    Preview
                                  </p>
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item
                              onClick={()=>{uploadC2E()}}
                              >
                                <div className="flex items-center w-full gap-1">
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

                    {expanded === project.id && (
                      <div className="builder_accordion mt-3">
                        {project.playlists.length === 0 && (
                          <Alert variant="info">No playlists found.</Alert>
                        )}
                        {project.playlists.map((playlist) => (
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item
                              ref={activeref}
                              eventKey={playlist.id}
                            >
                              <Accordion.Header>
                                <p className="font-normal text-sm  text-[#95959] m-0">
                                  {playlist.title.length > 36
                                    ? `${playlist.title.slice(0, 36)}...`
                                    : playlist.title}
                                </p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="flex flex-col w-auto gap-2 ">
                                  {playlist.activities.length === 0 && (
                                    <Alert variant="info">
                                      No activitties found.
                                    </Alert>
                                  )}
                                  {playlist.activities.map((activity) => (
                                    <div className="w-full bg-white border-[0.5px] border-solid border-[#959595] shadow-boxShadowMd p-2 rounded font-normal text-sm  text-[#95959]">
                                      {activity.title}
                                    </div>
                                  ))}
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Tab>
            <Tab eventKey="Activities" title="Activities">
              {activities.length === 0 && (
                <Alert variant="info">No activitties found.</Alert>
              )}
              {activities.map((activity) => (
                <div className="flex-col w-full gap-4">
                  <div className="relative w-full">
                    <div className="flex items-center w-full gap-2 ">
                      <img
                        src={projectImg}
                        alt="projectImg"
                        className="w-[96px] h-[74px] object-cover rounded"
                      />
                      <div className="">
                        <h5 className="m-0 text-sm font-medium text-primarycolor2">
                          {activity.title}
                        </h5>
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
                              <div className="flex items-center w-full gap-1">
                                <img
                                  src={EyeIcon}
                                  alt="EyeIcon"
                                  className="w-auto h-auto "
                                />
                                <p className="font-normal text-[10px] leading-[20px] text-primarycolor2 m-0">
                                  Preview
                                </p>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <div className="flex items-center w-full gap-1">
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
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
