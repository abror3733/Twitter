import { useState } from 'react'
import './App.css'
import AuthenticationApp from './AuthenticationApp'
import UnAuthentication from './UnAuthentication'

function App() {
  const [token, setToken] =useState(JSON.parse(window.localStorage.getItem("token")|| false))
   if(token){
    return <AuthenticationApp/>
   }
   else{
    return <UnAuthentication setToken={setToken}/>
   }
}

export default App
