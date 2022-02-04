import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Main from './screens/Main'
import Navbar from './components/Navbar'
import Bet from './screens/Bet'
import Gladiators from './screens/Gladiators'

function App() {
  const [theme, setTheme] = useState('')

  const changeTheme = (props) => {
    setTheme(props)
  }

  return (
    <div className='App' data-theme={theme}>
      <div className='rome' onClick={() => changeTheme('rome')}>
        Rome
      </div>
      <div className='egypte' onClick={() => changeTheme('egypte')}>
        Egypte
      </div>
      <div className='grece' onClick={() => changeTheme('grece')}>
        Grece
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Bet' element={<Bet />} />
        <Route path='/Gladiators' element={<Gladiators />} />
      </Routes>
    </div>
  )
}

export default App
