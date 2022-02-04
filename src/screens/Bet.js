import Duel from '../components/Duel'

import { useState } from 'react'
import './styles/Bet.css'

const Bet = () => {
  const [isAnimate, setisAnimate] = useState(false)
  const [isAnimate2, setisAnimate2] = useState(false)
  const [isAnimate3, setisAnimate3] = useState(false)
  const randomArr = []

  const randomGladiators = () => {
    while (randomArr.length < 6) {
      const r = Math.floor(Math.random() * 20)
      if (randomArr.indexOf(r) === -1) randomArr.push(r)
    }
  }
  randomGladiators()

  return (
    <div className='wrapperBet'>
      <h1>Les paris</h1>
      <h2>Munus</h2>
      <Duel
        isAnimate={isAnimate}
        setisAnimate={setisAnimate}
        randomArr={randomArr}
      />
      <h2>Harmatodromia</h2>
      <Duel
        isAnimate={isAnimate2}
        setisAnimate={setisAnimate2}
        randomArr={randomArr}
      />
      <h2>Venatio</h2>
      <Duel
        isAnimate={isAnimate3}
        setisAnimate={setisAnimate3}
        randomArr={randomArr}
      />
    </div>
  )
}
export default Bet
