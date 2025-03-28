import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='nav_container'>
        <ul className='nav_list'>
          <li className='nav_item'>
            <NavLink className='nav_link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className='nav_link' to='/services'>
              Services
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className='nav_link' to='/about'>
              About Us
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className='nav_link'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
