import React, { useState } from "react";
import "./App.css";
import Header from "./Component/header/Navbar";
import ProductData from "./storage/product.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Component/footer/Footer";
import HeroSection from "./Component/header/HeroSection";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";
import ProductView from "./Component/Product/ProductView";
import Success from "./Component/Success";
import About from "./Component/about/About";

// console.log(ProductData);

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchHandler = (productName) => {
    setSearchValue(productName);
  };
  const newData = ProductData.filter((prod) => {
    if (searchValue === "") {
      return prod;
    } else {
      if (prod.name.toLowerCase().includes(searchValue.toLowerCase()))
        return prod;
    }
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={<HeroSection onSearch={onSearchHandler} />}
        />
      </Routes>
      <Routes>
        <Route path="/home" element={<Product product={newData} />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
