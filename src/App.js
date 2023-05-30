import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../src/components/layout";
import Dashboard from "../src/pages/index";
import Builder from "../src/pages/builder";

import { ThreeDots } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState("loading");

  useEffect(() => {
    if (loading) {
      window.setTimeout(() => {
        setLoading("loaded");
      }, 2000);
    } else {
      setLoading("loading");
    }
  }, []);

  return (
    <>
      {loading === "loading" ? (
        <div className="w-full h-[calc(100vh-44px)] flex justify-center items-center">
          <ThreeDots height="80" width="80" radius="9" color="#084892" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
        </div>
      ) : (
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
