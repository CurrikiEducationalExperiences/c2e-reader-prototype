import React, { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import config from '../../config/api.json';

import DataTable from "react-data-table-component";

import More from "../../assets/images/more.svg";
import FilterResult from "./filterResult";

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/c2e/marketplace?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then(items => setListings(items.activeList))
      .catch((e) => {
        const error = 'Could not get C2E listing';
        setError(error);
        console.log(error, e);
      });
  }, []);
  return (
    <div className=" w-full bg-mainbg pt-3 pb-8 pl-[167px]">
      <div className=" max-w-[1440px] m-auto pt-[32px] px-6 bg-white ">
        <div className="mt-[42px] pb-[42px]">
          <h3 className=" font-medium text-sm text-[#084892] w-full pb-[18px] border-b-[1px] border-solid border-b-[#DDDDDD] mb-[23px]">MARKETPLACE LISTINGS</h3>
          <div className=" w-full flex gap-6">
            <FilterResult />

            <div className="w-full ">
              {error && <Alert variant='warning'>{error}</Alert>}
              <DataTable
                data={listings}
                columns={[
                  {
                    name: <p className="font-medium text-sm text-[#767676]">Marketplace</p>,
                    sortable: true,
                    selector: (row) => (
                      <div className="flex items-center gap-2">
                        <span className="w-[32px] h-[32px] rounded-full bg-primarycolor"></span>
                        <p className="font-normal text-sm text-primarycolor m-0">{row.name}</p>
                      </div>
                    ),
                    sortId: "iconName",
                  },
                  {
                    name: <p className="font-medium text-sm text-[#767676]">Title</p>,
                    sortable: true,
                    selector: (row) => (
                      <div className="">
                        <p className="font-medium text-sm text-[#767676]">{row.title}</p>
                      </div>
                    ),
                    sortId: "name",
                  },

                  {
                    name: <p className="font-medium text-sm text-[#767676]">Purchased</p>,
                    cell: (row) => {
                      return (
                        <div className="flex-grow four">
                          <div className="flex justify-start gap-[5px] meta">
                            <input type="checkbox" className="checked:accent-lightGreen w-[14px] h-5 rounded-[4px] cursor-pointer " />
                          </div>
                        </div>
                      );
                    },
                  },

                  {
                    name: <p className="font-medium text-sm text-[#767676]">Price</p>,
                    cell: (row) => {
                      return (
                        <div className="flex justify-between w-full">
                          <div className="flex justify-start gap-[5px] meta">{row.price}</div>
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
      </div>
    </div>
  );
};

export default Marketplace;
