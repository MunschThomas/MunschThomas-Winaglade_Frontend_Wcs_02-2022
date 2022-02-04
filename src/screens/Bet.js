import Duel from '../components/Duel'
import { useState, useEffect } from 'react'
import './styles/Bet.css'
// import { useEffect } from "react/cjs/react.production.min";

const Bet = () => {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [" Parier ", " Gagner", " Vibrer"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 120,
  //     backSpeed: 80,
  //     backDelay: 700,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: " !",
  //     autoInsertCss: true,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  const combat1L = 'aa'
  const combat1W = 'bb'

  const combat2L = 'cc'
  const combat2W = 'dd'

  const combat3L = 'ee'
  const combat3W = 'ff'

  const [coteTot, setCoteTot] = useState([])
  const [finalCote, setFinalCote] = useState(0)

  useEffect(() => {
    if (coteTot.length) {
      setFinalCote(coteTot.reduce((acc, val) => acc + val))
      console.log('yo again', coteTot)
    }
    console.log('yoooooazazaz')
  }, [coteTot])

  return (
    <div className='wrapperBet'>
      <div className='coteTot'>{finalCote && finalCote}</div>
      <h1>Les paris</h1>
      <h2>Munus</h2>
      <Duel
        combat={combat1L}
        combat2={combat1W}
        epreuve={'Munus'}
        coteTot={coteTot}
        setCoteTot={setCoteTot}
        setFinalCote={setFinalCote}
      />
      <h2>Harmatodromia</h2>
      <Duel
        combat={combat2L}
        combat2={combat2W}
        epreuve={'Harmatodromia'}
        coteTot={coteTot}
        setCoteTot={setCoteTot}
      />
      <h2>Venatio</h2>
      <Duel
        combat={combat3L}
        combat2={combat3W}
        epreuve={'Venatio'}
        coteTot={coteTot}
        setCoteTot={setCoteTot}
      />
    </div>
  )
}
export default Bet
