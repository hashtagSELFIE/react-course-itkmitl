import React, { useState, useEffect } from 'react'

const UserPage = () => {
  const [users, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('fetch data')
    const getUsers = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:8000/users')
      const data = await response.json()
      console.log(data)
      setUser(data)
      setLoading(false)
    }
    getUsers()
  }, [])
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
            <th>{user.role}</th>
            <th>{user.active}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserPage
