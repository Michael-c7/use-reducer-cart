import React, { useEffect } from 'react'
import BagHeading from './BagHeading'
import BagItems from './BagItems'
import BagTotal from './BagTotal'
import ClearBag from './ClearBag'

import { AppContext } from './context'

const Bag = () => {
    const {cart, calculateTotal} = React.useContext(AppContext)


    useEffect(() => {
        calculateTotal()
    }, [cart])

    return (
        <section className="bag">
            <BagHeading/>
            <BagItems/>
            {cart.length !== 0 ? <BagTotal/>  : ""}
            {cart.length !== 0 ? <ClearBag/>  : ""}
            {cart.length === 0 ? <h2 className="empty-cart-text">Your cart is empty</h2> : ""}
      </section>
    )
}

export default Bag
