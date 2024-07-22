import React from 'react'
import "../Css/Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav className='navbar'> 
      <Link className='Link' to={"/"}><span className='nav-item'>Home page</span></Link>-
      <Link className='Link' to={"/category"}><span className='nav-item'><a>By Category</a></span></Link>-
      <Link className='Link' to={"/"}><span className='nav-item'><a>Favorites</a></span></Link>-
      <Link className='Link' to={"/"}><span className='nav-item'><a>Random Recipe</a></span></Link>
    </nav>
  )
}

export default Header