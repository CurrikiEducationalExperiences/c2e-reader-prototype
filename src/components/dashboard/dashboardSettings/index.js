import React from 'react';

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import '../style.scss';

import TopSettings from './Settings';
import TopMarketPlace from './TopMarketPlace';
import Income from './income';

const DashboardSetting = ({ dashboardData }) => {
  const datacard = dashboardData?.map((item) => item);

  return (
    <div className=" w-full bg-mainbg pt-10 pb-8 ">
      <div className=" max-w-[1330px] m-auto pt-[32px] px-6 bg-white ">
        <div className=" pb-[148px] ">
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
