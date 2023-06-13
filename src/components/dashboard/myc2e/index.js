import React, { useEffect, useState } from "react";
import config from "../../../config/api.json";
import Alert from "react-bootstrap/Alert";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Grid from "../../../assets/images/grid.svg";
import List from "../../../assets/images/list.svg";

import GridCard from "./gridCard";
import ListCard from "./listCard";
import FilterResult from "../filterResult";

const Index = () => {
  const [c2es, setC2es] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/c2e/listall?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then((items) => setC2es(items.listing))
      .catch((e) => {
        const error = "Could not get C2E listing";
        setError(error);
        console.log(error, e);
      });
  }, []);

  return (
    <div className="w-full pb-8 bg-mainbg pl-[100px] lg:pl-[167px]">
      <div className=" max-w-[1440px] m-auto pt-[32px] px-6 bg-white ">
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-6 ">
          <FilterResult />
          {/* <div className=" flex items-center gap-[4px] "> */}
          {/* <p className=" mb-[18px] text-black text-[14px] leading-5 font-Rubik font-normal ">View by</p> */}
          <div className="w-full  grid_list_cards">
            <Tabs defaultActiveKey="grid" id="uncontrolled-tab-example">
              <Tab eventKey="grid" title={<img src={Grid} alt="icon" />}>
                <div className=" max-w-[1011px] border border-borderColor mt-[18px]  mb-[12px] "></div>
                {error && <Alert variant="warning">{error}</Alert>}
                <GridCard MyC2Es={c2es} />
              </Tab>
              <Tab eventKey="list" title={<img src={List} alt="icon" />}>
                <div className=" max-w-[1011px] border border-borderColor my-[16px] "></div>
                {error && <Alert variant="warning">{error}</Alert>}
                <ListCard MyC2Es={c2es} />
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
