import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../src/components/layout';
import Dashboard from '../src/components/dashboard/dashboardSettings';
import MyC2ES from '../src/components/dashboard/myc2e';
import MyMarketplace from '../src/components/dashboard/marketplace';
import Builder from '../src/pages/builder';
// import { ThreeDots } from 'react-loader-spinner';

const App = () => {
  const [loading, setLoading] = useState('loading');
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    if (loading) {
      window.setTimeout(() => {
        setLoading('loaded');
      }, 2000);
    } else {
      setLoading('loading');
    }
  }, []);

  return (
    <>
      {loading === 'loading' ? (
        <div className="w-full h-[calc(100vh-44px)] flex justify-center items-center">
          {/* <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#084892"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /> */}
        </div>
      ) : (
        <>
          <Layout expand={expand} setExpand={setExpand} />
          <div
            className={`${
              expand ? 'pl-[86px] md:pl-[164px]' : 'pl-[36px] md:pl-[44px]'
            } pr-4 md:pr-6 mt-[30px]`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/my-c2e" element={<MyC2ES />} />
              <Route path="/my-marketplace" element={<MyMarketplace />} />
              <Route path="/builder" element={<Builder />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default App;
