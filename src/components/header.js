import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import {GlobalDispatchContext,GlobalStateContext} from '../context/GlobalContextProvider'
import MachaIcon from './icons/macha'
import BeerIcon from './icons/beer'
import IcecreamIcon from './icons/icecream'

const Header = ({ siteTitle }) => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    
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
                    {state.theme}
                    <MachaIcon/>
                    <BeerIcon/>
                    <IcecreamIcon/>
                    {/* <button onClick={()=>dispatch({type: 'CHANGE_THEME', value:'BEER'})}>Set Beer Theme</button> */}
                    {/* <button onClick={()=>dispatch({type: 'CHANGE_THEME', value:'ICECREAM'})}>Set Icecream theme</button> */}
                    <button onClick={()=>dispatch({type: 'CHANGE_THEME', value:'MACHA'})}>Set Matcha Theme</button>
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
