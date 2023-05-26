import React from "react";

import ProductCardImg from "../assets/images/productCardImg1.png";

const productCard1 = ({
  ProductCardTitle1,
  ProductCardPrice1,
  ProductCardDescription1,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-[-57px] left-[17px]">
        <img src={ProductCardImg} alt="Product Card Image" />
      </div>
      <div className=" pr-4 pl-4 w-[239px]  border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight hover:shadow-mainshadow  ">
        <div className="pt-[57px] mb-2">
          <div className="flex justify-between mb-3 align-baseline">
            <h2 className="font-normal text-sm mb-0 font-OpenSans hover:text-primarycolor2">
              {ProductCardTitle1}
            </h2>
            <p className="mb-0 font-Rubik">{ProductCardPrice1}</p>
          </div>
          <p className="text-sm font-OpenSans text-gray100 ">
            {ProductCardDescription1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default productCard1;