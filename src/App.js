import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './screens/Main'
import Bet from './screens/Bet'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Bet' element={<Bet />} />
      </Routes>
    </div>
  )
}

export default App
