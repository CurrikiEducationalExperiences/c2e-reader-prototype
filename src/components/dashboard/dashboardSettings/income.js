import React from "react";

import DropdownButton from "../../../utils/dropdownButton";
import IncomeCard from "../../../utils/income";

const Income = () => {
  return (
    <>
      <DropdownButton btntext="INCOME" className=" pt-[113px] " mb />
      <div className=" flex items-center gap-4 ">
        <IncomeCard incomePrice="$500" incomeMonth="Weekly" />
        <IncomeCard incomePrice="$1K" incomeMonth="Monthly" />
        <IncomeCard incomePrice="$500" incomeMonth="YTD" />
        <IncomeCard incomePrice="$1M" incomeMonth="All Time" />
      </div>
    </>
  );
};

export default Income;
