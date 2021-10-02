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


    const increaseItemAmount = id => {
        dispatch({type:"INCREASE_ITEM_AMOUNT", payload:id})
    }

    const decreaseItemAmount = id => {
        dispatch({type:"DECREASE_ITEM_AMOUNT", payload:id})
    }


    const removeItem = id => {
        dispatch({type:"REMOVE_ITEM", payload:id})
    }

    const calculateTotal = _ => {
        dispatch({type:"CALCULATE_TOTAL"})
    }




    return (
        <AppContext.Provider value={
            {...state,
            myTest,
            clearCart,
            increaseItemAmount,
            decreaseItemAmount,
            removeItem,
            calculateTotal,
            }
            }>
            {/*Need to render the children*/}
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};