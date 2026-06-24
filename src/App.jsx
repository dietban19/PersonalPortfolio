import React from 'react';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import WindowsMain from './pages/windows/WindowsMain';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
      {/* <Route path="/windows" element={<WindowsMain />} /> */}
    </Routes>
  );
}

export default App;
