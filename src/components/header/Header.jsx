import React from 'react'
import LoginButton from './LoginButton'

const Header = () => {
  return (
    <nav className = " flex justify-between items-center px-7 py-3 border-b">
        <img src="/logo.png" className = "h-10" alt="navbar logo" />
        <ul className = "flex gap-6 items-center ">
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact Us</li>
        </ul>
        <LoginButton/>
    </nav>
  )
}

export default Header