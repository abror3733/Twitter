import React from 'react'
import Login from './components/Login/Login'

function UnAuthentication({setToken}) {
  return (
    <Login setToken={setToken}/>
  )
}

export default UnAuthentication