import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./components/NavComp";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import SideComp from "./components/SideComp";
import Product from "./components/Products/Product";
import AllProducts from "./components/Products/AllProducts";

export default function App() {
  return (
    <Router>
      <div className="App  dark:bg-gray-700 dark:text-white">
      <div className="flex">
        <SideComp />
        <div className="flex-1">
          <NavComp />

          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id/show" element={<Product />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}
