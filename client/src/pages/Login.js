import { useState } from "react"
import axios from "axios"

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
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
