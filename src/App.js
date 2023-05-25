import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../src/components/layout";
import Dashboard from "../src/pages/index";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
