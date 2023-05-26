import React from "react";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import "./style.scss";

import DropdownButton from "../../utils/dropdownButton";
import DashboardCard from "../../utils/dashboardCard";

const DashboardSetting = () => {
  return (
    <>
      {/* <div className="dashboard-setting flex items-center gap-2 ">
        <img src={downArrow} alt="logo" />
        <p className=" text-sm leading-5 font-medium font-Rubik text-primarycolor m-0 ">TOP SELLINGS</p>
        <DropdownButton id="dropdown-item-button" title="TOP  SELLINGS" className="dropdown_menu">
        <Dropdown.Item as="button">
        <div className=" max-w-[1208px] border  border-borderColor mt-[18px] mb-[12px] "></div>
        <DashboardCard />
        </Dropdown.Item>
      </DropdownButton>
      </div>
      <div className=" max-w-[1208px] border  border-borderColor mt-[18px] mb-[12px] "></div> */}
      <DropdownButton btntext="top settings" />
      <DashboardCard />
      <DropdownButton btntext="INCOME" />
    </>
  );
};

export default DashboardSetting;
