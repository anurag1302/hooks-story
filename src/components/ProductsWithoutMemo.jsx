import React, { useState, useEffect } from "react";
import products from "../data/large_product_list.json";

const ProductsWithoutMemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("price");
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    const start = performance.now();

    // Simulate a re-render effect
    setTimeout(() => {
      const end = performance.now();
      setRenderTime(end - start);
    }, 0);
  }, [searchTerm, sortKey]);

  // Filter the products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered products
  const sortedProducts = filteredProducts.sort(
    (a, b) => a[sortKey] - b[sortKey]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortKey("price")}>Sort by Price</button>
      <button onClick={() => setSortKey("name")}>Sort by Name</button>

      <h3>Render Time: {renderTime.toFixed(2)} ms</h3>

      <ul>
        {sortedProducts.slice(0, 10000).map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsWithoutMemo;
