import React from 'react'


const reducer = (state, action) => {

    if(action.type === "TEST") {
        console.log("the test has worked")
    }






    if(action.type === "CLEAR_CART") {
        return {...state, cart:[]}
    }





    if(action.type === "INCREASE_ITEM_AMOUNT") {
        const newItems = state.cart.filter((item) => {
            // action.payload is the current id
            /* if the item id matches the 
            current id add to the amount*/
            if(item.id === action.payload) {
                item.amount = item.amount + 1;
            }
            return item;
        });

        // console.log(state.cart)
        // bug here
        return {...state,cart:newItems }
    }





    if(action.type === "DECREASE_ITEM_AMOUNT") {
        const newItems = state.cart.filter((item) => {

            if(item.id === action.payload) {
                if(item.amount === 0) {
                    // delete item
                    const f = state.cart.filter((item) => item.id !== action.payload);
                    return f;
                }

                item.amount = item.amount - 1;
            }
            return item;
        });

        console.log(state.cart)
        return {...state,cart:newItems }
    }





    if(action.type === "REMOVE_ITEM") {
        const newItems = state.cart.filter((item) => item.id !== action.payload);

        console.log(state.cart)
        return {...state,cart:newItems }
    }




    if(action.type === "CALCULATE_TOTAL") {
        let totalPrice =  state.cart.map((cartItem) => Number(cartItem.amount * cartItem.price)).reduce((prev, curr) =>  Number(prev + curr), 0);
        let totalAmount = state.cart.map((cartItem) => Number(cartItem.amount)).reduce((prev, curr) =>  Number(prev + curr), 0);

        state.totalPrice = Number(totalPrice).toFixed(2);
        state.totalAmount = Number(totalAmount)
    }






    return state;
}

export default reducer
