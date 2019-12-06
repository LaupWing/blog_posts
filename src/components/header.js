import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import {GlobalStateContext} from '../context/GlobalContextProvider'
import MachaIcon from './icons/macha'
import BeerIcon from './icons/beer'
import IcecreamIcon from './icons/icecream'

const Header = ({ siteTitle }) => {
    const state = useContext(GlobalStateContext)
    const checkActive = (condition)=>{
        console.log(condition, state.theme)
        if(state.theme === condition){
            return 'active'
        }
        return null
    }

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
                    <MachaIcon className={checkActive('macha')}/>
                    <BeerIcon className={checkActive('beer')} />
                    <IcecreamIcon className={checkActive('icecream')}/>
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
