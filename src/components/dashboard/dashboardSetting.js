import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import downArrow from "../../assets/images/down-arrow.svg";

import "./style.scss";
import DashboardCard from "../../utils/dashboardCard";

const DashboardSetting = () => {
  return (
    <div className="dashboard-setting">
      <img src={downArrow} alt="logo" />
      <DropdownButton id="dropdown-item-button" title="TOP  SELLINGS" className="dropdown_menu">
        <Dropdown.Item as="button">
          <div className=" max-w-[1208px] border  border-borderColor mt-[18px] mb-[12px] "></div>
          <DashboardCard />
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default DashboardSetting;
