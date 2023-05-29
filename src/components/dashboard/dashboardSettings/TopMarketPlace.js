import React from "react";

import DropdownButton from "../../../utils/dropdownButton";
import MarketPlace from "../../../utils/marketPlace";

const TopMarketPlace = () => {
  return (
    <>
      <DropdownButton btntext="TOP MARKETPLACES" />
      <div className=" flex items-center gap-4 max-md:flex max-md:flex-wrap max-md:justify-center">
        <MarketPlace
          marketPlaceTitle="MarketPlace #1"
          marketPlaceItemSold="10M Item Sold"
          marketPlaceProducts="1M Products"
        />
        <MarketPlace
          marketPlaceTitle="MarketPlace #2"
          marketPlaceItemSold="10M Item Sold"
          marketPlaceProducts="1M Products"
        />
        <MarketPlace
          marketPlaceTitle="MarketPlace #3"
          marketPlaceItemSold="10M Item Sold"
          marketPlaceProducts="1M Products"
        />
        <MarketPlace
          marketPlaceTitle="MarketPlace #4"
          marketPlaceItemSold="10M Item Sold"
          marketPlaceProducts="1M Products"
        />
      </div>
    </>
  );
};

export default TopMarketPlace;
