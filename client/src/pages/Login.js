import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const LoginUser = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      })
      localStorage.setItem("token", res.data.data)

      
      window.location = "/"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <form id='login-form' onSubmit={LoginUser}>
       <div className="form-detail">
       <h1>Login</h1>

<input
  type='email'
  placeholder='Email'
  value={email}
  onChange={e => setEmail(e.target.value)}
/>
<br />

<input
  type='password'
  placeholder='Password'
  value={password}
  onChange={e => setPassword(e.target.value)}
/>
<br />
<input id='btn' type='submit' value='Login' />
<h4>Need an account? <Link to={'/register'}>Sign Up</Link></h4>
       </div>

      </form>
    </div>
  )
}

export default Login
