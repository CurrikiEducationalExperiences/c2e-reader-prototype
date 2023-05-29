import React from "react";

import DropdownButton from "../../../utils/dropdownButton";
import Contact from "../../../assets/images/contact.svg";
import Folder from "../../../assets/images/folder.svg";

const TopMarketPlace = ({ datacard }) => {
  const data = datacard.filter((item) => item.title === "TOP MARKETPLACES");

  return (
    <>
      <div className="">
        <DropdownButton btntext="TOP MARKETPLACES" />
        <div className=" flex items-center gap-4 ">
          {data?.[0]?.marketPlaceList?.map((item, index) => (
            <div key={index} className="p-[16px] w-[241.5px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100">
              <h2 className="text-[18px] mb-[16px] ">{item.heading}</h2>
              <div className="flex items-baseline gap-2 p-1 mb-6 ">
                <img src={Contact} alt="Contact Icon" />
                <p className="font-normal text-sm mb-0">{item.title}</p>
              </div>
              <div className="flex items-baseline gap-2 p-1">
                <img src={Folder} alt="Contact Icon" />
                <p className="font-normal text-sm mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMarketPlace;
