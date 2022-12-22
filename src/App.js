import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// pages
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { fetchRockets } from './Redux/Rockets/Rockets';

// Stylesheet
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets()).unwrap();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
