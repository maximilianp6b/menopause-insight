import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter basename="/max-testing">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-menopause-gap" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;