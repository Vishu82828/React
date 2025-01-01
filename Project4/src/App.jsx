import React from "react";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/NotFound" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
