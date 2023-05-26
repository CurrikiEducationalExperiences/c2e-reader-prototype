import React from "react";
import downArrow from "../assets/images/down-arrow.svg";

const DropdownButton = ({ btntext }) => {
  return (
    <>
      <div className=" flex items-center gap-2 ">
        <img src={downArrow} alt="logo" />
        <p className=" uppercase text-sm leading-5 font-medium font-Rubik text-primarycolor m-0 ">{btntext}</p>
      </div>
      <div className=" max-w-[1208px] border  border-borderColor mt-[18px] mb-[12px] "></div>
    </>
  );
};

export default DropdownButton;
