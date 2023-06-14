import React from 'react';

import Opensidebar from '../../assets/images/open-sidebar.svg';
import Closesidebar from '../../assets/images/close-sidebar.svg';
import SideBarIcon from '../../assets/images/sidebar-icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ Location, open, setOpen }) => {

  return (
    <div className={` ${open ? 'w-[140px]' : 'w-[20px]' }  bg-white h-screen z-50 fixed top-0 left-0  py-5 transition ease-in-out delay-150`}>
      <div onClick={()=>{setOpen(!open)}} className="absolute top-[10px] right-[-16px] cursor-pointer w-[30px] h-[30px] bg-white border solid border-[#ccc] rounded-[50%] flex justify-center items-center">
      <img
          src={open ? Opensidebar : Closesidebar}
          alt=""
          className="cursor-pointer"
        />
      </div>
      <div
        className={`w-full h-full flex flex-col justify-start`}
      >
        {open && <>
        <Link to="/" className="w-full no-underline hover:underline ">
          <div
            className={`${
              Location.pathname === '/' ? 'link-active' : 'non-active'
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px] `}
          >
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal text-sm text-[#084892] m-0">
              Dashboard
            </h4>
          </div>
        </Link>
        <Link to="/my-c2e" className="w-full no-underline hover:underline">
          <div
            className={`${
              Location.pathname === '/my-c2e' ? 'link-active' : 'non-active'
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px]`}
          >
            <img src={MyC2E} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className={`"font-normal text-sm text-[#084892] m-0" ${!expand ? "block" : "hidden"}`}>MY C2Es</h4>
          </div>
        </Link>
        <Link
          to="/my-marketplace"
          className="w-full no-underline hover:underline"
        >
          <div
            className={`${
              Location.pathname === '/my-marketplace'
                ? 'link-active'
                : 'non-active'
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px]`}
          >
            <img src={Listings} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className={`"font-normal text-sm text-[#084892] m-0" ${!expand ? "block" : "hidden"}`}>
              My Marketplace <br /> Listings
            </h4>
          </div>
        </Link>
        <Link
          to="/builder"
          className="w-full no-underline hover:underline"
        >
          <div
            className={`${
              Location.pathname === '/my-marketplace'
                ? 'link-active'
                : 'non-active'
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px]`}
          >
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal text-sm text-[#084892] m-0">
              C2E Builder
            </h4>
          </div>
        </Link>
        </>}
      </div>


    </div>
  );
};

export default Sidebar;
