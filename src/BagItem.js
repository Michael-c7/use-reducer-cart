import React, {useContext} from 'react'
import {AppContext} from "./context"
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go"

const BagItem = (item) => {
    const {increaseItemAmount, decreaseItemAmount, removeItem} = useContext(AppContext)

    const {id, amount, img, price, title} = item;
    return (
        <li className="bag__item">
          <div className="item__details">
            <img className="item__details__img" src={img} alt=""/>
            <div className="item__details__item">
              <h2 className="item__detail__title">{title}</h2>
              <h3 className="item__detail__price">${price}</h3>
              <button className="item__detail__remove-btn" onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
          <div className="item__amt">
            <button className="item__amt__add-btn" onClick={() => increaseItemAmount(id)}>
                <GoArrowSmallUp className="arrow-icon"/>
            </button>
            <div className="item__amt__amt">{amount}</div>
            <button className="item__amt__remove-btn" onClick={() => decreaseItemAmount(id)}>
                <GoArrowSmallDown className="arrow-icon"/>
            </button>
          </div>
      </li>
    )
}

export default BagItem
