import React from "react";

import ProductCardImg from "../assets/images/productCardImg1.png";

const productCard2 = ({
  ProductCardTitle2,
  ProductCardPrice2,
  ProductCardDescription2,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-[29px] left-[-35px]">
        <img src={ProductCardImg} alt="Product Card Image" />
      </div>
      <div className="pt-[24px] pr-4 pl-[89px]  border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight hover:shadow-mainshadow">
        <div className="mb-2">
          <div className="flex justify-between mb-3 align-baseline">
            <h2 className="font-normal text-sm mb-0 font-OpenSans hover:text-primarycolor2">
              {ProductCardTitle2}
            </h2>
            <p className="mb-0 font-Rubik">{ProductCardPrice2}</p>
          </div>
          <p className="text-sm font-OpenSans text-gray100">
            {ProductCardDescription2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default productCard2;
