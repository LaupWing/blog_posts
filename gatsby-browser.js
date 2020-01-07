import React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'
require("prismjs/themes/prism.css")

export const wrapRootElement = ({element})=>{
    return(
        <GlobalContextProvider>
            {element}
        </GlobalContextProvider>
    )
}