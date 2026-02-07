import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#FFDCF3]">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#4F348D]"></div>
      <p className="text-[#4F348D] font-medium">Yükleniyor...</p>
    </div>
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<route.element />} 
          />
        ))}
      </Routes>
    </Suspense>
  );
};