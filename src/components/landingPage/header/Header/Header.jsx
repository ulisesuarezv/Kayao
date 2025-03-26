import './Header.css'
import Logo from '../logo/Logo'
import NavBar from '../navbar/NavBar'
import { motion } from 'motion/react'
import Button from '../../button/Button'
import { useState } from 'react'
// import Estimar from '../../Estimar/Estimar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className='header_container'>
        <Logo />
        <motion.div
          className='nav_header_container'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavBar />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Button className='button_proyect' w='12rem' h='3.1rem'>
            Desarrollemos
          </Button>
        </motion.div>
        {/* {isOpen && <Estimar isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      </div>
      {/* {isOpen && <Estimar isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </header>
  )
}

export default Header
