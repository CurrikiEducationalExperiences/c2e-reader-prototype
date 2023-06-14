import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Workspace from './workspace';
import LicenseC2E from './licenseC2E';

const Index = () => {
  const [openRoyalties, setOpenRoyalties] = useState(false);
  return (
    <div className="max-w-full mx-auto w-full pb-8 bg-mainbg  flex flex-col md:flex-row items-start justify-between gap-[16px] calc-function">
      {openRoyalties ? (
        <LicenseC2E />
      ) : (
        <>
          <div className="flex flex-col items-start w-full bg-white laptop:flex-row calc-function">
            <LeftSide />
            <div className="pt-[20px] pr-[20px]">
              <div className="flex justify-between">
                <div>
                  <h1 className=" flex items-center gap-[10px] m-[0] text-primarycolor bolder text-[28px]">
                    C2E Builder
                    <button className="w-fit h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789]  rounded  font-normal text-sm">
                      C2e-12345678
                    </button>
                  </h1>
                  <p>Create your new C2Es here.</p>
                </div>
                <div className="flex gap-[10px]">
                  <Link className="no-underline" to="/builder">
                    <button className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#f5bf39]  text-[white] bold">
                      License Settings
                    </button>
                  </Link>
                  <Link className="no-underline" to="/builder">
                    <button className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#fff] border solid border-[blue]  text-primary-color bold">
                      Preview C2E
                    </button>
                  </Link>

                  <Link className="no-underline" to="/builder">
                    <button className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-primary  text-[white] bold">
                      Save C2E
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <Workspace setOpenRoyalties={setOpenRoyalties} />
              </div>
              <div className="h-full bg-[#fff] p-[20px] fixed top-[0] right-[0] shadow-mainshadow">
                <h1 className=" flex items-center gap-[10px] m-[0] text-primarycolor bolder text-[28px]">
                  C2E Settings
                </h1>
                <p>Manage your C2Es setting here.</p>
                <RightSide />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
