import Header from "./components/Header";
import Footer from "components/Footer";
import Cart from "pages/Cart";
import Products from "pages/Products";
import React from "react";
import { Route, Routes } from "react-router-dom";

// import AdminPanel from "pages/AdminPanel";

const App: React.FC = () => {
  return (
    <div className="grid gap-[2.5rem] max-w-[87.5rem]">
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
