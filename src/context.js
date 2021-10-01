import React, { useState, useReducer } from 'react'
import reducer from './reducer'
import data from './data'


// const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialState = {
    loading:false,
    totalAmount:0,
    totalPrice:0,
    cart:data
  }


const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    

    const myTest = _ => {
        dispatch({type:"TEST"})
    }

    const clearCart = _ => {
        dispatch({type:"CLEAR_CART"})
    }




    return (
        <AppContext.Provider value={
            {...state,
            myTest,
            clearCart,
            }
            }>
            {/*Need to render the children*/}
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};