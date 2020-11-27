import React, { useState, useEffect } from "react";
import getProducts from "../../../requests/product/getProducts";
import Products from "../Products";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const productsRes = await getProducts();
      setProducts(productsRes);
    } catch (ex) {
      alert("products not found");
    }
  }, []);

  const props = {
    products
  };

  return <Products {...props} />;
};

export default ProductsContainer;
