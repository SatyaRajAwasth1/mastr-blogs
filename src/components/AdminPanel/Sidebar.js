import React from 'react';
import '../../styles/AdminPanel/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { HiOutlineDocumentDuplicate, HiOutlineUserGroup } from "react-icons/hi";
import { PiHouseLineBold, PiImageBold } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import logo from '../../assets/images/MaStR.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Admin Panel" className="logo-img" />
        <span className="logo-name">Mastr Blogs</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" activeClassName="active">
              <PiHouseLineBold className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/posts" activeClassName="active">
              <CgFileDocument className="icon" />
              <span>Posts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/pages" activeClassName="active">
              <HiOutlineDocumentDuplicate className="icon" />
              <span>Pages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/media" activeClassName="active">
              <PiImageBold className="icon" />
              <span>Media</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/team" activeClassName="active">
              <HiOutlineUserGroup className="icon" />
              <span>Team</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-settings">
        <NavLink to="/admin/settings" activeClassName="active">
          <FiSettings className="icon" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
