import React from "react"
import { Link } from "react-router-dom"
// import Login from "./pages/Login"

const Navbar = () => {
  return (
    <div>
      <nav className='navbar '>
        <ul className='navbar-nav mr-auto'>
          <li style={{ listStyle: "none" }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/Login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/Register"} style={{ textDecoration: "none" }}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
