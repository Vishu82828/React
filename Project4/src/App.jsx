import React from "react"
import Cart from "./Components/Cart"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import {BrowserRouter, Routes, Router, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/Home" Component={Home} />
      <Route path="/Cart" Component={Cart} />
      {/* <Route path="/" Component={} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
