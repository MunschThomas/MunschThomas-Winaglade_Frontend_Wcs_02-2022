import CardsBestPlayers from '../components/CardsBestPlayers'
import { useState } from 'react'
import './styles/Bet.css'
import 'animate.css'

const Bet = () => {
  const [isAnimate, setisAnimate] = useState(false)
  const [isAnimate2, setisAnimate2] = useState(false)
  const [isAnimate3, setisAnimate3] = useState(false)

  return (
    <div>
      <h1>Les paris</h1>
      <div className='duel'>
        <h2>Munus</h2>
        <div className='opponents'>
          <div className='div1'>
            <div className={`div2 ${isAnimate && 'winnerBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
          <div className='div6'>
            <button onClick={() => setisAnimate(!isAnimate)}>Attaque</button>
          </div>
          <div className='div5'>
            <div className={`div5 ${isAnimate && 'looserBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
        </div>
      </div>
      <div className='duel'>
        <h2>Harmatodromia</h2>
        <div className='opponents'>
          <div className='div1'>
            <div className={`div2 ${isAnimate2 && 'winnerBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
          <div className='div6'>
            <button onClick={() => setisAnimate2(!isAnimate2)}>Attaque</button>
          </div>
          <div className='div5'>
            <div className={`div5 ${isAnimate2 && 'looserBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
        </div>
      </div>
      <div className='duel'>
        <h2>Venatio</h2>
        <div className='opponents'>
          <div className='div1'>
            <div className={`div2 ${isAnimate3 && 'winnerBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
          <div className='div6'>
            <button onClick={() => setisAnimate3(!isAnimate3)}>Attaque</button>
          </div>
          <div className='div5'>
            <div className={`div5 ${isAnimate3 && 'looserBody'}`}>
              <CardsBestPlayers name='JeanFulusse' />
            </div>
            <button>Cote</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bet
