import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../src/components/layout";
import Dashboard from "../src/pages/index";
import Builder from "../src/pages/builder";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </>
  );
};

export default App;
