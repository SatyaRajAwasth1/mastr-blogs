import React from 'react';
import Sidebar from '../components/AdminPanel/Sidebar';
import Topbar from '../components/AdminPanel/Topbar';
import AddPost from '../components/AdminPanel/AddPost';

function AdminDashboard() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <AddPost />
    </div>
  );
}

export default AdminDashboard;
