import React from "react";

// import Navbar from "./navbar";
import Sidebar from "./sidebar";

import { useLocation } from "react-router-dom";

const Layout = () => {
  const Location = useLocation();

  const [expand, setExpand] = React.useState(false);

  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="flex w-full h-full relative ">
        <Sidebar Location={Location} setExpand={setExpand} expand={expand} />
      </div>
    </div>
  );
};
export default Layout;
