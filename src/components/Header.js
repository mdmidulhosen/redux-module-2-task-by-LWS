import React from 'react'
import lwsLogo from "../img/lws-logo.svg"

function Header() {
  return (
    <header id="header">
    <div className="container">
      <img src={lwsLogo} alt="logo" className="logo" />
      <div className="flex items-center">
        <a className="text-white min-w-[50px] font-medium" href="https://www.example.com">
          Home
        </a>
        <button className="log-btn btn">Login</button>
      </div>
    </div>
  </header>
  )
}

export default Header
