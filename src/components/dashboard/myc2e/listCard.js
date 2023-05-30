import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import More from '../../../assets/images/more.svg';

const ListCard = ({ MyC2Es }) => {
  return (
    <div className=" flex flex-col gap-4 mb-[39px] pl-10">
      {MyC2Es?.map((item, index) => (
        <div key={index} className="w-full relative min-h-[186px]">
          <div className="absolute top-[57px] left-[-35px] ">
            <img
              src={item.img}
              alt="Product Card Image"
              className="w-[97px] h-[104px] rounded-[4px] object-cover "
            />
          </div>
          <div className="min-h-[186px] pt-[20px] pb-6 pr-4 pl-[89px] max-w-[976px] border-[1px] border-solid border-borderColor hover:border-borderGray rounded-[10px] hover:rounded-[10px] hover:bg-blueHighlight shadow-mainshadow">
            <div>
              <div className="mb-3">
                <div className="custom_dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <img src={More} alt="jjk" className="w-5 h-5" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Move to Marketplace
                      </Dropdown.Item>
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
              <p className="text-sm font-OpenSans text-gray100 m-0">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
