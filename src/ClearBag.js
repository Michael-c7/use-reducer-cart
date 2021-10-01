import React, { useContext } from 'react';
import { AppContext } from "./context"

const ClearBag = () => {
    const { clearCart } = useContext(AppContext)

    return (
        <button className="clear-bag-btn" onClick={clearCart}>Clear Bag</button>
    )
}

export default ClearBag
