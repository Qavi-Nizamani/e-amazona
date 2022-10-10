import Header from './header/Header';
import Footer from './footer/Footer';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between bg-th-background">
      <Header />
      <main className="container m-auto px-4 my-4">{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
