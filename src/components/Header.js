import React from 'react';
import '../styles/Header.css';
import { FiSearch } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Mastr Blogs</h1>
      </div>
      <div className="search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </header>
  );
}

export default Header;
