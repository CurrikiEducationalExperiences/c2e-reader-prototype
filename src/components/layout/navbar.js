import React from 'react';

import C2ELogo from '../../assets/images/c2e.svg';
import serverLogo from '../../assets/images/server.svg';

const Navbar = () => {
  return (
    <div className=" w-full bg-white shadow-mainshadow py-[6px]  ">
      <div className="flex items-center justify-between max-w-[1440px] px-6 m-auto ">
        <img src={C2ELogo} alt="c2e logo" />
        <div className=" flex flex-col items-center cursor-pointer ">
          <img src={serverLogo} alt="c2e logo" />
          <p className=" text-sm leading-5 text-center font-OpenSans font-normal m-0 text-primarycolor ">
            My Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
