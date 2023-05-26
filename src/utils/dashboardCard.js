import React from "react";

import Slider from "react-slick";
import "../components/dashboard/style.scss";

const artcard = [
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
  {
    img: "../assets/images/art.png",
    text: "Design, Art & History",
  },
];

const DashboardCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="dashboard_slider relative ">
      <Slider {...settings}>
        {artcard.map((item, index) => (
          <div key={index} className=" shadow-mainshadow flex items-end w-full max-w-[302px] pb-2 pl-4 min-h-[156px] rounded-lg bg-blueGradient ">
            <div className=" w-full h-full flex items-end ">
              <h3 className=" text-lg leading-6 font-Rubik font-medium text-white m-0 z-[1] ">{item.text}</h3>
            </div>
            <img src={item.img} alt="image" className=" absolute top-0 right-0 left-0 rounded-lg " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DashboardCard;
