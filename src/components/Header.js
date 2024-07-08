import React from 'react'
import "../Css/Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav className='navbar'> 
      <Link className='Link' to={"/"}><span className='nav-item'>Home page</span></Link>-
      <span className='nav-item'><a>By Category</a></span>-
      <span className='nav-item'><a>Favorites</a></span>-
      <span className='nav-item'><a>Random Recipe</a></span> 
    </nav>
  )
}

export default Header