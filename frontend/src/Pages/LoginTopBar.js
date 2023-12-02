import React from 'react'
import { Link } from 'react-router-dom'

const LoginTopBar = () => {
  return (
    <nav>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          LAUNDRY
        </div>
        <div className="nav-elements">
          <button className='button-elements'>Home</button>
          <button className='button-elements'>Pricing</button>
          <button className='button-elements'>Career</button>
          <Link to="/register"><button id="Signin-Button" className='button-elements'>Sign In</button></Link> 
        </div>
      </div>
    </nav>
  </nav>
  )
}

export default LoginTopBar