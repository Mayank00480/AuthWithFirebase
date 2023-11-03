import React from 'react'
const StoreContext = React.createContext({
    token : null,
    addToken : () =>{},
    removeToken : () =>{}
})  
export default StoreContext;