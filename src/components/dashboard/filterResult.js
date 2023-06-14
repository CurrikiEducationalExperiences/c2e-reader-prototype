import React, { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import FIlter from '../../assets/images/filter.svg';

// import { filterResults } from '../../data/dummyData';

// const filterResult = filterResults?.filter(
//   (item) => item.filterResult === 'Filter Result'
// );
// const name = filterResults?.filter((item) => item.title === 'Name');
// const type = filterResults?.filter((item) => item.title === 'Type');
// const License = filterResults?.filter(
//   (item) => item.title === 'License Updates'
// );
// const contract = filterResults?.filter(
//   (item) => item.title === 'Contract assurance'
// );

const FilterResult = ({setC2es, c2es}) => {
  const [price, setPrice] =  useState([])

  // useEffect(()=>{
  //   if(price?.length) {
  //   setC2es(c2es.filter(data=>{
  //     price.includes(parseInt(data.price.split('$')[0]))
  //   }))
  //   } else {
  //     setC2es(c2es)
  //   }
  // },[price])
  return (
    <div className=" h-full lg:h-[calc(100vh-44px)] pb-9 lg:pb-0 c2e_accordion w-full sm:w-full md:w-[27%] lg:w-[22%] flex-shrink-0 shadow-smallshadow bg-white p-[16px] ">
      <div className="flex items-center justify-between gap-3 mb-3">

            <div  className="flex items-center gap-[6px] ">
              <img src={FIlter} alt="filter logo" />

              <p className="m-0 text-base font-normal text-black">
                Filter Results
                <span className="text-sm bold ml-[10px]">12</span>
              </p>
            </div>
            <p className="m-0 text-base bold text-primarycolor">
              Reset
            </p>


      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search by Name</Accordion.Header>

          <Accordion.Body>
            <input
              type="text"
              placeholder="Search ..."
              className="w-full mb-[5px] h-[40px] rounded-[10px] outline-none px-[10px]"
              onChange={((e)=>{
                console.log(e.target.value)
                if(e.target.value) {
                  setC2es(c2es.filter(data=>data.general.title?.includes(e.target.value)))
                } else {

                  setC2es(c2es)
                }

              })}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Subscription</Accordion.Header>
          <Accordion.Body>
            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
                Purchased
                <span className="">
                  <input type="checkbox" />
                </span>
              </p>
            </div>

            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
                Subscription
                <span className="">
                  <input type="checkbox" />
                </span>
              </p>
            </div>

            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
                Open
                <span className="">
                  <input type="checkbox" />
                </span>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
                Less than 30$
                <span className="">
                  <input type="checkbox" value="30" onClick={(e)=>{
                    setPrice(...price,e.target.value)
                  }} />
                </span>
              </p>
            </div>

            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
              Less than 50$
                <span className="">
                  <input type="checkbox" value="50" onClick={(e)=>{
                    setPrice(...price,e.target.value)
                  }} />
                </span>
              </p>
            </div>

            <div className="">
              <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[12px] laeading-[15px] font-Rubik font-medium hover:text-primarycolor ">
              Less than 60$
                <span className="">
                  <input type="checkbox" value="60" onClick={(e)=>{
                    setPrice(...price,e.target.value)
                  }} />
                </span>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterResult;
