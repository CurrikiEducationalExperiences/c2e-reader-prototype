import React from "react";

import Opensidebar from "../../assets/images/open-sidebar.svg";
import Closesidebar from "../../assets/images/close-sidebar.svg";
import SideBarIcon from "../../assets/images/sidebar-icon.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ Location, expand, setExpand }) => {
  return (
    <div className="min-w-[70px] bg-white h-screen z-50 fixed top-0 left-0 px-4 py-5 transition ease-in-out delay-150">
      <div className={`"w-full h-full flex flex-col justify-start" ${!expand ? "block" : "hidden"}`}>
        <Link to="/" className="no-underline hover:underline w-full ">
          <div
            className={`${
              Location.pathname === "/" ? "link-active" : "non-active"
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px] `}
          >
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal text-sm text-[#084892] m-0">Dashboard</h4>
          </div>
        </Link>
        <Link to="/my-c2e" className="no-underline hover:underline w-full">
          <div
            className={`${
              Location.pathname === "/my-c2e" ? "link-active" : "non-active"
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px]`}
          >
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal text-sm text-[#084892] m-0">MY C2Es</h4>
          </div>
        </Link>
        <Link to="/my-marketplace" className="no-underline hover:underline w-full">
          <div
            className={`${
              Location.pathname === "/my-marketplace" ? "link-active" : "non-active"
            } w-full border-b-[1px] border-solid border-lightgrey text-center py-[20px] px-2 flex flex-col items-center gap-[3px]`}
          >
            <img src={SideBarIcon} alt="SideBarIcon" className="w-5 h-5" />
            <h4 className="font-normal text-sm text-[#084892] m-0">
              My Marketplace <br /> Listings
            </h4>
          </div>
        </Link>
      </div>

      <div onClick={() => setExpand(expand ? false : true)} className="absolute top-6 right-[-8px] z-[99] block lg:hidden ">
        <img src={expand ? Opensidebar : Closesidebar} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
