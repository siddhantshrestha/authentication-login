import { useState } from "react"
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const registerUser = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      })
      navigate('/login')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <form id='register-form' onSubmit={registerUser}>
       <div className="form-detail">
       <h1>Register</h1>

<input
  type='text'
  placeholder='Name'
  value={name}
  onChange={e => setName(e.target.value)}
/>
<br />
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
<input id='btn' type='submit' value='Register' />
<h4>Already have an account? <Link to={'/login'}>Sign In</Link></h4>

       </div>
      </form>
    </div>
  )
}

export default Register
