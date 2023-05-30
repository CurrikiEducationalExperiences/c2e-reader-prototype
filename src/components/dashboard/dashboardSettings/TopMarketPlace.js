import React, { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import config from '../../../config/api.json';

import DropdownButton from "../../../utils/dropdownButton";
import Contact from "../../../assets/images/contact.svg";
import Folder from "../../../assets/images/folder.svg";

const TopMarketPlace = ({ datacard }) => {
  const [markets, setMarkets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/wallet/marketplace?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then(items => setMarkets(items.marketplace))
      .catch((e) => {
        const error = 'Could not get top Markets';
        setError(error);
        console.log(error, e);
      });
  }, []);

  return (
    <>
      <div className="">
        <DropdownButton btntext="MY TOP MARKETPLACES" />
        <div className="flex items-center gap-4 flex-wrap ">
          {error && <Alert variant='warning'>{error}</Alert>}
          {markets.map((item, index) => (
            <div key={index} className="p-[16px] w-full md:w-[241.5px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100">
              <h2 className="text-[18px] mb-[16px] ">{item.heading}</h2>
              <div className="flex items-baseline gap-2 p-1 mb-6 ">
                <img src={Contact} alt="Contact Icon" />
                <p className="mb-0 text-sm font-normal">{item.title}</p>
              </div>
              <div className="flex items-baseline gap-2 p-1">
                <img src={Folder} alt="Contact Icon" />
                <p className="mb-0 text-sm font-normal">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMarketPlace;
