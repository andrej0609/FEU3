import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './komponentai/Navigation';
import Home from './komponentai/Home';
import Add from './komponentai/Add';
import './App.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
};

export default App;