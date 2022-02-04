import Duel from '../components/Duel'

import { useState } from 'react'
import './styles/Bet.css'

const Bet = () => {
  const [isAnimate, setisAnimate] = useState(false)
  const [isAnimate2, setisAnimate2] = useState(false)
  const [isAnimate3, setisAnimate3] = useState(false)

  return (
    <div className='wrapperBet'>
      <h1>Les paris</h1>
      <h2>Munus</h2>
      <Duel isAnimate={isAnimate} setisAnimate={setisAnimate} />
      <h2>Harmatodromia</h2>
      <Duel isAnimate={isAnimate2} setisAnimate={setisAnimate2} />
      <h2>Venatio</h2>
      <Duel isAnimate={isAnimate3} setisAnimate={setisAnimate3} />
    </div>
  )
}
export default Bet
