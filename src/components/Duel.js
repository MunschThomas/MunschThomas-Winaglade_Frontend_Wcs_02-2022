import { useState, useEffect } from 'react'
import CardsBestPlayers from '../components/CardsBestPlayers'
import CardsPlayer from '../components/CardsPlayer'

import axios from 'axios'

export default function Duel(props) {
  const [isClicked, setIsClicked] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [gladiators, setGladiators] = useState([])
  const [newGlad, setNewGlad] = useState([])
  const random = props.randomArr

  const changeClass = () => {
    setIsClicked(!isClicked)
  }
  const changeClass1 = () => {
    setIsClicked2(!isClicked2)
  }

  useEffect(() => {
    const getGladiators = async (resolve, reject) => {
      axios
        .get('http://localhost:4242/api/glad/')
        .then((res) => res.data)
        .then((res) => setGladiators(res))
      resolve('1')
    }
    getGladiators()
    setNewGlad(gladiators.splice(random[0], 1))
  }, [])

  console.log(newGlad)

  return (
    <div>
      <div className='opponents'>
        <div className='div1'>
          <div className={`div2 ${props.isAnimate && 'winnerBody'}`}>
            {/* {gladiators.map((gladiator) => ( */}
            {newGlad && (
              <CardsPlayer
                name={newGlad.name_glad}
                key={newGlad.id}
                backgroundImg={newGlad.imageSans}
                agi={newGlad.AGI}
                vit={newGlad.VIT}
                acc={newGlad.ACC}
                man={newGlad.MAN}
                att={newGlad.ATT}
                def={newGlad.DEF}
                ville={newGlad.name_metier}
              />
            )}

            {/* // ))} */}
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
