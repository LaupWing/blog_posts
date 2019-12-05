import React from 'react'
import Link from 'gatsby-link'
const Menu = () =>(
    <nav className="menu"
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </nav>)


export default Menu