import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Protected = props => {
  const navigate = useNavigate()
  const { Ele } = props
  useEffect(() => {
    const login = localStorage.getItem("token")
    if (!login) {
        navigate("/login")  
    }
  }, [navigate])

  return (
    <div>
      <Ele />
    </div>
  )
}

export default Protected
