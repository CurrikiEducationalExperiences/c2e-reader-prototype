import React, { useState } from "react";

import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import Workspace from "./workspace";
import LicenseC2E from "./licenseC2E";

const Index = () => {
  const [openRoyalties, setOpenRoyalties] = useState(false);
  return (
    <div className="max-w-full mx-auto w-full pb-8 bg-mainbg pr-6 flex flex-col md:flex-row items-start justify-between gap-[16px] calc-function">
      {openRoyalties ? (
        <LicenseC2E />
      ) : (
        <>
          {/* left side box */}
          <LeftSide />
          {/* workspace */}
          <div className="flex flex-col items-start w-full bg-white laptop:flex-row calc-function">
            <Workspace setOpenRoyalties={setOpenRoyalties} />
            <RightSide />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
