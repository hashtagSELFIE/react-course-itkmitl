import React from 'react'
import Input from './Input'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = () => {
    console.log('submit', { username, password })
  }
  return (
    <form>
      <p>
        Username: <Input
          type="text"
          value={username}
          onChange={setUsername}
        />
        {username === '' ? <span>Required username</span> : null}
      </p>
      <p id="password" className="input">
        Password: <Input
          type="password"
          value={password}
          onChange={setPassword}
        />
        {password === '' && <span style={{ color: 'red', marginLeft: '10px' }}>Required password</span>}
      </p>
      <button type="button" onClick={handleSubmit}>Login</button>
    </form>
  )
}

export default LoginForm
