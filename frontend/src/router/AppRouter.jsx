import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Profile from '../pages/Profile';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<div className="pt-40 text-center text-3xl">Sayfa Bulunamadı (404)</div>} />
    </Routes>
  );
};

export default AppRouter;