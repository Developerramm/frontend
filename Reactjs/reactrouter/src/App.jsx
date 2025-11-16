import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Phone from "./Phone";
import Laptop from "./Laptop";

const App = () => {
  return (
    <div>
      <h2>React router dom tutorial below </h2>
      <BrowserRouter>
        <Link to="/">home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> | <Link to="/user/10">User</Link> |{" "}
        <Link to="/products">products</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />}>
            <Route path="laptop" element={<Phone />} />
            <Route path="phone" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
