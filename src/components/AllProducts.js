import React, { useState, useEffect } from "react";
import productService from "../productService";
import ProductCard from "./ProductCard";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";
function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await productService.getAllProducts();
        setProducts(resp.data.products);
       
      } catch (error) {
        console.error("Failed to fetch products:", error);
        alert("Failed to fetch products.");
      }
    };

    fetchProducts();
  });

  return (
    
      <div className="bg-white  dark:bg-gray-700 dark:border-white dark:text-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div>
              <ProductCard key={product.id} {...product} />
            <MyButton name={<Link to="/product/:id">view</Link>} />
            </div>
          ))}
        </div>
      </div>
  );
}

export default AllProducts;
