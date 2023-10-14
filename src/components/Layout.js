import React from 'react';
import NavBar from './NavBarr';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
