import React, { useState } from "react";
import Context from "./Context";

const States = (props) => {
  const [carouselItem, setCarouselItem] = useState(0);
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <Context.Provider
      value={{
        carouselItem,
        setCarouselItem,
        filters,
        setFilters,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        handleQuantity,
        quantity,
        setQuantity,
        size,
        setSize,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default States;
