import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainFeature from "./components/MainFeature"; // Replace with your actual main component path
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainFeature />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;