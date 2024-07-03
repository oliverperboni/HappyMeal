import React from 'react'
import "../Css/Header.css"
function Header() {
  return (
    <nav className='navbar'> 
      <span className='nav-item'><a>Home page</a></span>-
      <span className='nav-item'><a>By Category</a></span>-
      <span className='nav-item'><a>Favorites</a></span>-
      <span className='nav-item'><a>Random Recipe</a></span> 
    </nav>
  )
}

export default Header