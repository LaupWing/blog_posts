import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    theme: 'icecream'
}

function reducer(state, action){
    switch(action.type){
        case 'CHANGE_THEME':{
            return{
                ...state,
                theme: state.theme === 'icecream' ?  'dark' : 'icecream'
            }
        }
        default: 
            throw new Error('Bad Action type')
    }
}

const GlobalContextProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
}

export default GlobalContextProvider