import React from 'react';
import Items from "./Items";

        
export default function SideComp() {
  return (
    <div className="App min-h-screen flex flex-row  border-r-2 ">
      <div className="flex flex-col w-56 overflow-hidden md:w-72">
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <img src="./logo.png" className="mr-3 h-8" alt="Logo" />
        </div>
        <ul className="flex flex-col py-4">
          <Items link="#" icon={<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          </span>} name="Categories"/> 
        
          <Items link="#" icon={<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
          </svg>
          </span>} name="Products"/>
        </ul>
      </div>
    </div>
  );
}
