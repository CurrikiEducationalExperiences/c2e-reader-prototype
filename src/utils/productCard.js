import React from "react";

import ProductCardImg from "../assets/images/productCardImg.png";

const Product = ({
  ProductCardTitle,
  ProductCardPrice,
  ProductCardDescription,
}) => {
  return (
    <div className="pt-4 pb-[19px] pr-4 pl-4 w-[239px] border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[4px] hover:rounded-[10px] hover:bg-blueHighlight hover:shadow-mainshadow">
      <div>
        <img src={ProductCardImg} alt="Product Card Image" />
        <div className="flex justify-between mt-3 mb-3 align-baseline">
          <h2 className="font-normal text-sm mb-0 font-OpenSans hover:text-primarycolor2">
            {ProductCardTitle}
          </h2>
          <p className="mb-0 font-Rubik">{ProductCardPrice}</p>
        </div>
        <p className="text-sm font-OpenSans text-gray100">
          {ProductCardDescription}
        </p>
      </div>
    </div>
  );
};
export default Product;
