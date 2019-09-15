import React, {Fragment} from 'react'

const UserDetailPage = () => (
  console.log(props)
  const user = {}
  return (
    <Fragment>
    <h1>User detail, UserID: {props.match.params.userId}</h1>
    <h3>ID: {user.id}</h3>
    <h3>3Name: {user.name}</h3>
    <h3>Email: {user.email}</h3>
    <h>Role: {user.role}</h>
    <h3>Active: {user.active}</h3>
    </Fragment>
  )

export default UserDetailPage
