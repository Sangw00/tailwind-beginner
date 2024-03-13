import React from 'react';

export default function SideComp() {
   


  return (
    
  
    <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-white  overflow-hidden">
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <img src="./logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
              <span className="text-sm font-medium">Music</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
              <span className="text-sm font-medium">Drink</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
              <span className="text-sm font-medium">Shopping</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
              <span className="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-cyan-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="ml-auto mr-6 text-sm bg-blue-100 rounded-full px-3 py-px text-blue-500">5</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
