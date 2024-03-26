import React, { useState } from 'react';
import Auth from './Auth/Auth';

export default function NavComp() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function toggleTheme() {
    setIsDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="App flex-1">
      <nav className="w-full bg-white border-b border-gray-200 dark:bg-gray-700 dark:text-white group-hover:bg-opacity-0">
        <div className="flex flex-row justify-start px-4 space-y-6 font-[sans-serif] text-[#333] gap-4">
          <div className="flex items-center justify-center gap-10 mt-3 pb-2">
            <input type='text' placeholder='' className="py-2.5 text-base ml-10 mr-0 dark:bg-gray-700 dark:text-white rounded-md bg-white border border-gray-400 w-80 hover:border-yellow-50" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-grey-100 dark:bg-gray-700 dark:text-white ml-">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            <Auth />
          </div>

          <button
            title="Toggle Theme"
            onClick={toggleTheme}
            className="ml-52 w-18 h-8 rounded-full p-1 bg-white dark:bg-gray-900 relative transition-colors duration-500 ease-in focus:outline-none focus:ring-2 dark:focus:ring-sky-50 focus:border-transparent"
          >
            <div
              id="toggle"
              className="rounded-full w-6 h-6 bg-yellow-200 dark:bg-blue-400 dark:text-white relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
