import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./components/NavComp";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SideComp from "./components/SideComp";

import "./App.css"; // Import CSS file
import AllProducts from "./components/AllProducts";

export default function App() {
  return (
    <Router>
      <div className="App ">
      <div className="flex">
        <SideComp />
        <div className="flex-1">
          <NavComp />

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            {/* You may add more routes here */}
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}
