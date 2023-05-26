import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../src/components/layout";
import Dashboard from "../src/pages/index";
import Income from "./utils/income";
import MarketPlace from "./utils/marketPlace";
import ProductCard from "./utils/productCard";
import ProductCard1 from "./utils/productCard1";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/marketPlace" element={<MarketPlace />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/productCard1" element={<ProductCard1 />} />
      </Routes>
    </>
  );
};

export default App;
