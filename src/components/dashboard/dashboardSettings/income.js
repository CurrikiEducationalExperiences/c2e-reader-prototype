import React from 'react';

import DropdownButton from '../../../utils/dropdownButton';

const Income = ({ datacard }) => {
  const data = datacard.filter((item) => item.title === 'INCOME');

  return (
    <>
      <DropdownButton btntext="INCOME" className=" pt-[113px] " mb />
      <div className=" flex items-center gap-4 flex-wrap ">
        {data?.[0].incomeList?.map((item, index) => (
          <div
            key={index}
            className="pt-[42px] pb-2 pl-4 w-[282px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100 font-Rubik"
          >
            <h2 className="text-4xl pl-[6px] mb-[34px]">{item.price}</h2>
            <p className="font-medium text-lg">{item.income}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Income;
