import React from 'react';
import '../../styles/AdminPanel/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPen, FaPhotoVideo, FaUsers, FaCog } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>AdminPanel</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" activeClassName="active">
              <FaHome className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/posts" activeClassName="active">
              <FaPen className="icon" />
              <span>Posts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/pages" activeClassName="active">
              <FaFileAlt className="icon" />
              <span>Pages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/media" activeClassName="active">
              <FaPhotoVideo className="icon" />
              <span>Media</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/team" activeClassName="active">
              <FaUsers className="icon" />
              <span>Team</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-settings">
        <NavLink to="/admin/settings" activeClassName="active">
          <FaCog className="icon" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
