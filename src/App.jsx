import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Wrapper to extract param and pass into HomePage
function HomePageWrapper() {
  const { page } = useParams();
  return <HomePage page={page} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:page" element={<HomePageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
