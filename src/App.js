import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/Main';
import LandingMain from './pages/LandingMain';
import Home from './pages/Home';
import Plan from './pages/Plan';
import SelectArea from './pages/SelectArea';


function App() {
  return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/select-area" element={<SelectArea />} />
        </Routes>
      </MainLayout>
  );
}

export default App;
