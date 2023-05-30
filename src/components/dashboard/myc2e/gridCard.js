import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import More from '../../../assets/images/more.svg';

const GridCard = ({ MyC2Es }) => {
  return (
    <div className="  w-full flex flex-wrap gap-4 mt-[37px] mb-[39px] ">
      {MyC2Es?.map((item, index) => (
        <div key={index} className=" min-h-[309px] w-[243px]">
          <div className=" top-[50px] left-[17px] relative">
            <img src={item.img} alt="Product Card Image" />
          </div>

          <div className=" pr-4 pl-4 w-full border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-hovershadow   ">
            <div className="pt-[57px] mb-2">
              <div className="relative top-[-40px]">
                <div className="custom_dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <img src={More} alt="jjk" className="w-5 h-5" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="flex justify-between mb-3 align-baseline">
                <h2 className="mb-0 text-sm font-normal font-OpenSans hover:text-primarycolor2">
                  {item.title}
                </h2>
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
