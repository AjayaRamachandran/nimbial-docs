import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Wrapper to extract param and pass into HomePage
function HomePageWrapper() {
  const { page } = useParams();
  return <HomePage page={page} id={null}/>;
}

// Wrapper to extract param and pass into HomePage
function HomePageWrapperFull() {
  const { page, id } = useParams();
  return <HomePage page={page} id={id}/>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:page" element={<HomePageWrapper />} />
        <Route path="/:page/:id" element={<HomePageWrapperFull />} />
      </Routes>
    </Router>
  );
}

export default App;
