import React from "react";

import Contact from "../assets/images/contact.svg";
import Folder from "../assets/images/folder.svg";

const MarketPlace = ({ marketPlaceTitle, marketPlaceItemSold, marketPlaceProducts }) => {
  return (
    <div className="p-[16px] w-[241.5px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100">
      <h2 className="text-[18px] mb-[16px] ">{marketPlaceTitle}</h2>
      <div className="flex items-baseline gap-2 p-1 mb-6 ">
        <img src={Contact} alt="Contact Icon" />
        <p className="font-normal text-sm mb-0">{marketPlaceItemSold}</p>
      </div>
      <div className="flex items-baseline gap-2 p-1">
        <img src={Folder} alt="Contact Icon" />
        <p className="font-normal text-sm mb-0">{marketPlaceProducts}</p>
      </div>
    </div>
  );
};

export default MarketPlace;
