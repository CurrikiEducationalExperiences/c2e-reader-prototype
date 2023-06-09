import React from 'react';
import projectImg from '../../assets/images/art.png';

const RoyaltyBasedContentCard = ({ setModalShow }) => {
  return (
    <div className=" w-[203px] h-auto p-2  border-[1px] border-solid border-[#2E68BF] rounded-2xl">
      <p className="font-medium text-xs text-black mb-2">
        Financial Year 2023 Chart
      </p>
      <div className="w-full h-[111px] rounded-lg mb-3">
        <img
          src={projectImg}
          alt="projectImg"
          className="w-full h-[111px] object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 justify-between flex-wrap">
        <p className="font-medium text-xs text-black mb-0">
          Terms $10/year Unlimited
        </p>
        <button
          type="button"
          onClick={() => setModalShow(true)}
          className="w-fit  border-none outline-none p-0 m-0 font-medium text-xs text-[#628ECF]"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default RoyaltyBasedContentCard;
