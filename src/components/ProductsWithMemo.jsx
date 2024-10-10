import React, { useState, useMemo, useEffect } from "react";
import products from "../data/large_product_list.json";

const ProductsWithMemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("price");
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    const start = performance.now();

    setTimeout(() => {
      const end = performance.now();
      setRenderTime(end - start);
    }, 0);
  }, [searchTerm, sortKey]);

  // Memoized filter operation
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Memoized sort operation
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => a[sortKey] - b[sortKey]);
  }, [filteredProducts, sortKey]);

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

export default ProductsWithMemo;
