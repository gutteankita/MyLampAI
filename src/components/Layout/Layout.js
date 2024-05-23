// src/components/Layout/Layout.js
import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
