import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logoW.png'

import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    const navbar = document.getElementById('navbar')
    setIsOpen(!isOpen)
    if (navbar.classList.contains('visible')) {
      navbar.classList.remove('visible')
      navbar.classList.add('invisible')
    } else if (navbar.classList.contains('invisible')) {
      navbar.classList.remove('invisible')
      navbar.classList.add('visible')
    } else {
      navbar.classList.add('visible')
    }
  }

  return (
    <div className='Nav'>
      <div className='NavCredits'>
        <h3>💰 1523.21 Sesterces</h3>
      </div>
      <Link to='/' className='NavLogoMoove'>
        <img className='NavLogo' src={Logo} alt='logo'></img>
      </Link>
      <div id='navbar' className=''>
        <ul>
          <li className='nav'>
            <a href='#' className='navLink'>
              Lien 1
            </a>
          </li>
          <li className='nav'>
            <a href='#' className='navLink'>
              Lien 2
            </a>
          </li>
          <li className='nav'>
            <a href='#' className='navLink'>
              Lien 3
            </a>
          </li>
        </ul>
      </div>
      <div
        id='menu-burger'
        className={isOpen ? 'clicked' : undefined}
        onClick={openMenu}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </div>
  )
}

export default Navbar
