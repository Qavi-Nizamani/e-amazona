import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="px-4 flex h-12 items-center justify-between shadow-md dark:shadow-white">
        <Link href="/">
          <a className="text-lg font-bold">amazona</a>
        </Link>
        <div className="gap-4 flex">
          <Link href="/cart">
            <a>Cart</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
