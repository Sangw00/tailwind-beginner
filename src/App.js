import React from "react";
import NavComp from "./components/NavComp";
import SideComp from "./components/SideComp";
import "./App.css"; // Import CSS file

export default function App() {
  return (


<div className=" App flex">
      
      <SideComp />
      
      <NavComp />
      <div id="worldmap" className="w-full" style="min-height: 18rem"></div>
    </div>
  );
}
