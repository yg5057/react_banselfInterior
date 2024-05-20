import React from 'react';

import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/Main';
import Loading from './layout/Loading';

import Home from './pages/Home';
import Plan from './pages/Plan';
import SelectArea from './pages/SelectArea';

import Excel01 from './pages/Excel01'



function App() {
  return (
    <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/select-area" element={<SelectArea />} />
      <Route path="/Excel01" element={<Excel01 />} />
    </Routes>
  </MainLayout>
  );
}

export default App;
