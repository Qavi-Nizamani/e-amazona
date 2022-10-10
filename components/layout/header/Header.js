import React from 'react';
import Link from 'next/link';
import ResponsiveNavbar from './ResponsiveNavbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="border-b border-th-primary-border bg-th-primary-header ">
      <nav className="container px-6 flex mx-auto justify-between items-center h-12 lg:h-16">
        <span>
          <Link href="/">
            <a className="text-xl">Amazona</a>
          </Link>
        </span>
        <ResponsiveNavbar />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
