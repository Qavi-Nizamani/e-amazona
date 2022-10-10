import { useState } from 'react';
import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const ResponsiveNavbar = () => {
  const count = useSelector((state) => state.cart.count);
  const [toggleDisplay, setToggleDisplay] = useState('hidden');

  const toggleNavbarHandler = () => {
    setToggleDisplay(toggleDisplay === 'hidden' ? 'flex' : 'hidden');
  };

  return (
    <>
      {/* Responsive navbar start */}
      <button
        type="button"
        className="inline-flex items-center p-1 ml-3 text-sm rounded-lg lg:hidden hover:bg-th-primary-light focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggleNavbarHandler}
      >
        {/* <span className="sr-only">Open main menu</span> */}
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`bg-th-primary-header absolute h-fit top-12 left-0 z-10 ${toggleDisplay} flex-col lg:hidden border-th-primary-border`}
      >
        <ul className="gap-4 flex flex-col w-screen h-full justify-around items-center p-4">
          <li className="bg-th-background p-2 flex items-center">
            <Link href="/cart">
              <a className="flex ">
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
      {/* Responsive navbar end */}
    </>
  );
};

export default ResponsiveNavbar;
