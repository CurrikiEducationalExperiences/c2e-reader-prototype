import React from 'react';
import downArrow from '../assets/images/down-arrow.svg';

const DropdownButton = ({ className, btntext, mb }) => {
  return (
    <>
      <div className={`${className} pt-6 flex items-center gap-2 `}>
        <img src={downArrow} alt="logo" />
        <p className=" text-sm leading-5 font-medium font-Rubik text-primarycolor m-0 ">
          {btntext}
        </p>
      </div>
      <div
        className={` max-w-[1208px] border border-borderColor mt-[18px] ${
          mb ? 'mb-[27px]' : 'mb-[12px]'
        } `}
      ></div>
    </>
  );
};

export default DropdownButton;
