import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogPreviews from './components/BlogPreviews';
import BlogWriter from './components/BlogWriter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>
          <HeroSection />
          <BlogPreviews />
          <Footer />
        </div>} />
        <Route path="/write" element={<BlogWriter />} />
      </Routes>
    </Router>
  );
}

export default App;
