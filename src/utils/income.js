import React from "react";

const Income = ({ incomePrice, incomeMonth }) => {
  return (
    <>
      <div className="pt-[42px] pb-2 pl-4 w-[282px] max-md:w-[225px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100 font-Rubik">
        <h2 className="text-4xl  max-md:text-3xl pl-[6px] mb-[34px]">
          {incomePrice}
        </h2>
        <p className="font-medium text-lg max-md:text-base">{incomeMonth}</p>
      </div>
    </>
  );
};

export default Income;
