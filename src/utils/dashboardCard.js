import React from "react";

import Slider from "react-slick";
import Art from "../assets/images/art.png";

const DashboardCard = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className=" relative ">
      <Slider {...settings}>
        <div className=" flex items-end w-full max-w-[302px] pb-2 pl-4  min-h-[156px] rounded-lg shadow-mainshadow bg-blueGradient ">
          <div className=" w-full h-full flex items-end ">
            <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 z-[1] ">Design, Art & History</h3>
          </div>
          <img src={Art} alt="image" className=" absolute top-0 right-0 left-0 rounded-lg " />
        </div>
        <div className=" w-full max-w-[302px] pb-2 pl-4  min-h-[156px] rounded-lg shadow-mainshadow bg-blueGradient ">
          <div className=" w-full h-full flex items-end ">
            <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 z-[1] ">Design, Art & History</h3>
          </div>
          <img src={Art} alt="image" className=" absolute top-0 right-0 left-0 rounded-lg " />
        </div>
        <div className=" w-full max-w-[302px] pb-2 pl-4  min-h-[156px] rounded-lg shadow-mainshadow bg-blueGradient ">
          <div className=" w-full h-full flex items-end ">
            <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 z-[1] ">Design, Art & History</h3>
          </div>
          <img src={Art} alt="image" className=" absolute top-0 right-0 left-0 rounded-lg " />
        </div>
        <div className=" w-full max-w-[302px] pb-2 pl-4  min-h-[156px] rounded-lg shadow-mainshadow bg-blueGradient ">
          <div className=" w-full h-full flex items-end ">
            <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 z-[1] ">Design, Art & History</h3>
          </div>
          <img src={Art} alt="image" className=" absolute top-0 right-0 left-0 rounded-lg " />
        </div>
      </Slider>
    </div>
  );
};

export default DashboardCard;
