import React from 'react';

import Dashboard from '../components/dashboard';

import { dashboard, MyC2Es, MarketDataList } from '../data/dummyData';

const Index = () => {
  return (
    <div className="w-full pt-8 pb-8  bg-mainbg">
      <div className=" max-w-[1440px] m-auto pt-[32px] px-6 bg-white ">
        <Dashboard
          dashboard={dashboard}
          MyC2Es={MyC2Es}
          MarketDataList={MarketDataList}
        />
      </div>
    </div>
  );
};

export default Index;
