import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuToggle = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-200">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              className={`h-3 sm:h-8 w-auto`}
              src="/images/BLOGSCRIBE.png"
              alt="Your Company"
            />
          </div>

          {/* Search Bar (Visible on mobile and desktop) */}
          {/* Show the search bar in the navbar for small devices and hide it for larger devices */}
          <div className={`relative flex-grow ${isMobileMenuOpen ? 'block' : 'hidden'} sm:block`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17zM18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-54 border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search..."
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></button>
          </div>

          {/* Write and Notifications Buttons */}
          
          <div className="flex items-center space-x-4 sm:space-x-2 sm:ml-6 sm:static sm:inset-auto sm:pr-0">
          <Link to="/create-subscription">
            <button className='ml-4 text-red-600'>Subscribe</button>
          </Link>
            <Link to={'/write'}>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

            </div></Link>
            {/* <span className="text-gray-800">Write</span> */}
            

            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>

            </button>

            {/* User Profile Button */}
            <div className={`relative ${isMenuOpen ? "ml-3" : ""}`}>
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-haspopup="true"
                onClick={handleMenuToggle}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </button>
              {/* User Menu Dropdown */}
              {isMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  z-0
                >
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" z-0 id="user-menu-item-0">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" z-0 id="user-menu-item-1">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" z-0 id="user-menu-item-2">
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>

      {/* Search Bar (Visible on larger devices) */}
      <div className='hidden'>
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* ... (search icon path) ... */}
            </svg>
          </div>
          <input
            type="text"
            className="block w-64 border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></button>
        </div>
      </div>

      {/* Search Bar (Visible on small devices) */}
      {/* Show the search bar below the navbar on small devices */}
      <div className='w-full sm:hidden' >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></button>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
