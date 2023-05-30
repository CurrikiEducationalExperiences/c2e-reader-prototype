import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../src/components/layout';
import Dashboard from '../src/components/dashboard/dashboardSettings';
import MyC2ES from '../src/components/dashboard/myc2e';
import MyMarketplace from '../src/components/dashboard/marketplace';
import Builder from '../src/pages/builder';
import { dashboard, MyC2Es, MarketDataList } from '../src/data/dummyData';
// import { ThreeDots } from 'react-loader-spinner';

const App = () => {
  const [loading, setLoading] = useState('loading');
  const dashboardData = dashboard?.map((item) => item);

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
          <Layout />
          <Routes>
            <Route
              path="/"
              element={<Dashboard dashboardData={dashboardData} />}
            />
            <Route path="/my-c2e" element={<MyC2ES MyC2Es={MyC2Es} />} />
            <Route
              path="/my-marketplace"
              element={<MyMarketplace MarketDataList={MarketDataList} />}
            />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
