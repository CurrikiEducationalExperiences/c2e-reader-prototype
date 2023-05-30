import React from 'react';
import C2ELogo from '../../assets/images/c2e.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-w-[70px] bg-white h-screen fixed top-0 left-0 px-4 py-3">
      <div className="flex flex-col justify-start w-full h-full gap-8">
        <img
          src={C2ELogo}
          alt="c2e logo"
          className="object-contain w-full h-8 mb-4"
        />

        <Link to="/" className="mb-3 no-underline">
          <div className="w-full border-b-[1px] border-solid border-[#084892] text-center pb-2">
            <h4 className="font-medium text-sm text-[#084892]">Dashboard</h4>
          </div>
        </Link>
        <Link to="/my-c2e" className="mb-3 no-underline">
          <div className="w-full border-b-[1px] border-solid border-[#084892] text-center  pb-2">
            <h4 className="font-medium text-sm text-[#084892]">MY C2Es</h4>
          </div>
        </Link>
        <Link to="/my-marketplace" className="mb-3 no-underline">
          <div className="w-full border-b-[1px] border-solid border-[#084892] text-center  pb-2">
            <h4 className="font-medium text-sm text-[#084892]">
              My Marketplace <br /> Listings
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
