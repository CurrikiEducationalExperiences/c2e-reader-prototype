import React from 'react';

import LeftSide from './leftSide';
import RightSide from './rightSide';

const Index = () => {
  return (
    <div className="max-w-[1440px] h-full mx-auto mt-4 px-6 flex items-center justify-between gap-4 ">
      {/* left side box */}
      <LeftSide />

      {/* right side box */}
      <RightSide />
    </div>
  );
};

export default Index;
