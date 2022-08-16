import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Protected from "./pages/Protected"

const App = () => {
  const user = localStorage.getItem("token")

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Protected Ele={Home} />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
