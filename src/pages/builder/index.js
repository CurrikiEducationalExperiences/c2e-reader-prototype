import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import Workspace from './workspace';
import LicenseC2E from './licenseC2E';
import gif from '../../assets/images/c3e.png';
import { ProgressBar } from 'react-bootstrap';

const Index = () => {
  const [openRoyalties, setOpenRoyalties] = useState(false);
  const [activeC2E, setActiveC2E] = useState(false);
  const [progressBarValue, setprogressBarValue] = useState(0);

  const uploadC2E = () => {
    var counter = 0;
    const myInterval = setInterval(() => {
      setprogressBarValue(counter++);
      if (counter === 101) {
        clearInterval(myInterval);
        setActiveC2E(true);
        setprogressBarValue(0);
      }
    }, [80]);
  };

  return (
    <div className="max-w-full mx-auto w-full pb-8 bg-mainbg  flex flex-col md:flex-row items-start justify-between gap-[16px] calc-function">
      {openRoyalties ? (
        <LicenseC2E setOpenRoyalties={setOpenRoyalties} />
      ) : (
        <>
          <div className="flex flex-col items-start w-full bg-white laptop:flex-row calc-function">
            <LeftSide uploadC2E={uploadC2E} />
            <div className="pt-[20px] pr-[20px] w-full">
              <div className="flex justify-between">
                <div>
                  <h1 className=" flex items-center gap-[10px] m-[0] text-primarycolor bolder text-[28px]">
                    C2E Builder
                    {activeC2E && (
                      <button className="w-fit h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789]  rounded  font-normal text-sm">
                        C2e-12345678
                      </button>
                    )}
                  </h1>
                  <p>Create your new C2Es here.</p>
                </div>

                {activeC2E && (
                  <div className="flex gap-[10px]">
                    <Link className="no-underline" to="">
                      <button onClick={()=>{
                        setOpenRoyalties(true)
                      }} className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#f5bf39]  text-[white] bold">
                        License Settings
                      </button>
                    </Link>
                    <Link className="no-underline" to="/builder">
                      <button className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#fff] border solid border-[#084892]  text-primary-color bold">
                        Preview C2E
                      </button>
                    </Link>

                    <Link className="no-underline" to="/builder">
                      <button className=" mb-[15px] w-[150px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#084892]  text-[white] bold">
                        Save C2E
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              {!!progressBarValue && (
                <div className="w-full h-auto p-[12px]  border border-solid border-[#aaaaaa] shadow-boxShadowMd mb-[16px]">
                  <p className="mb-1 text-sm font-normal text-black">
                    Activity 1
                  </p>
                  <p className="mb-1 text-xs font-semibold text-black">
                    Uploading
                  </p>

                  <div className="w-full">
                    <ProgressBar
                      striped
                      now={progressBarValue}
                      label={`${progressBarValue}%`}
                    />
                  </div>
                </div>
              )}
              {activeC2E && (
                <div className="flex">
                  <Workspace setOpenRoyalties={setOpenRoyalties} />
                </div>
              )}
              {activeC2E && (
                <div className="h-full bg-[#fff]  fixed top-[0] right-[0] shadow-mainshadow">
                  <RightSide />
                </div>
              )}
              {!activeC2E && (
                <div className="flex flex-col pt-[100px] items-center justify-center w-full h-full">
                  <img src={gif} alt="" className="w-[250px]" />
                  <p className="pt-[10px] bold">
                    Start creating your new C2E by selecting from source.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
