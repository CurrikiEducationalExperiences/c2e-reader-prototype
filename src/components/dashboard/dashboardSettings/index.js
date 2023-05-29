import React from "react";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import "../style.scss";

import TopSettings from "./Settings";
import TopMarketPlace from "./TopMarketPlace";
import Income from "./income";

const DashboardSetting = ({ dashboardData }) => {
  const datacard = dashboardData?.map((item) => item);

  return (
    <div className=" pb-[148px] ">
      {/* top settings */}
      <TopSettings datacard={datacard} />

      {/* top marketplace */}
      <TopMarketPlace datacard={datacard} />

      {/* income */}
      <Income datacard={datacard} />
    </div>
  );
};

export default DashboardSetting;
