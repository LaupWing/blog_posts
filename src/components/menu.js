import React from 'react'
import Link from 'gatsby-link'
const Menu = () =>(
    <nav className="menu">
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">About</Link>
        <Link partiallyActive={true} activeClassName="active" to="/blog">Blog</Link>
    </nav>)


export default Menu