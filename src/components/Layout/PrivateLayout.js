import React from 'react';
import Menu from '../MenuBar/MenuBar';

// Protected page layout 
const PrivateLayout = ({ menuItems, children }) => (
  <div className="dashbackground">
    <Menu menuItems={menuItems} />
    <div className="mx-auto mt-8 grid gap-4 md:max-w-4xl">
      {children}
    </div>
  </div>
);

export default PrivateLayout;
