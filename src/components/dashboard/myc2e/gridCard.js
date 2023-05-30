import React from "react";

const GridCard = ({ MyC2Es }) => {
  return (
    <div className=" max-w-[1030px] w-full grid grid-cols-4 gap-4 mt-[37px] mb-[39px] ">
      {MyC2Es?.map((item, index) => (
        <div key={index} className=" min-h-[309px]">
          <div className=" top-[50px] left-[17px] relative">
            <img src={item.img} alt="Product Card Image" />
          </div>
          <div className=" pr-4 pl-4 w-[239px] border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-hovershadow   ">
            <div className="pt-[57px] mb-2">
              <div className="flex justify-between mb-3 align-baseline">
                <h2 className="mb-0 text-sm font-normal font-OpenSans hover:text-primarycolor2">{item.title}</h2>
                <p className="mb-0 font-Rubik">{item.price}</p>
              </div>
              <p className="text-sm font-OpenSans text-gray100 ">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
