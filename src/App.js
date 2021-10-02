import React, { useContext } from 'react'
import {AppContext} from "./context"
import Navbar from "./Navbar"
import Bag from "./Bag"



const App = () => {
  // const thingFromContext = useContext(AppContext)

  return (
    <>
      <Navbar/>
      <Bag/>
    </>
  )
}

export default App
