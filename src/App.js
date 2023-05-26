import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../src/components/layout';
import Dashboard from '../src/pages/index';
import Income from './utils/income';
import MarketPlace from './utils/marketPlace';
import Builder from '../src/pages/builder';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/marketPlace" element={<MarketPlace />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </>
  );
};

export default App;
