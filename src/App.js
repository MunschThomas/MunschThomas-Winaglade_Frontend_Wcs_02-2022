import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './screens/Main'
import Navbar from './components/Navbar'
import Bet from './screens/Bet'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Bet' element={<Bet />} />
      </Routes>
    </div>
  )
}

export default App
