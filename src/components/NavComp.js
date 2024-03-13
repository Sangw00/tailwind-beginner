import React from 'react';

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

            <div className="h-10 w-10 relative mt-2">
              <span className="relative inline-block">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ml-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </span>
                <button type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-40 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></button>
            </div>

            <div className="mt-2">
              <div className="text-sm font-medium text-secondary-500">Steven Jobs</div>
              <div className="text-xs text-secondary-400">Joined in April 1976</div>
            </div>
          </div>
          <div id="userDropdown" className="z-10 hidden bg-white rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 list-none" aria-labelledby="avatarButton">
              <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-blue-500">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-red-500">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                  <span className="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

