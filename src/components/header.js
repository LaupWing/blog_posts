import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MachaIcon from './icons/macha'
import BeerIcon from './icons/beer'
import IcecreamIcon from './icons/icecream'

const Header = ({ siteTitle }) => {

    return (
        <header>
            <div className='content'>
                <h1 style={{ margin: 0 }}>
                    <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                    >
                    {siteTitle}
                    </Link>
                </h1>
                <div className="themes">
                    {/* {state.theme} */}
                    <MachaIcon/>
                    <BeerIcon/>
                    <IcecreamIcon/>
                </div>  
            </div>
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
