import React from 'react';
import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.cart.totalCount);

  return (
    <div className="hidden items-center lg:flex">
      <ul className="gap-4 flex justify-center align-middle items-center">
        <li className="h-16 bg-th-background p-2 flex items-center">
          <Link href="/cart">
            <a className="flex">
              <span>Cart</span>
              {count > 0 && <span className="ml-2 primary-badge">{count}</span>}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
