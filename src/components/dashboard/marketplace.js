import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import DataTable from 'react-data-table-component';
import More from '../../assets/images/more.svg';
import FIlter from '../../assets/images/filter.svg';

const dataList = [
  {
    name: 'asdasdasd',
    title: 'kfjsdjkfhsdjkf',
    price: '$3232',
  },
  {
    name: 'asdd',
    title: 'jsdjkfhsdjkf',
    price: '$3232',
  },
  {
    name: 'adajkchcsd',
    title: 'kygdsdg78',
    price: '$3232',
  },
];

const Marketplace = () => {
  return (
    <div className="mt-[42px] pb-[42px]">
      <h3 className=" font-medium text-sm text-[#084892] w-full pb-[18px] border-b-[1px] border-solid border-b-[#DDDDDD] mb-[23px]">
        MARKETPLACE LISTINGS
      </h3>
      <div className=" w-full flex  gap-6">
        <div className="c2e_accordion w-[253px] flex-shrink-0 shadow-smallshadow bg-white p-[16px] ">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-[6px] ">
              <img src={FIlter} />

              <p className="font-normal  text-base text-black m-0">
                Filter Result <span className="font-light text-xs">(12)</span>
              </p>
            </div>
            <p className="font-light text-base text-primarycolor m-0">Reset</p>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Name</Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                    Lorem ipsum
                    <span className=""> 12 </span>
                  </p>
                </div>
                <div className="">
                  <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                    Lorem ipsum
                    <span className=""> 12 </span>
                  </p>
                </div>
                <div className="">
                  <p className=" mb-2 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                    Lorem ipsum
                    <span className=""> 12 </span>
                  </p>
                </div>
                <div className="">
                  <p className=" mb-1 cursor-pointer flex items-center justify-between text-gray100 text-[8px] laeading-[15px] font-Rubik font-normal hover:text-primarycolor ">
                    Lorem ipsum
                    <span className=""> 12 </span>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>License Updates</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Contract assurance</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="w-full ">
          <DataTable
            data={dataList}
            columns={[
              {
                name: (
                  <p className="font-medium text-sm text-[#767676]">
                    Marketplace
                  </p>
                ),
                sortable: true,
                selector: (row) => (
                  <div className="flex items-center gap-2">
                    <span className="w-[32px] h-[32px] rounded-full bg-primarycolor"></span>
                    <p className="font-normal text-sm text-primarycolor m-0">
                      {row.name}
                    </p>
                  </div>
                ),
                sortId: 'iconName',
              },
              {
                name: (
                  <p className="font-medium text-sm text-[#767676]">Title</p>
                ),
                sortable: true,
                selector: (row) => (
                  <div className="">
                    <p className="font-medium text-sm text-[#767676]">
                      {row.title}
                    </p>
                  </div>
                ),
                sortId: 'name',
              },

              {
                name: (
                  <p className="font-medium text-sm text-[#767676]">
                    Purchased
                  </p>
                ),
                cell: (row) => {
                  return (
                    <div className="flex-grow four">
                      <div className="flex justify-start gap-[5px] meta">
                        <input type="checkbox" />
                      </div>
                    </div>
                  );
                },
              },

              {
                name: (
                  <p className="font-medium text-sm text-[#767676]">Price</p>
                ),
                cell: (row) => {
                  return (
                    <div className="flex justify-between w-full">
                      <div className="flex justify-start gap-[5px] meta">
                        {row.price}
                      </div>
                      <img src={More} />
                    </div>
                  );
                },
                // ignoreRowClick: true,
                // allowOverflow: true,
                // button: true,
              },
            ]}
            pagination
            // onSort={(row, direction, sorted) => {
            //   setDataList(sortedData(row.sortId, direction, sorted));
            // }}
            // paginationComponent={(e) => {
            //   return <Pagination e={e} />;
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
