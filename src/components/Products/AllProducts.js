import React, { useState, useEffect } from "react";
import productService from "../../productService";
import ProductCard from "./ProductCard";
import MyButton from "../MyButton";
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

              <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
        {product.category}
        <button type="button" class="inline-flex items-end p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span class="sr-only">Remove badge</span>
        </button>
        </span>
              <ProductCard key={product.id} {...product} />

            <MyButton name={<Link to={`/products/${product.id}/show`}>view</Link>
} />
            </div>
          ))}
        </div>
      </div>
  );
}

export default AllProducts;
