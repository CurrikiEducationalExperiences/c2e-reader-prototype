import React from "react";

import Dashboard from "../components/dashboard";

import { dashboard, MyC2Es, MarketDataList } from "../data/dummyData";

console.log("c2eData here", dashboard);
console.log("MyC2Es here", MyC2Es);
console.log("MarketDataList", MarketDataList);

const Index = () => {
  return (
    <div className=" w-full bg-mainbg pt-10 pb-8 ">
      <div className=" max-w-[1330px] m-auto pt-[32px] px-6 bg-white ">
        <Dashboard dashboard={dashboard} MyC2Es={MyC2Es} MarketDataList={MarketDataList} />
      </div>
    </div>
  );
};

export default Index;
