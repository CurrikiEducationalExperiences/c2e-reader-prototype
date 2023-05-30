import React from 'react';
import C2ELogo from '../../assets/images/c2e.svg';
import SideBarIcon from '../../assets/images/sidebar-icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-w-[70px] bg-white h-screen z-50 fixed top-0 left-0 px-4 py-3">
      <img
        src={C2ELogo}
        alt="c2e logo"
        className="w-full h-8 object-contain mb-6"
      />
      <div className="w-full h-full flex flex-col justify-start gap-4">
        <Link to="/" className="no-underline  w-full ">
          <div className="w-full border-b-[1px] border-solid border-[#084892] hover:bg-[#f1f1f1] text-center p-2 flex flex-col items-center gap-2 ">
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal  text-sm text-[#084892] m-0 ">
              Dashboard
            </h4>
          </div>
        </Link>
        <Link to="/my-c2e" className="no-underline  w-full">
          <div className="w-full border-b-[1px] border-solid border-[#084892] hover:bg-[#f1f1f1] text-center  p-2 flex flex-col items-center gap-2">
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal  text-sm text-[#084892] m-0">MY C2Es</h4>
          </div>
        </Link>
        <Link to="/my-marketplace" className="no-underline  w-full">
          <div className="w-full border-b-[1px] border-solid border-[#084892] hover:bg-[#f1f1f1] text-center  p-2 flex flex-col items-center gap-2">
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal  text-sm text-[#084892] m-0">
              My <br /> Marketplace
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
