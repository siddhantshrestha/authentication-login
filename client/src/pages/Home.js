import React from "react"
// import { Link } from 'react-router-dom'

const Home = () => {
  const removeToken = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
  const user = localStorage.getItem("token")
  return (
    <div>
      {!user ? (
        <h1>home page without login</h1>
      ) : (
        <>
          <h1>home page with login</h1>
          <button onClick={removeToken}>Logout</button>
        </>
      )}
    </div>
  )
}

export default Home
