import React, {useContext} from 'react'
import {AppContext} from "./context"
import { FaShoppingBag } from "react-icons/fa"


const Navbar = () => {
    const {totalAmount} = useContext(AppContext); 
    return (
        <header className="header">
        <h1>UseReducer</h1>
        <div className="bag-icon-container"> 
          <FaShoppingBag className="bag-icon"/>
          <div className="item-amt">{totalAmount}</div>
        </div>
      </header>
    )
}

export default Navbar
