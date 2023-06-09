import React, { useState } from 'react';

import LeftSide from './leftSide';
import RightSide from './rightSide';
import Workspace from './workspace';
import LicenseC2E from './licenseC2E';

const Index = () => {
  const [openRoyalties, setOpenRoyalties] = useState(false);
  return (
    <div className="max-w-full  mx-auto mt-4 w-full pb-8 bg-mainbg pl-[187px] pr-6 flex items-start justify-between gap-[16px]  calc-function">
      {openRoyalties ? (
        <LicenseC2E />
      ) : (
        <>
          {/* left side box */}
          <LeftSide />
          {/* workspace */}
          <div className="w-full flex items-start calc-function bg-white">
            <Workspace setOpenRoyalties={setOpenRoyalties} />
            <RightSide />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
