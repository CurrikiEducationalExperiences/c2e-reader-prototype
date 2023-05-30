import React, { useEffect, useState } from 'react';

import Slider from "react-slick";
import Alert from "react-bootstrap/Alert";

import "../style.scss";

import DropdownButton from "../../../utils/dropdownButton";
import config from "../../../config/api.json";

const TopSettings = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };
  
  const [c2es, setC2es] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/wallet/sales?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then(items => setC2es(items.sales))
      .catch((e) => {
        const error = 'Could not get top C2Es';
        setError(error);
        console.log(error, e);
      });
  }, []);

  return (
    <>
      <DropdownButton btntext="MY TOP SELLINGS C2Es" className="pt-0" />
      <div className=" ">
        {error && <Alert variant='warning'>{error}</Alert>}
        <Slider {...settings}>
          {c2es.map((item, index) => (
            <div
              key={index}
              className=" relative before:absolute before:z-[2] before:left-0 before:right-0 before:h-full before:bg-blueGradient before:rounded-lg flex items-end  w-[302px] pb-2 pl-4 min-h-[156px] rounded-lg "
            >
              <div className=" w-full h-[156px] flex items-end ">
                <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 relative z-[2] ">
                  {item.text}
                </h3>
              </div>
              <img
                src={item.thumbnail}
                alt={item.text}
                className=" w-full max-w-[302px] h-full z-[1] absolute top-0 right-0 left-0 rounded-lg "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopSettings;
