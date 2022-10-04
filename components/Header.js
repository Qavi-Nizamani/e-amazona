import React from 'react';
import Link from 'next/link';
import ThemeChanger from './ThemeChanger';

const Header = () => {
  return (
    <header className="border-b border-th-primary-border font-bold bg-th-primary-header">
      <nav className="container px-6 flex mx-auto">
        <div className="flex pr-6 justify-between h-16 items-center flex-1">
          <Link href="/">
            <a className="text-xl">Amazona</a>
          </Link>
          <div className="gap-4 flex">
            <Link href="/cart">
              <a>Cart</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </div>
        <ThemeChanger />
      </nav>
    </header>
  );
};

export default Header;
