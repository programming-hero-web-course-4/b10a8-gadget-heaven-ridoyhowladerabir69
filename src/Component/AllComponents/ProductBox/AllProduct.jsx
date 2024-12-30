import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProduct = ({ selectedCategory }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        setFilteredProducts(data); // Default to all products initially
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All Product") {
      setFilteredProducts(allProduct);
    } else {
      const filtered = allProduct.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, allProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <SingleProduct key={product.product_id} product={product}></SingleProduct>
        ))
      ) : (
        <p className="text-center text-lg">No products found for this category.</p>
      )}
    </div>
  );
};

export default AllProduct;
