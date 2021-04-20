import React from 'react';
import Header from '../Header/Header';
import Menu from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

const PublicLayout = ({ children }) => (
  <div className="mx-auto grid gap-4">
    {children}
  </div>
);

export default PublicLayout;
