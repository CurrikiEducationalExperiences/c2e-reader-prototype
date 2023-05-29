import React from "react";

const ListCard = ({ MyC2Es }) => {
  return (
    <div className=" flex flex-col gap-4 mb-[39px]">
      {MyC2Es?.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute top-[29px] left-[-35px]">
            <img src={item.img} alt="Product Card Image" />
          </div>
          <div className="pt-[24px] pr-4 pl-[89px] w-[976px] border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-mainshadow">
            <div className="mb-2">
              <div className="flex justify-between mb-3 align-baseline">
                <h2 className="font-normal text-sm mb-0 font-OpenSans hover:text-primarycolor2">{item.title}</h2>
                <p className="mb-0 font-Rubik">{item.price}</p>
              </div>
              <p className="text-sm font-OpenSans text-gray100">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
