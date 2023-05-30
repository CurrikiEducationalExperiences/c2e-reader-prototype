import React from "react";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
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
