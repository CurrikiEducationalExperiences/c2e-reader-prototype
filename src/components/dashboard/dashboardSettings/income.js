import React, { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import config from '../../../config/api.json';
import DropdownButton from "../../../utils/dropdownButton";

const Income = ({ datacard }) => {
  const [incomes, setIncomes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/wallet/income?userId=1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);

        return res.json();
      })
      .then(items => setIncomes(items.income))
      .catch((e) => {
        const error = 'Could not get income data';
        setError(error);
        console.log(error, e);
      });
  }, []);

  return (
    <>
      <DropdownButton btntext="MY INCOME" className=" pt-[113px] " mb />
      <div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap ">
        {error && <Alert variant='warning'>{error}</Alert>}
        {incomes.map((item, index) => (
          <div key={index} className="pt-[42px] pb-2 pl-4 w-full md:w-[282px] rounded-lg rounded-s-lg shadow-mainshadow text-gray100 font-Rubik">
            <h2 className="text-4xl pl-[6px] mb-[34px]">{item.price}</h2>
            <p className="text-lg font-medium">{item.income}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Income;
