import React from 'react';
import '../../styles/AdminPanel/Topbar.css';
import { IoNotificationsOutline } from "react-icons/io5";
import profileImage from '../../assets/images/hero.jpg';

function Topbar() {
  return (
    <div className="topbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <IoNotificationsOutline className="icon" />
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
