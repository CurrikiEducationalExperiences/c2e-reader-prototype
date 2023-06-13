import React from "react";

import "../style.scss";

import TopSettings from "./Settings";
import TopMarketPlace from "./TopMarketPlace";
import Income from "./income";

const DashboardSetting = ({ dashboardData }) => {
  const datacard = dashboardData?.map((item) => item);

  return (
    <div className=" w-full bg-mainbg pb-8 pl-[100px] lg:pl-[167px]">
      <div className=" w-full m-auto pt-[32px] px-6 bg-white ">
        <div className=" pb-[60px] md:pb-[148px] ">
          {/* top settings */}
          <TopSettings datacard={datacard} />

          {/* top marketplace */}
          <TopMarketPlace datacard={datacard} />

          {/* income */}
          <Income datacard={datacard} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSetting;
