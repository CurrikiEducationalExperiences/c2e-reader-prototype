import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import More from "../../../assets/images/more.svg";

const GridCard = ({ MyC2Es }) => {
  return (
    <div className=" w-full flex justify-center lg:justify-start flex-wrap gap-4 mt-[37px] mb-[39px] ">
      {MyC2Es?.map((item, index) => (
        <div key={index} className=" min-h-full md:min-h-[309px] w-[300px] sm:w-[370px] md:w-[243px] lg:w-[235px] laptop:w-[243px] ">
          <div className=" top-[50px] left-[17px] relative ">
            <img src={item.img} alt="Product Card Image " className="w-[97px] h-[104px] rounded-[4px] object-cover " />
          </div>

          <div className="h-[270px] pr-4 pl-4 pb-2 w-full border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-hovershadow ">
            <div className="pt-[57px] ">
              <div className="relative top-[-40px]">
                <div className="custom_dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <img src={More} alt="jjk" className="w-5 h-5" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Move to Marketplace</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="flex justify-between mb-3 align-baseline">
                <h2 className="mb-0 text-sm font-normal font-OpenSans hover:text-primarycolor2">{item.title}</h2>
                <p className="mb-0 font-Rubik">{item.price}</p>
              </div>
              <p className={`"text-sm font-OpenSans text-gray100" `}>{item.text.length > 90 ? `${item.text.slice(0, 105)}...` : item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
