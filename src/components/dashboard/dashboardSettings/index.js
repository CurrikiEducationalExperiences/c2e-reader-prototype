import React from "react";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import "../style.scss";

import TopSettings from "./Settings";
import TopMarketPlace from "./TopMarketPlace";
import Income from "./income";

const DashboardSetting = () => {
  return (
    <div className=" pb-[148px] ">
      {/* top settings */}
      <TopSettings />

      {/* top marketplace */}
      <TopMarketPlace />

      {/* income */}
      <Income />
    </div>
  );
};

export default DashboardSetting;
