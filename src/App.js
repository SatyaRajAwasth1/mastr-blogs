import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogPreviews from './components/BlogPreviews';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BlogPreviews />
      <Footer />
    </div>
  );
}

export default App;
