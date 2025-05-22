import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import MainFeature from "./components/MainFeature"; // Replace with your actual main component path
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainFeature />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;