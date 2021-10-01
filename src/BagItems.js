import React, {useContext} from 'react';
import BagItem from './BagItem'
import { AppContext } from './context';

const BagItems = () => {
    const {cart} = useContext(AppContext)
    return (
        <ul className="bag__items">
          {cart.map((item) => {
              return <BagItem key={item.id} {...item}/>
          })}
        </ul>
    )
}

export default BagItems
