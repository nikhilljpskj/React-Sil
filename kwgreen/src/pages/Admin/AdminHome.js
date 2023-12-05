import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <h2>Welcome to Admin Home</h2>
      <p>This is the admin dashboard.</p>

      <div className="admin-actions">
        <Link to="/adduser">
          <button className="add-user-button">Add User</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
