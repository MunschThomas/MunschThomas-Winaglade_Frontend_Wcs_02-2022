import CardsBestPlayers from '../components/CardsBestPlayers'
import { useState } from 'React'
import './styles/Bet.css'
import 'animate.css'

const Bet = () => {
  const [isAnimate, setisAnimate] = useState(false)

  const animate = () => {}
  return (
    <div>
      <h1>Les paris</h1>
      <div className='opponents'>
        <div className='div1'>
          <div className='div2'>
            <CardsBestPlayers name='JeanFulusse' />
          </div>
          <button>Cote</button>
          <div className='div3'> </div>
        </div>
        <div className='div4'>
          <div className='winner'>
            <div className='winnerBody'></div>
            <div className='winnerWeapons'></div>
          </div>
          <div className='looser'>
            <div className='looserBody'></div>
          </div>
        </div>
        <div className='div6'>
          <button onClick={() => animate()}>Attaque</button>
        </div>
        <div className='div5'>
          <div className='div8'>
            <CardsBestPlayers name='JeanFulusse' />
          </div>
          <div className='div7'>
            <button>Cote</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bet
