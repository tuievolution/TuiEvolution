// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components'; // components içindeki index.js'den gelir

// src/App.jsx
const Main = lazy(() => import('./pages/Home').then(m => ({ default: m.Main })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const AboutUs = lazy(() => import('./pages/AboutUs').then(m => ({ default: m.AboutUs })));
const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));

// Alt sayfalar için (Eğer index.js üzerinden gelmiyorsa direkt dosya yoluyla)
const EvrimAluc = lazy(() => import('./pages/AboutUs/EvrimAluc').then(module => ({ default: module.EvrimAluc })));
const TuanaAkyildiz = lazy(() => import('./pages/AboutUs/TuanaAkyildiz').then(module => ({ default: module.TuanaAkyildiz })));

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#FFDCF3]">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#4F348D]"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FFDCF3] text-[#0D2D31]">
        <Navbar />
        <main className="container mx-auto px-6 pt-24 pb-12">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us/evrim-aluc" element={<EvrimAluc />} />
              <Route path="/about-us/tuana-akyildiz" element={<TuanaAkyildiz />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;