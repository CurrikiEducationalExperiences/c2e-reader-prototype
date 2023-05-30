import React from 'react';

import Slider from 'react-slick';

import '../style.scss';

import DropdownButton from '../../../utils/dropdownButton';

const TopSettings = ({ datacard }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = datacard?.filter((item) => item.title === 'TOP SETTINGS');

  return (
    <>
      <DropdownButton btntext="top settings" />
      <div className=" ">
        <Slider {...settings}>
          {data?.[0]?.dashboardList?.map((item, index) => (
            <div
              key={index}
              className=" relative before:absolute before:z-[2] before:left-0 before:right-0 before:h-full before:bg-blueGradient before:rounded-lg flex items-end w-full max-w-[302px] pb-2 pl-4 min-h-[156px] rounded-lg "
            >
              <div className=" w-full h-[156px] flex items-end ">
                <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 relative z-[2] ">
                  {item.text}
                </h3>
              </div>
              <img
                src={item.img}
                alt="image"
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
