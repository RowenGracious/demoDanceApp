import React from 'react';
import Header from '../Header/Header';
import Menu from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';

//Home page which is not protected layout 
const LandingLayout = ({ menuItems, children }) => (
  <div>
    <Menu menuItems={menuItems} />
    <div className="mx-auto grid gap-4 md:max-w-4xl">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default LandingLayout;
