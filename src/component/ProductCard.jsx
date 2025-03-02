import React from "react";
import ProductItem from "./ProductItem";
import Product from "../constants/product";

function ProductCard() {
  return (
    <div>
      {Product.map((item) => {
        return <ProductItem key={item.id} productData={item} />;
      })}
    </div>
  );
}

export default ProductCard;
