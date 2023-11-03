import React,{useState} from 'react'
import StoreContext from './StoreContext'
const ContextProvider = (props) => {
    const [token , setToken] = useState(null);
    console.log(token)
    const addTokenHandler = (value) =>{
        setToken(value);
    }
    const removeTokenHandler = () =>{
        setToken(null);
    }
    const context = {
        token : token,
        addToken : addTokenHandler,
        removeToken : removeTokenHandler
    }
  return (
    <StoreContext.Provider value = {context}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default ContextProvider
