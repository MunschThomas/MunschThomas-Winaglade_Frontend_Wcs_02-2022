import './styles/Bet.css'

import { useState, useEffect } from 'react'
import CardsPlayer from '../components/CardsPlayer'
import axios from 'axios'

export default function Gladiators() {
  const [allGlads, setallGlads] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get('http://localhost:4242/api/glad/')
        .then((res) => res.data)
        .then((res) => setallGlads(res))
    }

    fetchData()
  }, [])

  return (
    <div className='marginTop'>
      <h2 className='h1Title'>Les gladiators</h2>
      <div className='contentAll'>
        {allGlads.map((gladiator) => (
          <CardsPlayer
            name={gladiator.name_glad}
            key={gladiator.id}
            backgroundImg={gladiator.imageSans}
            agi={gladiator.AGI}
            vit={gladiator.VIT}
            acc={gladiator.ACC}
            man={gladiator.MAN}
            att={gladiator.ATT}
            def={gladiator.DEF}
            ville={gladiator.name_metier}
          />
        ))}
      </div>
    </div>
  )
}
