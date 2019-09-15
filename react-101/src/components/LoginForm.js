import React from 'react'
import Input from '../Input'

const LoginForm = () => {
  const [username, setUsername]
  const handlesubmit = (e) => {
    console.log('submit', e)
  }
  return (
    <form onSubmit={handlesubmit}>
        <p>Username: <Input/></p>
        <p>Password: <Input/></p>
        <button type="button" onClick={}>Login</button>
    </form>
  )
}
