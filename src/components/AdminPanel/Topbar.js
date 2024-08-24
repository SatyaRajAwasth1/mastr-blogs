// src/components/AdminPanel/Topbar.js
import React from 'react';
import '../../styles/AdminPanel/Topbar.css';
import { FaBell } from 'react-icons/fa';
import profileImage from '../../assets/images/hero.jpg'

function Topbar() {
  return (
    <div className="topbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <FaBell className="icon" />
        <div className="profile-menu">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div className="dropdown">
            <a href="/profile">Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
