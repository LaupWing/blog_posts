import React from 'react'
import Link from 'gatsby-link'
const Menu = () =>(
    <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
    </nav>)


export default Menu