import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../authService';

function Auth() {
  const isAuthenticated = authService.isAuthenticated();
  const userName = authService.getUserName();
  const at = authService.getUsertime();

  if (isAuthenticated) {
    return (
      <>
        <div className="h-10 w-10 relative mt-2 ">
          <span className="relative inline-block  dark:bg-gray-700  dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ml-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </span>
          <button type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-40 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-2  dark:bg-gray-700  dark:text-white">
          <div className="text-sm font-medium text-secondary-500">{userName}</div>
          <div className="text-xs text-secondary-400">Joined {at}</div>
        </div>

        <div id="userDropdown" className="z-10 hidden bg-white rounded-lg shadow w-44 dark:bg-gray-700  dark:text-white">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 list-none" aria-labelledby="avatarButton">
            <li>
            <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-blue-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-red-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
              <span className="text-sm font-medium">Logout</span>
            </Link>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Link className="nav-link text-secondary" to="/register">Register</Link>
        <Link className="nav-link text-secondary" to="/login">Login</Link>
      </div>
    );
  }
}

export default Auth;
