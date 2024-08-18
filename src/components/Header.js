// src/components/Header.js

import React from 'react';

const Header = ({ onAddWidget }) => {
  return (
    <div className="header">
      <h1>CNAPP Dashboard</h1>
      <input type="text" placeholder="Search anything..." />
      <button onClick={onAddWidget}>+ Add Widget</button>
    </div>
  );
};

export default Header;
