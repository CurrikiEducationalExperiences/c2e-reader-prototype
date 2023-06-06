import React from 'react';

import LeftSide from './leftSide';
import RightSide from './rightSide';
import Workspace from './workspace';

const Index = () => {
  return (
    <div className="max-w-full  mx-auto mt-4 w-full pb-8 bg-mainbg pl-[187px] pr-6 flex items-start justify-between gap-[16px]  calc-function">
      {/* left side box */}
      <LeftSide />

      {/* workspace */}

      <div className="w-full flex items-start calc-function bg-white">
        <Workspace />
        <RightSide />
      </div>

      {/* right side box */}
      {/* <RightSide /> */}
    </div>
  );
};

export default Index;
