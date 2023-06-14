import React from "react";
import {Link} from 'react-router-dom'

import Dropdown from "react-bootstrap/Dropdown";
import More from "../../../assets/images/more.svg";

const GridCard = ({ MyC2Es }) => {
 
  return (
    <div className="flex flex-wrap justify-center w-full gap-4 lg:justify-start">
      {MyC2Es?.map((item, index) => (
        <div key={index} className=" xs:w-[100%] md:w-[48%] lg:w-[31%] xl:w-[23%] h-[250px]  mb-[70px] ">
          <div className=" top-[50px] left-[17px] relative ">
            <img src={item.general.thumb_url} alt="Product Card Image " className="w-[97px] h-[104px] rounded-[4px] object-cover " />
          </div>

          <div className="overflow-hidden h-[100%] pr-4 pl-4 w-full border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-hovershadow   ">
            <div className="pt-[57px] mb-2">
              <div className="relative top-[-40px]">
                <div className="custom_dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <img src={More} alt="jjk" className="w-5 h-5" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href={`/builder?c2eid=${item.general.id}`}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Create Listing</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={() => window.open(item.general.sharedLink)}>Preview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="flex justify-between mb-3 align-baseline">
                <h2 className="mb-0 text-sm font-normal font-OpenSans hover:text-primarycolor2">{item.general.title}</h2>
                <p className="mb-0 font-Rubik">${item.general.price}</p>
              </div>
              <p className="text-sm font-OpenSans text-gray100 ">{item.general.description?.split(" ").slice(0,30).join(" ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
