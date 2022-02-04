import { useState, useEffect } from 'react'
import CardsBestPlayers from '../components/CardsBestPlayers'

export default function Duel(props) {
  const [isClicked, setIsClicked] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)

  const changeClass = () => {
    setIsClicked(!isClicked)
  }
  const changeClass1 = () => {
    setIsClicked2(!isClicked2)
  }

  return (
    <div>
      <div className='opponents'>
        <div className='div1'>
          <div className={`div2 ${props.isAnimate && 'winnerBody'}`}>
            <CardsBestPlayers name='JeanFulusse' />
          </div>
          <button
            onClick={() => changeClass()}
            className={isClicked ? 'clickedCote' : 'coteClass'}
          >
            Cote
          </button>
        </div>
        <div className='div6'>
          <button onClick={() => props.setisAnimate(!props.isAnimate)}>
            Attaque
          </button>
        </div>
        <div className='div5'>
          <div className={`div5 ${props.isAnimate && 'looserBody'}`}>
            <CardsBestPlayers name='JeanFulusse' />
          </div>
          <button
            onClick={() => changeClass1()}
            className={isClicked2 ? 'clickedCote' : 'coteClass'}
          >
            Cote
          </button>
        </div>
      </div>
    </div>
  )
}
