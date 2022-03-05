import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const url = 'http://localhost:5000/login'
  const navigate = useNavigate()

  const handleLogin = () => {
    axios.post(url, {username: 'preeya', password: '00000'}, {withCredentials: true})
    .then(res => {
      console.log(res)
      navigate('/')

    })
    .catch(err => {
      console.error(err)
      navigate('/login')
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
