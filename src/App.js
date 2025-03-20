import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conversations from "./components/Conversations.jsx";
import LandingPage from "./components/LandingPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/conversations" element={<Conversations />} />
      </Routes>
    </Router>
  );
};

export default App;
