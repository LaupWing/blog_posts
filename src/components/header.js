import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import {GlobalDispatchContext,GlobalStateContext} from '../context/GlobalContextProvider'

const Header = ({ siteTitle }) => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    return (
        <header
            style={{
            background: `var(--pinkish-color)`,
            marginBottom: `1.45rem`,
            }}
        >
            <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
            >
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
            {state.theme}
            <button onClick={()=>dispatch({type: 'CHANGE_THEME'})}>Toggle Theme</button>
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
