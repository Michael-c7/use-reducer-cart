import React from 'react'


const reducer = (state, action) => {

    if(action.type === "TEST") {
        console.log("the test has worked")
    }

    if(action.type === "CLEAR_CART") {
        return {...state, cart:[]}
    }


    if(action.type === "INCREASE") {
        // return {...state, }
    }
    


    return state;
}

export default reducer
