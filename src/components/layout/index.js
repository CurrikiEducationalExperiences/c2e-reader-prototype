import React from 'react';
// import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="flex w-full h-full  ">
        <Sidebar />
      </div>
    </div>
  );
};
export default Layout;
