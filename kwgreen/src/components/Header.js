

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/home" className="header-link">Home</Link>
      <Link to="/adduser" className="header-link">Add User</Link>
      <Link to="/logout" className="header-link">Logout</Link>
    </div>
  );
};

export default Header;
