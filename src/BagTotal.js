import React, {useContext} from 'react'
import {AppContext} from "./context"

const BagTotal = () => {
  const {totalPrice} = useContext(AppContext)

    return (
        <div className="bag__total">
          <hr/>
          <div className="bag__total__items">
            <h2>Total</h2>
            <h3>${totalPrice}</h3>
          </div>
        </div>
    )
}

export default BagTotal
