import React from 'react';
// pages
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
// Stylesheet
import './App.css';

function App() {
  return (
    <>
      <Rockets />
      <Missions />
      <Profile />
    </>
  );
}

export default App;
