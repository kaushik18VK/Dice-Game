import { useState } from 'react'
import React from 'react'
import Startgame from './Components/startgame'
import Gameplay from './Components/Gameplay'


const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false)

  const   toggleGamePlay = () => {
      setisGameStarted((prev)=>!prev)
  };
  return (
    <>
      {isGameStarted ? <Gameplay/>:<Startgame toggle={toggleGamePlay} /> }
    </>
  )
}

export default App
