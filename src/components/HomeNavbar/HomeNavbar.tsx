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
            <Link to={'/write'}>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

            </div></Link>
            <span className="text-gray-800">Write</span>
            

            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
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
