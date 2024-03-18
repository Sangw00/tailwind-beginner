import React from 'react'; import Auth from './Auth';

export default function NavComp() {
  return (
    <div className="flex-1">
      <nav className="z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row justify-start px-4 space-y-6 font-[sans-serif] text-[#333] gap-4">
          <div className="flex items-center justify-center gap-10 mt-3 pb-2">
            <input type='text' placeholder='' className="py-2.5 text-base m-2 rounded-md bg-white border border-gray-400 w-80 hover:border-blue-50" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-grey-100">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
        <Auth/>
          </div>
        </div>
      </nav>
    </div>
  );
}
