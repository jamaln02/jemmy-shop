import React from "react";
import Products from "./Products";

const MainProducts = ({ products, addToCart }) => {
  return (
    <div className=" flex flex-wrap justify-evenly items-end gap-4 mx-[5rem] ">
      {products.map((product, ind) => (
        <Products key={ind} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default MainProducts;
