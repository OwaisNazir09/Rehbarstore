import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import TopwearPage from './components/TopwearPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/topwear" element={<TopwearPage />} />
      </Routes>
    </Router>
  );
};

export default App;
