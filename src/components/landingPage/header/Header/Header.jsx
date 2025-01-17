import './Header.css'
import Logo from '../logo/Logo'
import NavBar from '../navbar/NavBar'
import { motion } from 'motion/react'
const Header = () => {
  return (
    <header>
      <Logo />
      <motion.div
        className='nav_header_container'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavBar />
      </motion.div>
    </header>
  )
}

export default Header
