import React from 'react';

// import Navbar from "./navbar";
import Sidebar from './sidebar';

import { useLocation } from 'react-router-dom';

const Layout = ({ expand, setExpand }) => {
  const Location = useLocation();

  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="relative flex w-full h-full ">
        <Sidebar Location={Location} setOpen={setExpand} open={expand} />
      </div>
    </div>
  );
};
export default Layout;
