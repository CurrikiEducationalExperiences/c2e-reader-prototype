import React from "react";

import ProductCardImg from "../assets/images/productCardImg1.png";

const productCard1 = ({
  ProductCardTitle,
  ProductCardPrice,
  ProductCardDescription,
}) => {
  return (
    <div>
      <div className="absolute top-[3px] left-[17px]">
        <img src={ProductCardImg} alt="Product Card Image" />
      </div>
      <div className="pt-[57px] pr-4 pl-4 w-[239px] border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[4px] hover:rounded-[10px] hover:bg-blueHighlight">
        <div className="mb-2">
          <div className="flex justify-between mb-3 align-baseline">
            <h2 className="font-normal text-sm mb-0 font-OpenSans hover:text-primarycolor2">
              Lorem Ipsum
            </h2>
            <p className="mb-0">$26</p>
          </div>
          <p className="text-sm font-OpenSans ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s tex...
          </p>
        </div>
      </div>
    </div>
  );
};

export default productCard1;
